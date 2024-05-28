export function modalSuccess(text, href) {
  return {
    text: text,
    modalHeaderText: 'Success',
    modalLink: [
      {
        href: href,
        class: 'btn btn-success',
        text: 'Continue'
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
        text: 'Back'
      }
    ]
  }
}

export function modalValidation(text, href) {
  return {
    text: text,
    modalHeaderText: 'Warning',
    modalLink: [
      {
        href: href,
        class: 'btn btn-success',
        text: 'Continue'
      },
      {
        href: '#',
        class: 'btn btn-danger',
        text: 'Back'
      }
    ]
  }
}
