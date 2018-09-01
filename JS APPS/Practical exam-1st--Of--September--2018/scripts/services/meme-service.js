let memeService = (() => {
    function getAllMemes() {
        const endpoint = `memes?query={}&sort={"_kmd.ect": -1}`;
        return remote.get('appdata', endpoint, 'kinvey');
    }

    function createMeme(body) {
        const endpoint = `memes`;
        return remote.post('appdata', endpoint, 'kinvey', body);
    }

    function editMeme(body, id) {
        const endpoint = `memes/${id}`;
        return remote.update('appdata', endpoint, 'kinvey', body);
    }

    function deleteMeme(id) {
        const endpoint = `memes/${id}`;
        return remote.remove('appdata', endpoint, 'kinvey');
    }
    
    function getMemeDetails(id) {
        const endpoint = `memes/${id}`;
        return remote.get('appdata', endpoint, 'kinvey');
    }

    function getMyMemes(username) {
        const endpoint = `memes?query={"creator":"${username}"}&sort={"_kmd.ect": -1}`;
        return remote.get('appdata', endpoint, 'kinvey');
    }
    return {
        getAllMemes,
        createMeme,
        editMeme,
        deleteMeme,
        getMemeDetails,
        getMyMemes
    }
})();