const handlers = {};

$(() => {
    // Define routes here using Sammy.js
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', handlers.getRegisterPage);
        this.get('#/home', handlers.getHomePage);
        this.get('#/login', handlers.getLoginPage);
        this.get('#/register', handlers.getRegisterPage);
        this.get('#/logout', handlers.logout);
        this.get('#/flight/create', handlers.getCreatePage);
        this.get('#/flight/details/:id', handlers.getDetailsPage);
        this.get('#/flight/edit/:id', handlers.getEditPage);
        this.get('#/flights/mine', handlers.getMyFlightsPage);
        this.get('#/flight/delete/:id', handlers.deleteFlight);

        this.post('#/login', handlers.loginUser);
        this.post('#/register', handlers.registerUser);
        this.post('#/flight/create', handlers.postCreatePage);
        this.post('#/flight/edit/:id', handlers.postEditPage);

    });

    app.run();
});