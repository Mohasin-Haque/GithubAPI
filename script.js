const inputText = document.querySelector("#input-txt")
const btn = document.querySelector("#btn")
const outputDiv = document.querySelector("#output")

btn.addEventListener("click", () => {
fetch("https://api.github.com/users/" + inputText.value)
.then(res => res.json())
.then(json => outputDiv.innerText = json.bio)
})
