let guests: string[] = ["Jiya", "Mano", "Shahi"];
guests.forEach(guest => {
    console.log(`Hello ${guest}, Great news! I found a bigger dinner 
    table!`);
    
} )

// Adding more guests
guests.unshift("Nimra");
guests.splice(guests. length / 2, 0, "Anumta");
guests.push("Kashaf");

guests.forEach(guest => {
    console.log(`Dear ${guest}, Would you like to join me 
    for dinner`);
    
});