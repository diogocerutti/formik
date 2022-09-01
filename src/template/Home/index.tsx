import * as React from 'react'
import {
  Container,
  Button,
  Stack,
  Typography,
  TextareaAutosize
} from '@mui/material'
import { Formik, FormikHelpers, FormikProps, Form, Field } from 'formik'
import { TextFieldCustom } from '../../components/Home/TextFieldCustom'
import * as yup from 'yup'
import { styles } from './styles'

interface FormValues {
  name: string
  description: string
  telephone: string
}

// the Formik component supports yup validation out-of-the-box via the `validationSchema` prop
const validationSchema = yup.object().shape({
  name: yup.string().required('Required'),
  description: yup.string().required('Required'),
  telephone: yup
    .number()
    .required('Required')
    .typeError('Campo deve ser número')
    .test(
      'len',
      'Max 6 numbers',
      (telephone) => telephone.toString().length <= 6
    )
})

export default function App() {
  return (
    <Container maxWidth="md">
      <Stack
        maxWidth={'xs'}
        sx={{ border: 1 }}
        display="flex"
        flexDirection={'row'}
      >
        <Stack sx={{ border: 1, borderColor: 'red', width: '50%' }}>
          <Typography sx={styles.mainTitle}>Fale conosco</Typography>
          <Typography sx={styles.mainSubtitle}>
            Gostaria de falar conosco sobre algum assunto que não encontrou por
            aqui? Sinta-se a vontade, responderemos rapidinho.
          </Typography>
        </Stack>
        <Stack sx={{ border: 1, borderColor: 'blue', width: '50%' }}>
          <Formik
            initialValues={{
              name: '',
              description: '',
              telephone: ''
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
                    label="Name"
                    size="small"
                    component={TextFieldCustom}
                  />
                </Stack>
                <Stack>
                  <Field
                    name="description"
                    label="Description"
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
                  <TextareaAutosize
                    aria-label="minimum height"
                    placeholder="Minimum 3 rows"
                    style={{ width: 'auto' }}
                  />
                </Stack>
                <Stack maxWidth={'33.3%'}>
                  <Button
                    type="submit"
                    variant="outlined"
                    size="large"
                    color="primary"
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
  )
}
