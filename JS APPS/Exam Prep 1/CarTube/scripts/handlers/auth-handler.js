handlers.getWelcomePage = function (ctx) {
    console.log(auth);
    ctx.isLogged = sessionStorage.getItem('authtoken') !== null;
    ctx.username = sessionStorage.getItem('username');
    console.log(sessionStorage.getItem('username'));
    ctx.loadPartials({
        navigation: './templates/common/navigation.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function () {
        this.partial('./templates/welcome.hbs');
    })
};

handlers.getLoginPage = function (ctx) {
    ctx.isLogged = sessionStorage.getItem('authtoken') !== null;
    ctx.loadPartials({
        navigation: './templates/common/navigation.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function () {
        this.partial('./templates/forms/loginForm.hbs');
    })
};
handlers.getRegisterPage = function (ctx) {
    ctx.isLogged = sessionStorage.getItem('authtoken') !== null;
    ctx.loadPartials({
        navigation: './templates/common/navigation.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function () {
        this.partial('./templates/forms/registerForm.hbs');
    })
};
handlers.registerUser = function (ctx) {
    ctx.isLogged = sessionStorage.getItem('authtoken') !== null;
    const username = ctx.params.username;
    const password = ctx.params.password;
    const repeatPass = ctx.params.repeatPass;

    if(username.length < 3){
        notify.showError('Username must be at least 3 symbols long!');
    } else if(!/^[a-zA-Z]+$/.test(username)) {
        notify.showError('Username must contain only english letters!');
    } else if (password.length < 6) {
        notify.showError('Password must be at least 6 symbols long!');
    } else if (!/[A-Za-z0-9]+$/.test(password)) {
        notify.showError('Password must contain only english letters and digits');
    } else if (password !== repeatPass) {
        notify.showError('Both passwords must match!');
    } else {
        auth.register(username, password)
            .then((userData) => {
                auth.saveSession(userData);
                notify.showInfo('User registration successful.');
                ctx.redirect('#/carListings');
            })
            .catch(notify.handleError)
    }
};
handlers.loginUser = function (ctx) {
    ctx.isLogged = sessionStorage.getItem('authtoken') !== null;
    const username = ctx.params.username;
    const password = ctx.params.password;

    if(username.length < 3){
        notify.showError('Username must be at least 3 symbols long!');
    } else if(!/^[a-zA-Z]+$/.test(username)) {
        notify.showError('Username must contain only english letters!');
    } else if (password.length < 6) {
        notify.showError('Password must be at least 6 symbols long!');
    } else if (!/[A-Za-z0-9]+$/.test(password)) {
        notify.showError('Password must contain only english letters and digits');
    } else {
        auth.login(username, password)
            .then((userData) => {
                auth.saveSession(userData);
                notify.showInfo('Login successful.');
                ctx.redirect('#/carListings');
            })
            .catch(notify.handleError);
    }
};
handlers.logout = function (ctx) {
    auth.logout()
        .then(() => {
            sessionStorage.clear();
            notify.showInfo('Logout successful.');
            ctx.redirect('#/home');
        })
};