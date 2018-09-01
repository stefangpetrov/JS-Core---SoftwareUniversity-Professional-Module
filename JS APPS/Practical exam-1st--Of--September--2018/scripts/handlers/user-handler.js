handlers.getUserProfilePage = function (ctx) {
    ctx.isAuth = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.userId = sessionStorage.getItem('userId');
    console.log('vlqzoh')
    let userId = ctx.params.id;
    userService.getUserById(userId)
        .then(user => {
           ctx.user = user;
            ctx.isCurrentUser = sessionStorage.getItem('userId') === user._id;
            memeService.getMyMemes(user.username)
                .then(userMemes => {
                    userMemes.forEach(meme => {
                        meme.isCreator = meme.creator === sessionStorage.getItem('username');
                    });
                  ctx.userMemes = userMemes;
                    ctx.loadPartials({
                        navigation: './templates/common/navigation.hbs',
                        footer: './templates/common/footer.hbs',
                        userMeme: './templates/users/userMeme.hbs'
                    }).then(function () {
                        this.partial('./templates/users/userProfile.hbs');
                    })
                })
                .catch(notify.handleError);

        })
        .catch(notify.handleError);

};

handlers.getUserDelete = function (ctx) {
    let userId = ctx.params.id;
    //Сякаш е по - логично да те върне на регистер след като си изтриеш профила затова така го правя.
    userService.deleteUser(userId)
        .then(() => {
            sessionStorage.clear();
            notify.showInfo('Successfully deleted user!');
            ctx.redirect('#/register');
        })
        .catch(notify.handleError);

};