const config = {
  input: [
    {
      id: 'emailInput',
      placeholder: 'example@gmail.com',
      value: '',
      label: 'Email',
      type: 'email',
      inputClass: 'form-control',
      inputTypeClass: 'form-floating'
    },
    {
      id: 'passwordlInput',
      placeholder: 'Password',
      value: '',
      label: 'Password',
      type: 'password',
      inputClass: 'form-control',
      inputTypeClass: 'form-floating'
    },
    {
      id: 'rememberMeCheck',
      placeholder: '',
      value: '',
      label: 'Remember me',
      type: 'checkbox',
      inputClass: 'form-check-input',
      inputTypeClass: 'form-check'
    }
  ],
  button: {
    text: 'Login',
    classButton: 'btn btn-success btn-block btn-lg'
  },
  link: [
    {
      href: '/register',
      formLinkClass: 'btn btn-success',
      formLinkText: 'Register',
      role: 'button'
    },
    {
      href: '#',
      formLinkClass: 'btn btn-danger',
      formLinkText: 'Sign Up with Google',
      role: 'button'
    }
  ]
}

export default config
