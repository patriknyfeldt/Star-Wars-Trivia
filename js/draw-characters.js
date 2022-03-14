const drawCharacter = (character, i) =>
`<h2>${character.name}</h2>
<img src=${character.pictureUrl} alt="image of ${character.name}" />
<p>Let me tell you about ${character.otherCharacter.name}'s:</p>
<div class="btn-group">
  <button class="characteristics-btns" id="character-${i}-weight-btn">weight</button>
  <button class="characteristics-btns" id="character-${i}-height-btn">height</button>
  <button class="characteristics-btns" id="character-${i}-haircolor-btn">hair color</button>
  <button class="characteristics-btns" id="character-${i}-gender-btn">gender</button>
</div>
<div class="textbox">
  <p class="text-field" id="textfield-${i}"></p>
</div>`
