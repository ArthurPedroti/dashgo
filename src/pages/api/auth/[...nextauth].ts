import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  pages: {
    signIn: '/'
  },
  providers: [
    CredentialsProvider({
      name: 'Sign-in',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (credentials) {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`,
            {
              method: 'POST',
              body: new URLSearchParams({
                identifier: credentials.email,
                password: credentials.password
              })
            }
          )

          const data = await response.json()
          // console.log('data', data)

          if (data.user) {
            return { ...data.user, jwt: data.jwt }
          }
        }
        return null
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.jwt = token.jwt

      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.username as string
        token.jwt = user.jwt
      }

      return token
    }
  }
})
