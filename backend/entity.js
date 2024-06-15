let users = [];
const addUsers = ({id,name,room})=>{
    console.log(id,name,room);
    if(!name || !room) {
        return {error : "Name and room is required!"}
    }
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
    
    if(users.length){
        const existingUser = users.find(each => each.name === name && each.room === room);

        if(existingUser){
            return {error : "User already exist."}
        }
    }
    const user = {id, name, room}

    users.push(user)

    return {user}
}

const removeUser = (id) =>{
    const findIdx= users.findIndex(each=>each.id == id);
    if(findIdx >= 0){
        return users.splice(findIdx,1)[0]
    }
}

const getUser = (id) =>{
    return users.find(each=>each.id == id);
}

module.exports = {
    addUsers,
    getUser,
    removeUser
}