//opdracht 1
let number = 4;

if (number < 6) {
    console.log('onvoldoende');
}
else if (number >= 6 && number < 7) {
    console.log('voldoende');
}

else if (number >= 7 && number < 9) {
    console.log('goed');
}

else if (number >= 9 && number <= 10) {
    console.log('uitmuntend');
}

else {
    console.log('nope')
}

//opdracht 2
switch (true) {
    case number < 6: console.log ('onvoldoende'); break;
    case number >= 6 && number < 7: console.log ("Voldoende"); break;
    case number >= 7 && number < 9: console.log("Goed"); break;
    case number > 9 && number <= 10: console.log("Uitmuntend"); break;
}

//opdracht 3
let purchasedBook = true,
    job = 'teacher',
    inTrain = false;

if(purchasedBook && job == 'teacher' && inTrain == true) {
    console.log('finally I can enjoy my book!');
} else{
    console.log('helaas')
}







