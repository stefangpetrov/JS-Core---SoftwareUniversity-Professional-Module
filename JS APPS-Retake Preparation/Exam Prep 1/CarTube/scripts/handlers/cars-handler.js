handlers.getAllCarListings = function (ctx) {
    ctx.isLogged = sessionStorage.getItem('authtoken') !== null;
    ctx.username = sessionStorage.getItem('username');

    carService.getAllCarListings()
        .then(carListings => {
            carListings.forEach(car => {
                car.isCreator = car.seller === sessionStorage.getItem('username');
            });
            ctx.carListings = carListings;

            ctx.loadPartials({
                navigation: './templates/common/navigation.hbs',
                footer: './templates/common/footer.hbs',
                car: './templates/cars/car.hbs'
            }).then(function () {
                this.partial('./templates/cars/carListings.hbs');
            })
        })
};

handlers.getCarListingCreate = function (ctx) {
    ctx.isLogged = sessionStorage.getItem('authtoken') !== null;
    ctx.username = sessionStorage.getItem('username');
    console.log(ctx);
    ctx.loadPartials({
        navigation: './templates/common/navigation.hbs',
        footer: './templates/common/footer.hbs',
    }).then(function () {
        this.partial('./templates/forms/carListingCreateForm.hbs');
    })

};

handlers.postCarListingCreate = function (ctx) {
    console.log('vlqzoh')
    ctx.isLogged = sessionStorage.getItem('authtoken') !== null;
    ctx.username = sessionStorage.getItem('username');
    console.log(ctx.params)
    let title = ctx.params.title;

    let description = ctx.params.description;
    let brand = ctx.params.brand;
    let fuel = ctx.params.fuelType;
    let model = ctx.params.model;
    let year = ctx.params.year;
    let price = ctx.params.price;
    let imageUrl = ctx.params.imageUrl;

    if(title.length > 33 || title === ''){
        notify.showError('title must be less than 33 letters and must be non-empty');
    } else if (description.length > 450 || description.length < 30) {
        notify.showError('description must be between 450 an 33 characters');
    } else if(brand.length > 11 || fuel.length > 11 || model.length > 11 || brand === '' || fuel === '' || model === '') {
        notify.showError('Brand, Fuel and Model should not exceed 11 characters and must be non-empty');
    } else if(year.toString().length > 4 || year === '') {
        notify.showError('Year must contain only 4 numbers and must be non-empty');
    } else if(price > 1000000 || price === '') {
        notify.showError('Price must be less or equal to 1000000$ and must be non-epmty');
    } else if(!imageUrl.startsWith('http') || imageUrl === '') {
        notify.showError('Url must start with http and must be non-empty');
    } else {
        let obj = {
            title:title,
            description:description,
            brand:brand,
            fuel:fuel,
            model:model,
            imageUrl:imageUrl,
            year:year,
            price:price,
            seller: sessionStorage.getItem('username')

        };

        carService.createCarListing(obj)
            .then(car => {
                notify.showInfo('CarListing created!');
                ctx.redirect('#/carListings');
            });
    }

};

handlers.getMyCarListings = function (ctx) {
    ctx.isLogged = sessionStorage.getItem('authtoken') !== null;
    ctx.username = sessionStorage.getItem('username');

    carService.getMyCarListings(sessionStorage.getItem('username'))
        .then(cars => {
            ctx.carListings = cars;
            ctx.loadPartials({
                navigation: './templates/common/navigation.hbs',
                footer: './templates/common/footer.hbs',
                car: './templates/cars/car.hbs'
            }).then(function () {
                this.partial('./templates/cars/myCarListings.hbs');
            })
        })
        .catch(notify.handleError);


};

handlers.getCarListingEdit = function (ctx) {
    ctx.isLogged = sessionStorage.getItem('authtoken') !== null;
    ctx.username = sessionStorage.getItem('username');
    let carId = ctx.params.carId;

    ctx.carId = carId;
    carService.getCarListingById(carId).then(car => {
      ctx.carListing = car;
        ctx.loadPartials({
            navigation: './templates/common/navigation.hbs',
            footer: './templates/common/footer.hbs',
        }).then(function () {
            this.partial('./templates/forms/carListingEditForm.hbs');
        })
    })
        .catch(notify.handleError);
};

