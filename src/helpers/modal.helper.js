export function modalSuccess(text, href) {
  return {
    text: text,
    modalHeaderText: 'Success',
    modalLink: [
      {
        href: href,
        class: 'btn btn-success',
        text: 'Continue',
        id: 'successButton'
      }
    ]
  }
}

export function modalNotSuccess(text) {
  return {
    text: text,
    modalHeaderText: 'Failed',
    modalLink: [
      {
        href: '#',
        class: 'btn btn-danger',
        text: 'Back',
        dataBsDismiss: 'modal',
        id: 'successButton'
      }
    ]
  }
}

export function modalValidation(text) {
  return {
    text: text,
    modalHeaderText: 'Warning',
    modalLink: [
      {
        href: '#',
        class: 'btn btn-danger',
        text: 'Back',
        dataBsDismiss: 'modal',
        id: 'successButton'
      },
      {
        href: '#',
        class: 'btn btn-warning',
        text: 'Continue',
        dataBsDismiss: 'modal',
        id: 'validationButton'
      }
    ]
  }
}
