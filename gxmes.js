const elemsrendered = () => {
  document.querySelectorAll("h2").forEach(el => el.addEventListener("click",function() {
    alert("e")
  location.href = "../play/?" + this.textContent
}))

}
