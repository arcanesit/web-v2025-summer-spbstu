import {User} from "./script.js"



document.addEventListener("DOMContentLoaded", () =>
{
    let users = [];
    addUserBtn = document.querySelector("#add-user-btn");
    addUserBtn.addEventListener("click", async () => {
        id = +document.getElementById("ID").value;
        Name = document.getElementById("Name").value;
        await addUser(id, Name);
        document.getElementById("ID").value = "";
        document.getElementById("Name").value = "";
    })

    async function addUser(id, name)
    {
        return new Promise(() => {
            setTimeout(() => {
                newUser = new User(id, name);
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

