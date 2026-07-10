export const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (!section) return

    const navbarOffset = 96
    const top = section.getBoundingClientRect().top + window.scrollY - navbarOffset

    window.scrollTo({ top, behavior: 'smooth' })
}