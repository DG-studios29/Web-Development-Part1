const guestList = [];

for (let i = 1; i <= 11; i++) {
  const name = prompt(`Enter name of guest ${i}:`);
  
  if (!name) break; // User pressed Cancel
  
  if (i <= 10) {
    guestList.push(name);
  } else {
    console.log("You have already added 10 people to your guest list. Would you like to replace someone on the list with this person? y/n:");
    const replace = prompt("You have already added 10 people to your guest list. Would you like to replace someone on the list with this person? y/n");
    
    if (replace == "y"||"Y") {
      console.log("Guest List:");
      console.log(guestList);
      const replaceName = prompt("Who would you like to replace?");
      const index = guestList.indexOf(replaceName);
      
      if (index === -1) {
        console.log(`${replaceName} is not on the guest list.`);
      } else {
        guestList[index] = name;
        console.log("Updated Guest List:");
        console.log(guestList);
      }
    } else {
      console.log("Guest List:");
      console.log(guestList);
    }
  }
}
