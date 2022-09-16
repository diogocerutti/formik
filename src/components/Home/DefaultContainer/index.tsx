import { Stack, Container } from '@mui/material'
import { ReactNode } from 'react'

type DefaultContainerTypes = {
  children: ReactNode
}

export function DefaultContainer({ children }: DefaultContainerTypes) {
  return (
    <Container maxWidth={'lg'}>
      <Stack
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'baseline'}
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        {children}
      </Stack>
    </Container>
  )
}
