let carService = (() => {
    function getAllCarListings() {
        const endpoint = `cars?query={}&sort={"_kmd.ect": -1}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }
    function getMyCarListings(username) {
        const endpoint = `cars?query={"seller":"${username}"}&sort={"_kmd.ect": -1}`;
        return remote.get('appdata', endpoint, 'kinvey');
    }

    function getCarListingById(id) {
        const endpoint = `cars/${id}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function createCarListing(body) {
        const endpoint = `cars`;
        return remote.post('appdata', endpoint, 'kinvey', body);

    }

    function editCarListing(body, id) {
        const endpoint = `cars/${id}`;
        return remote.update('appdata', endpoint, 'kinvey', body);
    }
    function deleteCarListing(id) {
        const endpoint = `cars/${id}`;
        return remote.remove('appdata', endpoint, 'kinvey');
    }
    return {
        getAllCarListings,
        getMyCarListings,
        createCarListing,
        editCarListing,
        deleteCarListing,
        getCarListingById
    }
})();