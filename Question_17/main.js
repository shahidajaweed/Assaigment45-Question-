var guests = ["mano", "shahi", "jiya"];
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to\n    dinner"));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
});
guests.splice(0, guests.length);
console.log(guests);
//shows an empty list
