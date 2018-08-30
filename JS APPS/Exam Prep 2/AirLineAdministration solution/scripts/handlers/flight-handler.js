handlers.getHomePage = function (ctx) {
    ctx.isAuth = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');

    flightService.getPublishedFlights()
        .then(flights => {
           ctx.flights = flights;
            ctx.loadPartials({
                navigation: './templates/common/navigation.hbs',
                footer: './templates/common/footer.hbs',
                flight: './templates/flights/flight.hbs'
            }).then(function () {
                this.partial('./templates/home.hbs');
            })
        })
        .catch(notify.handleError);

};

handlers.getCreatePage = function (ctx) {
    ctx.isAuth = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({
        navigation: './templates/common/navigation.hbs',
        footer: './templates/common/footer.hbs',
    }).then(function () {
        this.partial('./templates/forms/flightCreateForm.hbs');
    })
};

handlers.postCreatePage = function (ctx) {
    ctx.isAuth = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let destination = ctx.params.destination;
    let origin = ctx.params.origin;
    let departureDate = ctx.params.departureDate;
    let seats = ctx.params.seats;
    let cost = ctx.params.cost;
    let image = ctx.params.img;
    let isPublic = ctx.params.public;

    if(typeof destination !== "string" || typeof origin !== "string" || destination === '' || origin === '') {
        notify.showError('destination and origin should be non-empty strings');
    } else if(isNaN(seats) || isNaN(cost) || seats < 1 || cost < 1) {
        notify.showError('Both the seats and cost per seat should be valid positive numbers numbers');
    } else if(!image.startsWith('http')) {
        notify.showError('ImageUrl should start with http');
    } else {
        let body = {
            destination: destination,
            origin: origin,
            departure: departureDate,
            image: image,
            cost: cost,
            seats: seats,
            isPublic: isPublic === 'on'
        };
        flightService.createFlight(body)
            .then(() => {
                notify.showInfo('Created flight.');
                ctx.redirect('#/home');
            })
            .catch(notify.handleError);

    }
};

handlers.getDetailsPage = function (ctx) {
    ctx.isAuth = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let flightId = ctx.params.id;

    flightService.getFlightDetails(flightId)
        .then(flight => {
            ctx.flight = flight;
            ctx.isCreator = flight._acl.creator === sessionStorage.getItem('userId');
            ctx.loadPartials({
                navigation: './templates/common/navigation.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/flights/flightDetails.hbs');
            })
        })
        .catch(notify.handleError);

};

handlers.getEditPage = function (ctx) {
    ctx.isAuth = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let flightId = ctx.params.id;

    flightService.getFlightDetails(flightId)
        .then(flight => {
            ctx.flight = flight;
            ctx.loadPartials({
                navigation: './templates/common/navigation.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/forms/flightEditForm.hbs');
            })
        })
        .catch(notify.handleError);

};

handlers.postEditPage = function (ctx) {
    ctx.isAuth = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let flightId = ctx.params.id;


    let destination = ctx.params.destination;
    let origin = ctx.params.origin;
    let departureDate = ctx.params.departureDate;
    let seats = ctx.params.seats;
    let cost = ctx.params.cost;
    let image = ctx.params.img;
    let isPublic = ctx.params.public;

    if(typeof destination !== "string" || typeof origin !== "string" || destination === '' || origin === '') {
        notify.showError('destination and origin should be non-empty strings');
    } else if(isNaN(seats) || isNaN(cost) || seats < 1 || cost < 1) {
        notify.showError('Both the seats and cost per seat should be valid positive numbers numbers');
    } else if(!image.startsWith('http')) {
        notify.showError('ImageUrl should start with http');
    } else {
        let body = {
            destination: destination,
            origin: origin,
            departure: departureDate,
            image: image,
            cost: cost,
            seats: seats,
            isPublic: isPublic === 'on'
        };
        flightService.editFlight(body, flightId)
            .then(() => {
                notify.showInfo('Edited flight.');
                ctx.redirect(`#/flight/details/${flightId}`);
            })
            .catch(notify.handleError);

    }
};

handlers.getMyFlightsPage = function (ctx) {
    ctx.isAuth = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');

    flightService.getMyFlights(sessionStorage.getItem('userId'))
        .then(flights => {
            ctx.flights = flights;
            ctx.loadPartials({
                navigation: './templates/common/navigation.hbs',
                footer: './templates/common/footer.hbs',
                singleMyFlight: './templates/flights/singleMyFlight.hbs'
            }).then(function () {
                this.partial('./templates/flights/myFlights.hbs');
            })
        })
        .catch(notify.handleError);

};

handlers.deleteFlight = function (ctx) {
    ctx.isAuth = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let flightId = ctx.params.id;

    flightService.deleteFlight(flightId)
        .then(() => {
            notify.showInfo('Successfully deleted flight');
            ctx.redirect('#/flights/mine');
        })
        .catch(notify.handleError);

};
