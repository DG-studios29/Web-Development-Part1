const translatorMap = new Map([
    ["hello", "hola"],
    ["goodbye", "adios"],
    ["yes", "si"],
    ["no", "no"],
    ["please", "por favor"],
    ["thank you", "gracias"],
    ["sorry", "lo siento"],
    ["excuse me", "disculpe"],
    ["friend", "amigo/amiga"],
    ["food", "comida"]
  ]);
  
  const word = prompt("Enter an English word to translate:");
  
  if (translatorMap.has(word)) {
    const translation = translatorMap.get(word);
    console.log(`${word} in Spanish is ${translation}`);
  } else {
    console.log(`Sorry, ${word} could not be translated.`);
  }
  