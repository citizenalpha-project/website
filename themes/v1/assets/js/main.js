const rootElement = document.documentElement
const scrollTopBtn = document.getElementById("scrollTopBtn")

function handleScroll() {
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight

  if ((rootElement.scrollTop / scrollTotal) > 0.30) {
    scrollTopBtn.classList.add("showBtn")
  } else {
    scrollTopBtn.classList.remove("showBtn")
  }
}

function scrollTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

document.addEventListener("scroll", handleScroll)
scrollTopBtn.addEventListener("click", scrollTop)
