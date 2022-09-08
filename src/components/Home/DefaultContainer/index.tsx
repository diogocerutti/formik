import { Stack, Container } from '@mui/material'
import { ReactNode } from 'react'

type DefaultContainerTypes = {
  children: ReactNode
}

export function DefaultContainer({ children }: DefaultContainerTypes) {
  return (
    <Stack maxWidth={'xs'}>
      <Container>
        <Stack maxWidth={'xs'} display="flex" flexDirection={'row'}>
          {children}
        </Stack>
      </Container>
    </Stack>
  )
}
