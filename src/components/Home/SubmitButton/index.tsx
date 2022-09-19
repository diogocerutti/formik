import { Stack, Button, SxProps } from '@mui/material'

const style: SxProps = {
  '&:hover': {
    backgroundColor: '#1E57B7',
    color: '#fff'
  }
}

export function SubmitButton() {
  return (
    <Stack sx={{ maxWidth: '33vh' }}>
      <Button
        sx={style}
        type="submit"
        variant="contained"
        size="large"
        color="secondary"
      >
        Enviar
      </Button>
    </Stack>
  )
}
