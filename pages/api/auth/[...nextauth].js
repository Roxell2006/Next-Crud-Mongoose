import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials'
import User from '../../../models/user'
import connectDB from '../../../database/connectDB';

export default NextAuth({
    session: { jwt: true },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {

                connectDB();
        
                const { email, password } = credentials;
                
                // Check if email and password is entered
                if (!email || !password) {
                    throw new Error('Please enter email or password');
                }
                // Find user in the database
                const user = await User.findOne({ email }).select('+password');
                
                if (!user) 
                    throw new Error('Invalid Email or Password')
                
                // Check if password is correct or not
                const isPasswordMatched = await user.comparePassword(password);
               
                if (!isPasswordMatched) 
                    throw new Error('Invalid Email or Password') ;

                return Promise.resolve(user)
            }
        })
    ],
    callbacks: {
        // called when token is created
        async jwt({token, user}){
            if (user) {
                token.user = user;
                console.log('taratata: ' + user);
            }
            return Promise.resolve(token);
        },
 
        session: async({session, token}) => {
            session.user = token.user;
            return Promise.resolve(session);
        }
    }
})
