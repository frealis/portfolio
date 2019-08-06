// Assign event handlers to links
export function addLinkHrefs() {
  const link_contact_nodelist = document.querySelectorAll('.link-contact')
  link_contact_nodelist.forEach((link_contact) => {
    link_contact.addEventListener('click', () => {
      window.location.href = '#anchor-contact'
    })
  })
  const link_projects_nodelist = document.querySelectorAll('.link-projects')
  link_projects_nodelist.forEach((link_projects) => {
    link_projects.addEventListener('click', () => {
      window.location.href = '#anchor-projects'
    })
  })
}

export function test() {
  alert('test');
}