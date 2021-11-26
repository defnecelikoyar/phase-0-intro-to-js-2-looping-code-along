const names = ["Ayse", "Defne", "Yasemin", "Ipek"];
const specialDay = "birthday";
const messageArray = [];

function writeCards(names, specialDay) {
    for (let i=0; i < names.length; i++) {
        debugger;
        messageArray.push(`Thank you, ${names[i]}, for the wonderful ${specialDay} gift!`);
    }
    return messageArray;
}; 

function countDown(numba = 10) {
    while (numba >= 0) {
    console.log(numba);
    numba--;
};
};

