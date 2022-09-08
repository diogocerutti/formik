import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  name: yup.string().required('Digite seu nome.'),
  email: yup.string().required('Campo obrigatório.').email('E-mail inválido'),
  telephone: yup
    .string() // tentei usar .number() mas não deu
    .required('Digite seu telefone')
    .matches(/^[0-9]+$/, 'Campo inválido.')
    .min(14, 'Campo inválido.')
    .max(14, 'Campo inválido.'),
  message: yup
    .string()
    .required('Digite sua mensagem.')
    .min(10, 'Limite mínimo de 10 caracteres.')
    .max(100, 'Limite máximo de 100 caracteres.')
})
