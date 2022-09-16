import { useState } from 'react'
import { Stack } from '@mui/material'
import { Formik, FormikHelpers, FormikProps, Form, Field } from 'formik'
import {
  TextFieldCustom,
  TextFieldMessage
} from '../../components/Home/TextFieldCustom'
import { validationSchema } from '../../validations/Home'
import { DefaultContainer } from '../../components/Home/DefaultContainer'
import { SubmitButton } from '../../components/Home/SubmitButton'
import { MainTitle } from '../../components/Home/MainTitle'
interface FormValues {
  name: string
  email: string
  telephone: string
  message: string
}

export default function Home() {
  const [open, setOpen] = useState('none')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    setOpen('flex')
  }

  return (
    <DefaultContainer>
      <MainTitle
        open={open}
        name={name}
        email={email}
        telephone={telephone}
        message={message}
      />
      <Stack width="100%">
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
            // alert(JSON.stringify(values, null, 2))
            formikHelpers.setSubmitting(false)
            setName(values.name)
            setEmail(values.email)
            setTelephone(values.telephone)
            setMessage(values.message)
            handleSubmit()

            console.log('VALORES:', name, email, telephone, message)
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
              <SubmitButton disabled={formikProps.isSubmitting} />
            </Form>
          )}
        </Formik>
      </Stack>
    </DefaultContainer>
  )
}
