const config = {
  link: {
    href: '#',
    linkClass: 'navbar-brand',
    formLinkText: 'Patient Care'
  },
  unordered: {
    unorderedClass: 'navbar-nav me-auto mb-2 mb-lg-0',
    linkForm: [
      {
        href: '/',
        formLinkClass: 'nav-link active',
        linkText: 'Home',
        listClass: 'nav-item'
      },
      {
        href: '#',
        formLinkClass: 'nav-link',
        linkText: 'Profile',
        listClass: 'nav-item'
      }
    ],
    unorderedDropdownClass: 'dropdown-menu',
    dropdownLinkForm: [
      {
        href: '/',
        formLinkClass: 'dropdown-item',
        linkText: 'Profile'
      }
    ]
  },
  searchBar: true
}

export default config
