handlers.getHomePage = function (ctx) {
    ctx.isAuth = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.loadPartials({
        navigation: './templates/common/navigation.hbs',
        footer: './templates/common/footer.hbs',
    }).then(function () {
        this.partial('./templates/home.hbs');
    })
};

handlers.getLoginPage = function (ctx) {
    ctx.isAuth = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.loadPartials({
        navigation: './templates/common/navigation.hbs',
        footer: './templates/common/footer.hbs',
    }).then(function () {
        this.partial('./templates/forms/loginForm.hbs');
    })
};
handlers.getRegisterPage = function (ctx) {
    ctx.isAuth = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.loadPartials({
        navigation: './templates/common/navigation.hbs',
        footer: './templates/common/footer.hbs',
    }).then(function () {
        this.partial('./templates/forms/registerForm.hbs');
    })
};
handlers.registerUser = function (ctx) {
    const username = ctx.params.username;
    const password = ctx.params.password;
    const repeatPass = ctx.params.repeatPass;
    const email = ctx.params.email;
    const avatarUrl = ctx.params.avatarUrl;
    console.log(email);
    console.log(avatarUrl)
    if(username.length < 3){
        notify.showError('Username must be at least 3 symbols long!');
    }else if(!/^[a-zA-Z]+$/.test(username)) {
        notify.showError('Username must contain only english letters!');
    } else if(password.length < 6){
        notify.showError('Password must be at least 6 symbols long!');
    } else if(!/^[a-zA-Z0-9]+$/.test(password)) {
        notify.showError('Password must contain only english letters and digits!');
    }  else if (password === '' || repeatPass === '') {
        notify.showError('Password and Repeat Password must non-empty!');
    } else if (password !== repeatPass) {
        notify.showError('Both passwords must match!');
    } else {

        auth.register(username, password, email, avatarUrl)
            .then((userData) => {
                auth.saveSession(userData);
                notify.showInfo('User registration successful.');
                ctx.redirect('#/meme/feed');
            })
            .catch(notify.handleError)
    }
};
handlers.loginUser = function (ctx) {
    const username = ctx.params.username;
    const password = ctx.params.password;

    if(username.length < 3){
        notify.showError('Username must be at least 3 symbols long!');
    }else if(!/^[a-zA-Z]+$/.test(username)) {
        notify.showError('Username must contain only english letters!');
    } else if(password.length < 6){
        notify.showError('Password must be at least 6 symbols long!');
    } else if(!/^[a-zA-Z0-9]+$/.test(password)) {
        notify.showError('Password must contain only english letters and digits!');
    } else {
        auth.login(username, password)
            .then((userData) => {
                auth.saveSession(userData);
                notify.showInfo('Login successful.');
                ctx.redirect('#/meme/feed');
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