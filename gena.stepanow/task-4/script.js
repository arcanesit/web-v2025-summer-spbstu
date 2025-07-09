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

let usersArray = [new User(1,"Ivan",[0, 2, 3]), new User(2, "John", [0, 1, 3]), new User(3, "Jamie", [0,1,2])];

function groupByFriendCount(usersArray)
{
    let result = [];
    for (object of usersArray)
    {
        let friendCounts = object.friendCount;
        let findGroup = result.find(group => group.count === friendCounts);

        if (findGroup)
        {
            findGroup.users.push(object);
        }
        else
        {
            result.push(
                {
                    count : friendCounts,
                    users : [object]
                }
            );
        }
    }
    return result;
}

function getUniqueFriendList(usersArray)
{
    let setUsers = new Set();
    for (object of usersArray)
    {
        for (element of object.friends)
        {
            setUsers.add(element);
        }

    }

    return Array.from(setUsers);

}

function listMutualFriends(id, usersArray)
{
    result = [];
    for (object of usersArray)
    {
        if (object.friends.includes(id))
        {
            result.push(object);
        }
    }
    return result;
}

function getUsersFriendsMore(count, usersArray)
{
    result = [];
    for (object of usersArray)
    {
        if (object.friendCount > count)
        {
            result.push(object);
        }
    }

    return result;
}

function getListUsersWithoutFriends(usersArray)
{
    result = [];
    for (object of usersArray)
    {
        if (object.friendCount == 0)
        {
            result.push(object);
        }
    }
    return result;
}

let person = new User(0, "username", [1,2,3,4,5]);
console.log(person.addFriend(6));
console.log(person.friends);
console.log(person.removeFriend(6));
console.log(person.friends);
console.log(person.friendCount);
console.log(groupByFriendCount(usersArray));
console.log(getUsersFriendsMore(1, usersArray));