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
    <Stack sx={{ width: '50%' }}>
      <Typography sx={style.mainTitle}>Fale conosco</Typography>
      <Typography sx={style.mainSubtitle}>
        Gostaria de falar conosco sobre algum assunto que não encontrou por
        aqui? Sinta-se a vontade, responderemos rapidinho.
      </Typography>
      <Stack sx={{ border: 1, display: open }}>
        <Typography>DADOS ENVIADOS:</Typography>
        <Typography>Nome: {name}</Typography>
        <Typography>E-mail: {email}</Typography>
        <Typography>Telefone: {telephone}</Typography>
        <Typography>Menssagem: {message}</Typography>
      </Stack>
    </Stack>
  )
}
