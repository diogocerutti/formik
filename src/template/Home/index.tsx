import * as React from 'react'
import { Container, Button, Stack, Typography } from '@mui/material'
import { Formik, FormikHelpers, FormikProps, Form, Field } from 'formik'
import {
  TextFieldCustom,
  TextFieldMessage
} from '../../components/Home/TextFieldCustom'
import * as yup from 'yup'
import { styles } from './styles'

interface FormValues {
  name: string
  email: string
  telephone: string
  message: string
}

// the Formik component supports yup validation out-of-the-box via the `validationSchema` prop
const validationSchema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().required('Campo obrigatório'),
  telephone: yup
    .string() // tentei usar .number() mas não deu
    .required('Campo obrigatório')
    .matches(/^[0-9]+$/, 'Campo inválido')
    .min(14, 'Campo inválido')
    .max(14, 'Campo inválido'),
  message: yup
    .string()
    .required('Campo obrigatório')
    .min(10, 'Limite mínimo de 10 caracteres')
    .max(100, 'Limite máximo de 100 caracteres')
})

export default function App() {
  return (
    <Stack maxWidth={'xs'}>
      <Container>
        <Stack maxWidth={'xs'} display="flex" flexDirection={'row'}>
          <Stack sx={{ width: '50%', margin: '1%' }}>
            <Typography sx={styles.mainTitle}>Fale conosco</Typography>
            <Typography sx={styles.mainSubtitle}>
              Gostaria de falar conosco sobre algum assunto que não encontrou
              por aqui? Sinta-se a vontade, responderemos rapidinho.
            </Typography>
          </Stack>
          <Stack sx={{ width: '50%', margin: '1%' }}>
            <Formik
              initialValues={{
                name: '',
                email: '',
                telephone: '',
                message: ''
              }}
              validationSchema={validationSchema}
              onSubmit={(
                values: FormValues,
                formikHelpers: FormikHelpers<FormValues>
              ) => {
                alert(JSON.stringify(values, null, 2))
                formikHelpers.setSubmitting(false)
              }}
            >
              {(formikProps: FormikProps<FormValues>) => (
                <Form noValidate autoComplete="off">
                  <Stack>
                    <Field
                      name="name"
                      label="Nome"
                      size="small"
                      component={TextFieldCustom}
                    />
                  </Stack>
                  <Stack>
                    <Field
                      name="email"
                      label="E-mail"
                      size="small"
                      component={TextFieldCustom}
                    />
                  </Stack>
                  <Stack>
                    <Field
                      name="telephone"
                      label="Telefone"
                      size="small"
                      component={TextFieldCustom}
                    />
                  </Stack>
                  <Stack>
                    <Field
                      name="message"
                      size="large"
                      component={TextFieldMessage}
                    />
                  </Stack>
                  <Stack sx={{ maxWidth: '33vh' }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      color="secondary"
                      disabled={formikProps.isSubmitting}
                    >
                      Submit
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}
