import { Stack, Button, SxProps } from '@mui/material'

const style: SxProps = {
  '&:hover': {
    backgroundColor: '#1E57B7',
    color: '#fff'
  }
}

interface SubmitButtonTypes {
  disabled: boolean
}

export function SubmitButton({ disabled }: SubmitButtonTypes) {
  return (
    <Stack sx={{ maxWidth: '33vh' }}>
      <Button
        sx={style}
        type="submit"
        variant="contained"
        size="large"
        color="secondary"
        disabled={disabled}
      >
        Enviar
      </Button>
    </Stack>
  )
}
