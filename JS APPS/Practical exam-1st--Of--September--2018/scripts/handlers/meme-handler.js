
handlers.getMemeFeed = function (ctx) {
    ctx.isAuth = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.userId = sessionStorage.getItem('userId');

    memeService.getAllMemes()
        .then(memes => {
            memes.forEach(meme => {
                meme.isCreator = meme.creator === sessionStorage.getItem('username');
            });
            ctx.memes = memes;
            ctx.loadPartials({
                navigation: './templates/common/navigation.hbs',
                footer: './templates/common/footer.hbs',
                meme: './templates/memes/meme.hbs',
            }).then(function () {
                this.partial('./templates/memes/memeFeed.hbs');
            })
        })
};


handlers.getCreatePage = function (ctx) {
    ctx.isAuth = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.userId = sessionStorage.getItem('userId');

    ctx.loadPartials({
        navigation: './templates/common/navigation.hbs',
        footer: './templates/common/footer.hbs',
    }).then(function () {
        this.partial('./templates/forms/memeCreateForm.hbs');
    })
};

handlers.postCreatePage = function (ctx) {
    ctx.isAuth = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.userId = sessionStorage.getItem('userId');

    let title = ctx.params.title;
    let description = ctx.params.description;
    let imageUrl = ctx.params.imageUrl;


    if(title.length > 33) {
        notify.showError('title must not exceed 33 characters!');
    } else if(title === undefined) {
        notify.showError('title must be non-empty!');
    } else if(description === undefined) {
        notify.showError('description must be non-empty!');
    } else if(description.length > 450 || description.length < 30) {
        notify.showError('The description should be between 30 and 450 characters!');
    } else if(imageUrl === undefined) {
        notify.showError('ImageUrl must be non-empty!');
    } else if(!imageUrl.startsWith('http')) {
        notify.showError('ImageUrl should start with http');
    } else {
        let body = {
            title:title,
            description:description,
            imageUrl: imageUrl,
            creator: sessionStorage.getItem('username')
        };
        memeService.createMeme(body)
            .then(() => {
                notify.showInfo('meme created.');
                ctx.redirect('#/meme/feed');
            })
            .catch(notify.handleError);

    }
};



handlers.getEditPage = function (ctx) {
    ctx.isAuth = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.userId = sessionStorage.getItem('userId');
    let memeId = ctx.params.id;

    memeService.getMemeDetails(memeId)
        .then(flight => {
            ctx.meme = flight;
            ctx.loadPartials({
                navigation: './templates/common/navigation.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/forms/memeEditForm.hbs');
            })
        })
        .catch(notify.handleError);

};

handlers.postEditPage = function (ctx) {
    ctx.isAuth = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.userId = sessionStorage.getItem('userId');


    let title = ctx.params.title;
    let description = ctx.params.description;
    let imageUrl = ctx.params.imageUrl;
    let memeId = ctx.params.id;

    if(title.length > 33) {
        notify.showError('title must not exceed 33 characters!');
    } else if(title === undefined) {
        notify.showError('title must be non-empty!');
    } else if(description === undefined) {
        notify.showError('description must be non-empty!');
    } else if(description.length > 450 || description.length < 30) {
        notify.showError('The description should be between 30 and 450 characters!');
    } else if(imageUrl === undefined) {
        notify.showError('ImageUrl must be non-empty!');
    } else if(!imageUrl.startsWith('http')) {
        notify.showError('ImageUrl should start with http');
    } else {
        let body = {
            title:title,
            description:description,
            imageUrl: imageUrl,
            creator: sessionStorage.getItem('username')
        };
        memeService.editMeme(body, memeId)
            .then(() => {
                notify.showInfo('Edited meme.');
                ctx.redirect(`#/meme/feed`);
            })
            .catch(notify.handleError);

    }
};

handlers.getMemeDetailsPage = function (ctx) {
    ctx.isAuth = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.userId = sessionStorage.getItem('userId');
    let memeId = ctx.params.id;

    memeService.getMemeDetails(memeId)
        .then(meme => {
            ctx.meme = meme;
            ctx.isCreator = meme._acl.creator === sessionStorage.getItem('userId');
            ctx.loadPartials({
                navigation: './templates/common/navigation.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/memes/memeDetails.hbs');
            })
        })
        .catch(notify.handleError);

};


handlers.deleteMeme = function (ctx) {
    ctx.isAuth = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let memeId = ctx.params.id;

    memeService.deleteMeme(memeId)
        .then(() => {
            notify.showInfo('Successfully deleted meme!');
            ctx.redirect('#/meme/feed');
        })
        .catch(notify.handleError);

};
