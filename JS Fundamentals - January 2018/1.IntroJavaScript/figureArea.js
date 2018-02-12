function figureArea(w, h, W, H) {
    let s1 = W*H;
    let s2 = w*h;
    let s3 = (Math.min(h, H) * Math.min(w, W));

    console.log(s1+s2-s3);
}

figureArea(13, 2, 5, 8);