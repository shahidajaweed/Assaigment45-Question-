// guest list to inviting dinner
let guests: string[] = ["Jiya", "Mano", "Shahi"];
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for 
    dinner?`);
})
// chenging a guest list
let unableToAttend = "Shahi";
console.log(`${unableToAttend} cant make it to dinner.`);

let newGuest = "Ali";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitation
guests.forEach(newGuest => {
    console.log(`Dear ${newGuest}, would you like to join me for dinner`);
    
});