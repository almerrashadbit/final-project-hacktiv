const config = {
  imageObject: {
    imgSrc: 'https://picsum.photos/200',
    imgAlt: 'Testing',
    imgClass: 'img-thumbnail mb-4'
  },
  linkList: [
    {
      href: '#',
      class: 'btn btn-success',
      linkText: 'Edit',
      role: 'button'
    }
  ],
  linkForm: ['Testing', 'Testing', 'Testing', 'Testing'],
  link: {
    href: '#',
    linkClass: 'navbar-brand',
    formLinkText: 'Patient Care'
  },
  headerUnordered: {
    linkForm: [
      {
        linkHref: '#',
        linkClass: 'nav-link active',
        linkText: 'Home',
        listClass: 'nav-item',
        linkAriaCurrent: 'page'
      },
      {
        linkHref: '#',
        linkClass: 'nav-link',
        linkText: 'Profile',
        listClass: 'nav-item'
      }
    ],
    unorderedDropdownClass: 'dropdown-menu',
    dropdownLinkForm: [
      {
        linkHref: '/',
        linkClass: 'dropdown-item',
        linkText: 'Profile'
      }
    ]
  },
  isSearchBar: true
}

export default config
