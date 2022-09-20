import { Stack, Button, SxProps } from '@mui/material'

const style: SxProps = {
  '&:hover': {
    backgroundColor: '#1E57B7',
    color: '#fff'
  }
}

interface buttonProps {
  name: string
  disabled: boolean
}

export function SubmitButton({ name, disabled }: buttonProps) {
  return (
    <Stack sx={{ maxWidth: '33vh' }}>
      <Button
        sx={style}
        type="submit"
        variant="contained"
        size="large"
        color="secondary"
        name={name}
        disabled={disabled}
      >
        Enviar
      </Button>
    </Stack>
  )
}
