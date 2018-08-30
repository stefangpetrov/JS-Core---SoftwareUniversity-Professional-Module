let flightService = (() => {
    function getPublishedFlights() {
        const endpoint = `flights?query={"isPublic":"true"}`;
        return remote.get('appdata', endpoint, 'kinvey');
    }

    function createFlight(body) {
        const endpoint = `flights`;
        return remote.post('appdata', endpoint, 'kinvey', body);
    }

    function editFlight(body, id) {
        const endpoint = `flights/${id}`;
        return remote.update('appdata', endpoint, 'kinvey', body);
    }

    function deleteFlight(id) {
        const endpoint = `flights/${id}`;
        return remote.remove('appdata', endpoint, 'kinvey');
    }
    
    function getFlightDetails(id) {
        const endpoint = `flights/${id}`;
        return remote.get('appdata', endpoint, 'kinvey');
    }

    function getMyFlights(userId) {
        const endpoint = `flights?query={"_acl.creator":"${userId}"}`;
        return remote.get('appdata', endpoint, 'kinvey');
    }
    return {
        getFlightDetails,
        getMyFlights,
        getPublishedFlights,
        editFlight,
        deleteFlight,
        createFlight
    }
})();