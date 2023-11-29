function changeTab(selected) {
  let content = document.getElementsByClassName("tabContent")
  
  let current = document.getElementsByClassName(selected)[0]
  for(let tab of content) {
    tab.classList.add("hidden")
  }
  current.classList.remove("hidden")
}

function openModal(imgs) {
  document.getElementById("modalbackground").classList.remove("hidden")
  let modal = document.getElementById("modal")
  modal.classList.remove("hidden")
  document.getElementById("modalImage").src = imgs.src
}

function closeModal() {
  document.getElementById("modalbackground").classList.add("hidden")
  document.getElementById("modal").classList.add("hidden")
}

setTimeout(() => {
  document.querySelector("body > a").remove()
}, 100)
