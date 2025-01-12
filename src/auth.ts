import NextAuth, { CredentialsSignin } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { User } from './models/userModel';
import CredentialProvider from 'next-auth/providers/credentials';
import Credentials from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';


export const { handlers, signIn, signOut, auth } = NextAuth ({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                },
                password: {
                    label: "Password",
                    type: "password"
                },
            },
            authorize: async (credentials) => {

                const email = credentials.email as string | undefined;
                const password = credentials.password as string | undefined;

                if (!email || !password)
                    throw new CredentialsSignin("please provide email and password");

                const user = await User.findOne({email}).select('+password');

                if (!user) 
                    throw new CredentialsSignin({cause: "User not found"});

                if (!user.password)
                    throw new CredentialsSignin("Invalid User Id");

                const isMatch = await compare (password, user.password);
                if (!isMatch)
                    throw new CredentialsSignin("Password does not match");
                return {name: user.name, email: user.email, id: user._id};

            }
        }),
    ],
});