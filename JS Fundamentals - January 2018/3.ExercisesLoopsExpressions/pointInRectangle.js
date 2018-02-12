function mult(nums) {
    let x = Number(nums[0]);
    let y = Number(nums[1]);
    let xMin = Number(nums[2]);
    let xMax = Number(nums[3]);
    let yMin = Number(nums[4]);
    let yMax = Number(nums[5]);

    if (xMin <= x && x <= xMax && yMin <= y && y <= yMax) {
        console.log("inside");
    }
    else {
        console.log("outside");
    }
}