// guest list to inviting dinner
var guests = ["Jiya", "Mano", "Shahi"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for \n    dinner?"));
});
// chenging a guest list
var unableToAttend = "Shahi";
console.log("".concat(unableToAttend, " cant make it to dinner."));
var newGuest = "Ali";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitation
guests.forEach(function (newGuest) {
    console.log("Dear ".concat(newGuest, ", would you like to join me for dinner"));
});
