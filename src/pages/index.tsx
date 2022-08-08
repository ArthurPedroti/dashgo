import { signIn } from 'next-auth/react'
import { Button, Flex, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../components/Form/Input'
import { useRouter } from 'next/router'

type SignInFormData = {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: yup.string().required('Senha obrigatória')
})

const SignIn: NextPage = () => {
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema)
  })
  const { errors } = formState
  const { push } = useRouter()

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/dashboard'
    })
    console.log(result)
    if (result?.url) {
      return push(result.url)
    }
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p={['6', '8']}
        mx={['4', 'auto']}
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            type="email"
            label="Email"
            error={errors.email}
            {...register('email')}
          />
          <Input
            type="password"
            label="Password"
            error={errors.password}
            {...register('password')}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}

export default SignIn
