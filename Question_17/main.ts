let guests: string[] = ["mano", "shahi", "jiya"];
console.log("Unfortunately, I can only invite two people for dinner.");

while (guests. length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to
    dinner`);
}
guests. forEach(guest => {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
    });

guests. splice(0, guests. length);
console.log(guests);
//shows an empty list

