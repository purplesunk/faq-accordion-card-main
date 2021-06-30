const accordionButtons = document.querySelectorAll(".accordion--question")

accordionButtons.forEach(button => button.addEventListener('click', event => {
  const button = event.currentTarget
  const accBody = button.nextElementSibling
  const accContent = accBody.firstElementChild

  button.classList.toggle("show")


  if (!accBody.classList.contains("show")) {
    accBody.classList = "accordion--body collapsing"
    const height = accContent.clientHeight
    setTimeout(_ => {
      accBody.style.height = height + "px"
      accBody.addEventListener('transitionend', _ => { 
        accBody.classList = "accordion--body collapse show" 
        accBody.removeAttribute("style")
      }, { once: true })
    }, 1)
  }

  if (accBody.classList.contains("show")) {
    const height = accContent.clientHeight
    accBody.style.height = height + "px"
    accBody.addEventListener('transitionend', _ => { 
      accBody.classList = "accordion--body collapse" 
    }, { once: true })

    setTimeout(_ => {
      accBody.classList = "accordion--body collapsing"
      accBody.removeAttribute("style")
    }, 1)
  }

}))
