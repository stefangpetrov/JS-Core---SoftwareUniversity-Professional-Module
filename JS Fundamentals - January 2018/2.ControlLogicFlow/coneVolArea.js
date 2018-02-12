function coneVolArea(r, h) {


    let vol = (1/3)*Math.PI*r*r*h;
    let surface = (Math.PI*r*(r + Math.sqrt(r*r + h*h)));

    console.log(vol);
    console.log(surface);
}

coneVolArea(3, 5)