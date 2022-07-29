// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
  
    for (let i = 0; i < contacts.length; i += 1) {
      if (contacts[i].firstName === name && "prop" in contacts[i]) {
        return contacts[i][prop];
      } else if (contacts[i].firstName === name && !("prop" in contacts[i])) {
        return "No such property";
      }
    }
    return "No such contact";
    // Only change code above this line
  }
  
    // Only change code above this line
  
  
  // function lookUpProfile(name, prop) {
  //   console.log(name, prop)
  //   const contact = contacts.find((e) => e.firstName === name);
  //   if (contact) {
  //     console.log('>>>')
  //     return contact[prop] ? contact[prop] : "No such property"
  //   }
  //   return "No such contact"
  // }
  lookUpProfile("Akira", "likes") ;