function capitalizename(event){
    event.preventDefault()
  const username = document.getElementById("name").value.trim();
  const newname = username.charAt(0).toLowerCase() === username.charAt(0) ? username.charAt(0).toUpperCase() + username.slice(1) :username;

const result = document.getElementById("blankcontainer").textContent = `your name is =} ${newname}`



}






















