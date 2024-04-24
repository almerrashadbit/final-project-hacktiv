const config = {
  input: [
    {
      id: 'usernameInput',
      placeholder: 'Username',
      value: '',
      label: 'Username',
      type: 'text',
      inputClass: 'form-control',
      inputTypeClass: 'form-floating'
    },
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
      id: 'addressInput',
      placeholder: 'Address',
      value: '',
      label: 'Address',
      type: 'text',
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
      id: 'repeatPasswordlInput',
      placeholder: 'Repeat password',
      value: '',
      label: 'Repeat password',
      type: 'password',
      inputClass: 'form-control',
      inputTypeClass: 'form-floating'
    }
  ],
  button: {
    text: 'Register',
    classButton: 'btn btn-success btn-block btn-lg'
  },
  link: [
    { href: '/', formLinkClass: 'btn btn-success', formLinkText: 'Back to login', role: 'button' }
  ]
}

export default config
