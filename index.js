// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    let blocks = Math.abs(42 - location);
    return (blocks);
}

function distanceFromHqInFeet(location) {
    let blocks = distanceFromHqInBlocks(location);
    let feet = (264 * blocks);
    return (feet);
}

function distanceTravelledInFeet(start, destination) {
    let blocks = Math.abs(destination - start);
    let feet = blocks * 264;
    return (feet);
}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);
    let fare;
    if (feet <= 400){
        fare = 0;
        return fare;
    }
    else if (feet > 400 && feet <= 2000){
        fare = (feet - 400) * .02;
        return fare;
    }
    else if (feet > 2000 && feet < 2500) {
        fare = 25;
        return fare;
    }
    else {
        return ("cannot travel that far");
    }

}