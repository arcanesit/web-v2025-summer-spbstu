import {User} from "./script.js"



document.addEventListener("DOMContentLoaded", () =>
{
    let users = [];
    let addUserBtn = document.querySelector("#add-user-btn");
    addUserBtn.addEventListener("click", async () => {
        const id = +document.getElementById("ID").value;
        const name = document.getElementById("Name").value;
        await addUser(id, name);
        document.getElementById("ID").value = "";
        document.getElementById("Name").value = "";
    })

    async function addUser(id, name)
    {
        return new Promise(() => {
            setTimeout(() => {
                const newUser = new User(id, name);
                users.push(newUser);
                saveUserToLocalStorage();
                alert("User added successfully");
            }, 1000)
        })
    }

    function saveUserToLocalStorage()
    {
        localStorage.setItem("user", JSON.stringify(users));
    }
});

let local = localStorage.getItem("user");
console.log(local);