handlers.postCarListingEdit = function (ctx) {
    ctx.isLogged = sessionStorage.getItem('authtoken') !== null;
    ctx.username = sessionStorage.getItem('username');
    let carId = ctx.params.carId;

    let title = ctx.params.title;
    let description = ctx.params.description;
    let brand = ctx.params.brand;
    let fuel = ctx.params.fuelType;
    let model = ctx.params.model;
    let year = ctx.params.year;
    let price = ctx.params.price;
    let imageUrl = ctx.params.imageUrl;

    if(title.length > 33 || title === ''){
        notify.showError('title must be less than 33 letters and must be non-empty');
    } else if (description.length > 450 || description.length < 30) {
        notify.showError('description must be between 450 an 33 characters');
    } else if(brand.length > 11 || fuel.length > 11 || model.length > 11 || brand === '' || fuel === '' || model === '') {
        notify.showError('Brand, Fuel and Model should not exceed 11 characters and must be non-empty');
    } else if(year.toString().length > 4 || year === '') {
        notify.showError('Year must contain only 4 numbers and must be non-empty');
    } else if(price > 1000000 || price === '') {
        notify.showError('Price must be less or equal to 1000000$ and must be non-epmty');
    } else if(!imageUrl.startsWith('http') || imageUrl === '') {
        notify.showError('Url must start with http and must be non-empty');
    } else {
        let obj = {
            title:title,
            description:description,
            brand:brand,
            fuel:fuel,
            model:model,
            imageUrl:imageUrl,
            year:year,
            price:price,
            seller: sessionStorage.getItem('username')

        };

        carService.editCarListing(obj, carId)
            .then(car => {
                notify.showInfo('CarListing edited!');
                ctx.redirect('#/carListings');
            });
    }

};

handlers.postCarListingEdit = function (ctx) {
    ctx.isLogged = sessionStorage.getItem('authtoken') !== null;
    ctx.username = sessionStorage.getItem('username');
    let carId = ctx.params.carId;

    let title = ctx.params.title;
    let description = ctx.params.description;
    let brand = ctx.params.brand;
    let fuel = ctx.params.fuelType;
    let model = ctx.params.model;
    let year = ctx.params.year;
    let price = ctx.params.price;
    let imageUrl = ctx.params.imageUrl;

    if(title.length > 33 || title === ''){
        notify.showError('title must be less than 33 letters and must be non-empty');
    } else if (description.length > 450 || description.length < 30) {
        notify.showError('description must be between 450 an 33 characters');
    } else if(brand.length > 11 || fuel.length > 11 || model.length > 11 || brand === '' || fuel === '' || model === '') {
        notify.showError('Brand, Fuel and Model should not exceed 11 characters and must be non-empty');
    } else if(year.toString().length > 4 || year === '') {
        notify.showError('Year must contain only 4 numbers and must be non-empty');
    } else if(price > 1000000 || price === '') {
        notify.showError('Price must be less or equal to 1000000$ and must be non-epmty');
    } else if(!imageUrl.startsWith('http') || imageUrl === '') {
        notify.showError('Url must start with http and must be non-empty');
    } else {
        let obj = {
            title:title,
            description:description,
            brand:brand,
            fuel:fuel,
            model:model,
            imageUrl:imageUrl,
            year:year,
            price:price,
            seller: sessionStorage.getItem('username')

        };

        carService.editCarListing(obj, carId)
            .then(car => {
                notify.showInfo('CarListing edited!');
                ctx.redirect('#/carListings');
            });
    }

};

handlers.carListingDelete = function (ctx) {
    ctx.isLogged = sessionStorage.getItem('authtoken') !== null;
    ctx.username = sessionStorage.getItem('username');
    let carId = ctx.params.carId;

    ctx.carId = carId;
    carService.deleteCarListing(carId).then(car => {
        notify.showInfo('CarListing deleted!');
        ctx.redirect('#/carListings');
    })
        .catch(notify.handleError);
};

handlers.getCarListingDetails = function (ctx) {
    ctx.isLogged = sessionStorage.getItem('authtoken') !== null;
    ctx.username = sessionStorage.getItem('username');
    let carId = ctx.params.carId;

    ctx.carId = carId;

    carService.getCarListingById(carId)
        .then(carListing => {

          ctx.isCreator = carListing.seller === sessionStorage.getItem('username');
          ctx.carListing = carListing;
            ctx.loadPartials({
                navigation: './templates/common/navigation.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/cars/carListingDetails.hbs');
            })
        })
        .catch(notify.handleError);

};