// kilometerToMeter
function kilometerToMeter(kilometer) {
    if (kilometer > 0 && typeof kilometer === 'number') {
        let meter = kilometer * 1000;
        return meter;
    }
    else {
        let meter = kilometer + ' this value is not valid. Please give positive value.';
        return meter;
    }
}
const totalMeter = kilometerToMeter(5);
console.log(totalMeter);



// budgetCalculator
function budgetCalculator(watch, phone, laptop) {
    if (watch > 0 && typeof watch === 'number' && phone > 0 && typeof phone === 'number' && laptop > 0 && typeof laptop === 'number' ) {
        const watchPrice = watch * 50;
        const phonePrice = phone * 100;
        const laptopPrice = laptop * 500;
        let totalPrice = watchPrice + phonePrice + laptopPrice;
        return totalPrice;
    }

    else {
        return `Watch = '${watch}', Phone = '${phone}' & Laptop = '${laptop}' is Not valid. Please give positive number;`;
    }
}
const totalPrice = budgetCalculator(6, 5, 6);
console.log(totalPrice);



// hotelCost
function hotelCost(days) {
    if(days <= 0 || typeof days != 'number') {
            return `${days} not valid. please give positive numbers.`;
    }
    else if (days <= 10 ) {
        const totalCost = days * 100;
        return totalCost;
    }
    else if (days <= 20) {
        const firstTenDays = 10 * 100;
        const remainingDays = days - 10;
        const secondTenDays = remainingDays * 80;
        const totalCost = firstTenDays + secondTenDays;
        return totalCost;
    }
    else if (days > 20) {
        const firstTenDays = 10 * 100;
        const secondTenDays = 10 * 80;
        const remainingDays = days - 20;
        const lastDays = remainingDays * 50;
        const totalCost = firstTenDays + secondTenDays + lastDays;
        return totalCost;
    }
}
const totalHotelCost = hotelCost(31);
console.log(totalHotelCost);



// megaFriend
function megaFriend(friends) {
    let largerName = '';
    for (let i = 0; i < friends.length; i++) {
        const element = friends[i];
        if(typeof element != 'string' || element == '') {
            return `'${element}' is not a valid Name. Please enter a valid name;`;
        }
        if (largerName.length < element.length) {
            largerName = element;
        }
    }
    return largerName;
}
const friendName = ['Mehedy', 'Hasan', 'Salauddin', 'Anik', 'Eyasin', 'Rohiz'];
const largerFriendName = megaFriend(friendName);
console.log(largerFriendName);