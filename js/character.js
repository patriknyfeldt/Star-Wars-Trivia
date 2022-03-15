const characters = [];
class Character {
    constructor(name, gender, height, mass, hairColor, value, otherCharacter){
        this.name = name;
        this.gender = gender;
        this.height = +height;
        this.mass = +mass;
        this.hairColor = hairColor;
        this.value = value;
        this.pictureUrl = `images/character-${value}.png`;
        this.otherCharacter = otherCharacter;
        characters.push(this);
    }
    compareWeight(textField){
        const that = this.otherCharacter;
        if(+that.mass > this.mass){
            textField.innerText = `${that.name} weighs ${that.mass} kilos,
            wich is ${that.mass - this.mass} kilos more than me.`
        }
        else if(+that.mass < this.mass){
            textField.innerText = `${that.name} weighs ${that.mass} kilos,
            wich is ${this.mass - that.mass} kilos less than me.`;
        }
        else {
            textField.innerText = `Me and ${that.name} weighs the same!`;
        }
    }
    compareHeight(textField){
        const that = this.otherCharacter;
        if(+that.height > this.height){
            textField.innerText = `${that.name} is ${that.height} cm tall, 
            wich is ${that.height - this.height} cm taller than me.`;
        }
        else if(+that.height < this.height){
            textField.innerText = `${that.name} is ${that.height} cm tall, 
            wich is ${this.height - that.height} cm shorter than me`;
        }
        else textField.innerText = `Me and ${that.name} are both equally tall.`;
    }
    compareHairColor(textField){
        const that = this.otherCharacter;
        if(that.hair_color === 'n/a' || that.hair_color === 'none'){
            textField.innerText = `${that.name} has no hair!`
        }
        else if(that.hair_color == this.hairColor){
            textField.innerText = `${that.name}'s hair color is ${that.hair_color}, wich is the same as me!`
        }
        else if(that.hair_color.includes(this.hairColor) || this.hairColor.includes(that.hair_color)){
            textField.innerText = `${that.name}'s hair color is ${that.hair_color} wich 
            means we have ALMOST the same hair color, since my hair color is ${this.hairColor}`
        }
        else{
            textField.innerText = `${that.name}'s haircolor is ${that.hair_color}`
        }
    }
    compareGender(textField){
        const that = this.otherCharacter;
        if(that.gender === 'n/a' && that.gender === this.gender){
            textField.innerText = `${that.name} is a robot, just like me, meaning we are both non-binary.`
        }
        else if(that.gender === 'n/a'){
            textField.innerText = `${that.name} is a robot and thus it has no gender.`
        }
        else if(that.gender === this.gender){
            textField.innerText = `${that.name} is a ${that.gender}, just like me. 
            And most people in this galaxy.......`
        }
        else{
            textField.innerText = `${that.name} is a ${that.gender}`;
        }
    }
}
