import { ChangeEventHandler } from 'react'
import { TextField } from '@mui/material'

interface TextFieldCustomTypes {
  name: string
  label: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  error: boolean | undefined
  helperText: string | false | undefined
}

export function TextFieldCustom({
  name,
  label,
  value,
  onChange,
  error,
  helperText
}: TextFieldCustomTypes) {
  return (
    <TextField
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      variant="outlined"
      size="small"
      FormHelperTextProps={{
        sx: { height: 0 }
      }}
    />
  )
}
