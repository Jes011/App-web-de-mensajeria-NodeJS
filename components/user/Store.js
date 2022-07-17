const Model = require('./Model');

function addUser(name) {
    const user = new Model(name);
    return user.save();
}

function getUserList(id) {
    let query = {};

    if (id) {
        query = { _id: id }
    }

    return Model.find(query);
}

async function updateUser(id, name) {

    let user = await Model.findOne({ _id: id });

    if (user) {
        user.name = name;

        user = await user.save();
    }

    return user;

}

function deleteUser(id) {
    return Model.deleteOne({_id:id});
}

module.exports = {
    addUser,
    getUserList,
    deleteUser,
    updateUser
}