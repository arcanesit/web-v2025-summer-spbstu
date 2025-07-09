class User{
    constructor(id, name, friends)
    {   
        this.id = id;
        this.name = name;
        this.friends = friends;
    }
    
    addFriend(friendId)
    {
        if (!this.friends.includes(friendId))
        {
            this.friends.push(friendId)
        }
        else
        {
            throw new Error("This ID is in your friends list");
        }
    }
    removeFriend(friendId)
    {
        if(this.friends.includes(friendId))
        {
            this.friends.splice(this.friends.findIndex(index => index == friendId), 1);
        }
        else
        {
            throw new Error("This ID is not in your friends list")
        }
    }
    get friendCount()
    {
        return this.friends.length;
    }
}

let person = new User(0, "username", [1,2,3,4,5]);
console.log(person.addFriend(6));
console.log(person.friends);
console.log(person.removeFriend(6));
console.log(person.friends);
console.log(person.friendCount);