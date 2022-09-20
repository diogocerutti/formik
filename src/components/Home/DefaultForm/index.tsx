import { FormEventHandler, FocusEventHandler, ReactNode } from 'react'
import { Stack } from '@mui/material'

interface DefaultFormTypes {
  onSubmit: FormEventHandler<HTMLFormElement>
  onBlur: FocusEventHandler<HTMLFormElement>
  children: ReactNode
}

export function DefaultForm({ onSubmit, onBlur, children }: DefaultFormTypes) {
  return (
    <Stack
      component="form"
      autoComplete="off"
      width="100%"
      spacing={3}
      onSubmit={onSubmit}
      onBlur={onBlur}
    >
      {children}
    </Stack>
  )
}
