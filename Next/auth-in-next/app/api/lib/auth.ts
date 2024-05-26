import CredentialsProvider from "next-auth/providers/credentials";

export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials: any) {
        console.log("All credentials received: ", credentials);
        const { username, password } = credentials;
        console.log("Username received: ", username);
        console.log("Password received: ", password);

        // Dummy validation for example purposes
        if (username === "arun" && password === "1234") {
          const user = {
            id: "1",
            name: "arunsharma",
            email: "arun@cloud",
            username: username,
            key: "1234",
          };
          console.log("User validated and returned: ", user);
          return user;
        } else {
          console.log("Invalid credentials");
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }: any) {
      console.log("JWT callback invoked. Token: ", token, " User: ", user);
      if (user) {
      console.log('is entereing here ' )
        token.id = user.id;
        token.username = user.username;
        token.key = user.key; // Add the key to the token
      }
      return token;
    },
    async session({ session, token }: any) {
      console.log(
        "Session callback invoked. Session: ",
        session,
        " Token: ",
        token
      );
      if (token) {
        session.userId = token.id;
        session.key = token.key;
      }
      return session;
    },
  },
};
