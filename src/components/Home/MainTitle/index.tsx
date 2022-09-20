import { Stack, Typography } from '@mui/material'

const style = {
  mainTitle: {
    fontSize: '30px',
    fontWeight: 'bold'
  },
  mainSubtitle: {
    fontSize: '15px'
  }
}

interface MainTitleTypes {
  open: string
  name: string
  email: string
  telephone: string
  message: string
}

export function MainTitle({
  open,
  name,
  email,
  telephone,
  message
}: MainTitleTypes) {
  return (
    <Stack width="100%">
      <Typography sx={style.mainTitle}>Fale conosco</Typography>
      <Typography sx={style.mainSubtitle}>
        Gostaria de falar conosco sobre algum assunto que não encontrou por
        aqui? Sinta-se a vontade, responderemos rapidinho.
      </Typography>
      <Stack
        sx={{ border: 1, display: open, padding: 1, mt: 2, borderRadius: 1 }}
      >
        <Typography sx={{ fontWeight: 'bold' }}>DADOS ENVIADOS:</Typography>
        <Typography>Nome: {name}</Typography>
        <Typography>E-mail: {email}</Typography>
        <Typography>Telefone: {telephone}</Typography>
        <Typography>Mensagem: {message}</Typography>
      </Stack>
    </Stack>
  )
}
