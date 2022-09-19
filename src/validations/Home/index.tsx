import * as yup from 'yup'

export const validation = yup.object().shape({
  name: yup.string().trim().required('Digite seu nome.'),
  email: yup
    .string()
    .trim()
    .required('Campo obrigatório.')
    .email('E-mail inválido'),
  telephone: yup
    .string() // tentei usar .number() mas não deu
    .trim()
    .required('Digite seu telefone')
    .matches(/^[0-9]+$/, 'Campo inválido.')
    .min(11, 'Campo inválido.')
    .max(11, 'Campo inválido.'),
  message: yup
    .string()
    .trim()
    .required('Digite sua mensagem.')
    .min(10, 'Limite mínimo de 10 caracteres.')
    .max(100, 'Limite máximo de 100 caracteres.')
})
