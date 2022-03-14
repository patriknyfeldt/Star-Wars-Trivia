const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error();
    return await response.json();
};

const getCharacter = async (url) => {
    try {return await fetchData(url)}
    catch(error) {drawErrorMsg(`Something went wrong, please try again. <br> May the force be with you!`);}
}

const getCharacters = async (valueOne, valueTwo) => {
    const characterOne = await getCharacter(`https://swapi.dev/api/people/${valueOne}/`);
    const characterTwo = await getCharacter(`https://swapi.dev/api/people/${valueTwo}/`);
    new Character(characterOne.name, characterOne.gender, characterOne.height, characterOne.mass, characterOne.hair_color, valueOne, characterTwo);
    new Character(characterTwo.name, characterTwo.gender, characterTwo.height, characterTwo.mass, characterTwo.hair_color, valueTwo, characterOne);
}

