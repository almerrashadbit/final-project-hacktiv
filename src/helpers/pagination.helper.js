export function createPagination(pagination) {
  let paginationObject = [
    {
      linkId: 'paginationBefore',
      linkHref: { path: '/home', query: { pageId: pagination.currentPage - 1 } },
      linkClass: 'page-link',
      linkText: '<',
      listClass: 'page-item disabled'
    }
  ]

  if (pagination.currentPage !== 1) {
    paginationObject[0].listClass = 'page-item'
  }

  for (let i = 1; i <= pagination.totalPages; i++) {
    paginationObject[i] = {
      linkId: `pagination${i}`,
      linkHref: { path: '/home', query: { pageId: i } },
      linkClass: 'page-link',
      linkText: `${i}`,
      listClass: 'page-item'
    }
    if (i === pagination.currentPage) {
      paginationObject[i].listClass = 'page-item active'
      paginationObject[i].linkAriaCurrent = 'page'
    }
  }

  paginationObject[paginationObject.length] = {
    linkId: 'paginationAfter',
    linkHref: { path: '/home', query: { pageId: pagination.currentPage + 1 } },
    linkClass: 'page-link',
    linkText: '>',
    listClass: 'page-item'
  }

  if (pagination.currentPage === pagination.totalPages) {
    paginationObject[paginationObject.length - 1].listClass = 'page-item disabled'
  }

  return paginationObject
}
