const handlers = {};

$(() => {
    // Define routes here using Sammy.js
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', handlers.getHomePage);
        this.get('#/home', handlers.getHomePage);
        this.get('#/login', handlers.getLoginPage);
        this.get('#/register', handlers.getRegisterPage);
        this.get('#/logout', handlers.logout);
        this.get('#/meme/feed', handlers.getMemeFeed);
        this.get('#/meme/create', handlers.getCreatePage);
        this.get('#/meme/edit/:id', handlers.getEditPage);
        this.get('#/meme/details/:id', handlers.getMemeDetailsPage);
        this.get('#/meme/delete/:id', handlers.deleteMeme);
        this.get('#/user/profile/:id', handlers.getUserProfilePage);
        this.get('#/user/delete/:id', handlers.getUserDelete);

        this.post('#/login', handlers.loginUser);
        this.post('#/register', handlers.registerUser);
        this.post('#/meme/create', handlers.postCreatePage);
        this.post('#/meme/edit/:id', handlers.postEditPage);


    });

    app.run();
});