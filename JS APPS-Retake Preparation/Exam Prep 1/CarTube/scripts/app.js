const handlers = {};

$(() => {
    // Define routes here using Sammy.js
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', handlers.getWelcomePage);
        this.get('#/home', handlers.getWelcomePage);
        this.get('#/login', handlers.getLoginPage);
        this.get('#/register', handlers.getRegisterPage);
        this.get('#/logout', handlers.logout);
        this.get('#/carListings', handlers.getAllCarListings);
        this.get('#/carListingCreate', handlers.getCarListingCreate);
        this.get('#/myCarListings', handlers.getMyCarListings);
        this.get('#/carListingEdit/:carId', handlers.getCarListingEdit);
        this.get('#/carListingDelete/:carId', handlers.carListingDelete);
        this.get('#/carListingDetails/:carId', handlers.getCarListingDetails);

        this.post('#/login', handlers.loginUser);
        this.post('#/register', handlers.registerUser);
        this.post('#/carListingCreate', handlers.postCarListingCreate);
        this.post('#/carListingEdit/:carId', handlers.postCarListingEdit);

    });

    app.run();
});