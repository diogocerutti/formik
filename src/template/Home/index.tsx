import { useState } from 'react'
import { Stack, TextField } from '@mui/material'
import { FormikHelpers, useFormik } from 'formik'
import { validation } from '../../validations/Home'
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

  const handleSubmit = () => {
    setOpen('flex')
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      telephone: '',
      message: ''
    },
    validationSchema: validation,
    onSubmit: (
      values: FormValues,
      formikHelpers: FormikHelpers<FormValues>
    ) => {
      alert(JSON.stringify(values, null, 2))
      formikHelpers.setSubmitting(false)
      formikHelpers.resetForm()
      handleSubmit()
    }
  })

  return (
    <DefaultContainer>
      <MainTitle
        open={open}
        name={formik.values.name}
        email={formik.values.email}
        telephone={formik.values.telephone}
        message={formik.values.message}
      />
      <Stack
        autoComplete="false"
        width="100%"
        component="form"
        spacing={3}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          id="name"
          name="name"
          variant="outlined"
          value={formik.values.name}
          onChange={formik.handleChange}
          label="Nome"
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          size="small"
          FormHelperTextProps={{
            sx: { margin: 0, padding: 0, height: 0 }
          }}
        />

        <TextField
          id="email"
          name="email"
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          label="E-mail"
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          size="small"
        />

        <TextField
          id="telephone"
          name="telephone"
          variant="outlined"
          value={formik.values.telephone}
          onChange={formik.handleChange}
          label="Telefone"
          error={formik.touched.telephone && Boolean(formik.errors.telephone)}
          helperText={formik.touched.telephone && formik.errors.telephone}
          size="small"
        />

        <TextField
          id="message"
          name="message"
          multiline
          rows={3}
          variant="outlined"
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
          label="Mensagem"
        />
        <SubmitButton />
      </Stack>
    </DefaultContainer>
  )
}
