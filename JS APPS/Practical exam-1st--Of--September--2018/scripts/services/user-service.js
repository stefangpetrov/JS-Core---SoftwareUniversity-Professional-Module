let userService = (() => {

    function deleteUser(id) {
        const endpoint = `${id}`;
        return remote.remove('user', endpoint, 'kinvey');
    }

    function getUserById(id) {
        const endpoint = `${id}`;
        return remote.get('user', endpoint, 'kinvey');
    }

    return {
        deleteUser,
        getUserById
    }
})();