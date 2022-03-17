const chooseCharacterForm = document.getElementById('choose-character-form');
const errorMsgBox = document.getElementById('error-msg-box');
chooseCharacterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    characters.length = 0;
    const chosenCharacterOneValue = document.querySelector('#select-character-1 option:checked').value;
    const chosenCharacterTwoValue = document.querySelector('#select-character-2 option:checked').value;
    if(chosenCharacterOneValue && chosenCharacterTwoValue){
        errorMsgBox.innerHTML = '';
        await getCharacters(chosenCharacterOneValue, chosenCharacterTwoValue);
            characters.forEach((character, i) => {
                i++;
                showAndHideElements();
                setInnerHtmlToCharacterWrapper(character, i);
                addEventListenersToCharacteristicsBtns(character, i);
            })
    }
    else{
        drawErrorMsg('Please select two characters!');
    }

})

const setInnerHtmlToCharacterWrapper = (character, i) => {
    document.getElementById(`character-wrapper-${i}`).innerHTML = drawCharacter(character, i);
}

const addEventListenersToCharacteristicsBtns = (character, i) => {
    const textField = document.getElementById(`textfield-${i}`)

    document.getElementById(`character-${i}-weight-btn`).addEventListener('click', () => {
        character.compareWeight(textField);
    })
    document.getElementById(`character-${i}-height-btn`).addEventListener('click', () => {
        character.compareHeight(textField);
    })
    document.getElementById(`character-${i}-haircolor-btn`).addEventListener('click', () => {
        character.compareHairColor(textField);
    })
    document.getElementById(`character-${i}-gender-btn`).addEventListener('click', () => {
        character.compareGender(textField);
    })
}

const showAndHideElements = () => {
    chooseCharacterForm.classList.add('hide');
    document.getElementById('mid-wrapper').classList.remove('hide');
    document.getElementById('bottom-wrapper').classList.remove('hide');
}

const newCharacterBtns = document.querySelectorAll('.new-characters-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        location.reload();
    })
})

const drawErrorMsg = (message) => {
    errorMsgBox.innerHTML = `<p class="error-msg">${message}</p>`;
}
