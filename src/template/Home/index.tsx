import { useState } from 'react'
import { FormikHelpers, useFormik } from 'formik'
import { validation } from '../../validations/Home'
import { DefaultContainer } from '../../components/Home/DefaultContainer'
import { SubmitButton } from '../../components/Home/SubmitButton'
import { MainTitle } from '../../components/Home/MainTitle'
import { TextFieldCustom } from '../../components/Home/TextFieldCustom'
import { TextAreaCustom } from '../../components/Home/TextAreaCustom'
import { DefaultForm } from '../../components/Home/DefaultForm'
import { handleSubmit } from '../../functions/Home'
interface FormValues {
  name: string
  email: string
  telephone: string
  message: string
}

export default function Home() {
  const [open, setOpen] = useState('none')

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
      handleSubmit(setOpen, 'flex')
      setTimeout(() => {
        formikHelpers.setSubmitting(false)
        formikHelpers.resetForm()
        setOpen('none')
      }, 5000)
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
      <DefaultForm onSubmit={formik.handleSubmit} onBlur={formik.handleBlur}>
        <TextFieldCustom
          name="name"
          label="Nome"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        ></TextFieldCustom>
        <TextFieldCustom
          name="email"
          label="E-mail"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        ></TextFieldCustom>
        <TextFieldCustom
          name="telephone"
          label="Telefone"
          value={formik.values.telephone}
          onChange={formik.handleChange}
          error={formik.touched.telephone && Boolean(formik.errors.telephone)}
          helperText={formik.touched.telephone && formik.errors.telephone}
        ></TextFieldCustom>
        <TextAreaCustom
          name="message"
          label="Mensagem"
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        ></TextAreaCustom>
        <SubmitButton name="submitButton" disabled={formik.isSubmitting} />
      </DefaultForm>
    </DefaultContainer>
  )
}
