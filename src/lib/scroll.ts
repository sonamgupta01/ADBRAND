// Smooth scrolling utility
export const smoothScrollTo = (target: string, offset = 0) => {
  const element = document.querySelector(target);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Scroll to top function
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Scroll to section with navbar offset
export const scrollToSection = (sectionId: string) => {
  const navbarHeight = 64; // Adjust this value based on your navbar height
  smoothScrollTo(sectionId, navbarHeight);
};