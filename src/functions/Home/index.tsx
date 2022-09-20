import { Dispatch, SetStateAction } from 'react'

export function handleSubmit(
  setOpen: Dispatch<SetStateAction<string>>,
  open: string
) {
  setOpen(open)
}
