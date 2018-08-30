handlers.getLoginPage = function (ctx) {
    ctx.loadPartials({
        navigation: './templates/common/navigation.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function () {
        this.partial('./templates/forms/loginForm.hbs');
    })
};
handlers.getRegisterPage = function (ctx) {
    ctx.loadPartials({
    }).then(function () {
        this.partial('./templates/forms/registerForm.hbs');
    })
};
handlers.registerUser = function (ctx) {
    const username = ctx.params.username;
    const password = ctx.params.password;
    const repeatPass = ctx.params.repeatPass;

    if(username.length < 5){
        notify.showError('Username must be at least 5 symbols long!');
    } else if (password === '' || repeatPass === '') {
        notify.showError('Password and Repeat Password must non-empty!');
    } else if (password !== repeatPass) {
        notify.showError('Both passwords must match!');
    } else {
        auth.register(username, password)
            .then((userData) => {
                auth.saveSession(userData);
                notify.showInfo('User registration successful.');
                ctx.redirect('#/home');
            })
            .catch(notify.handleError)
    }
};
handlers.loginUser = function (ctx) {
    const username = ctx.params.username;
    const password = ctx.params.password;

    if(username.length < 5){
        notify.showError('Username must be at least 5 symbols long!');
    } else if (password === '') {
        notify.showError('Password must non-empty!');
    } else {
        auth.login(username, password)
            .then((userData) => {
                auth.saveSession(userData);
                notify.showInfo('Login successful.');
                ctx.redirect('#/home');
            })
            .catch(notify.handleError);
    }
};
handlers.logout = function (ctx) {
    auth.logout()
        .then(() => {
            sessionStorage.clear();
            notify.showInfo('Logout successful.');
            ctx.redirect('#/login');
        })
};