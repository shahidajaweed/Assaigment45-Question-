var guests = ["Jiya", "Mano", "Shahi"];
guests.forEach(function (guest) {
    console.log("Hello ".concat(guest, ", Great news! I found a bigger dinner \n    table!"));
});
// Adding more guests
guests.unshift("Nimra");
guests.splice(guests.length / 2, 0, "Anumta");
guests.push("Kashaf");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", Would you like to join me \n    for dinner"));
});
