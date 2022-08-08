import 'next-auth'
import {
  BuiltInProviderType,
  RedirectableProviderType
} from 'next-auth/providers'
import {
  LiteralUnion,
  SignInAuthorizationParams,
  SignInOptions,
  SignInResponse
} from 'next-auth/react'

declare module 'next-auth/react' {
  export * from 'next-auth/react'

  export declare function signIn<
    P extends RedirectableProviderType | undefined = undefined
  >(
    provider?: LiteralUnion<P | BuiltInProviderType>,
    options?: SignInOptions,
    authorizationParams?: SignInAuthorizationParams
  ): Promise<
    P extends RedirectableProviderType ? SignInResponse | undefined : undefined
  >
}
