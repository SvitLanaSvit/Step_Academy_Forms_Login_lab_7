//---------------1------------
const but = document.getElementById("signIn");

const val = document.getElementById("rememberCheck");

let name = "";

but.onclick = (e) =>{
    name = document.getElementById("loginTxt").value;
    if(val.checked){
        alert(`Hallo, ${name}! I remembered you!`);
    }
    else{
        alert(`Hallo, ${name}! I didn't remember you!`);
    }
}

//---------------2------------

const butSec = document.getElementById("signInSecond");

butSec.onclick = (e) =>{
    const emailVal = document.getElementById("emailId").value;

    const loginSec = document.getElementById("loginIdSec").value;

    const passVal = document.getElementById("passTxtId").value;

    const passRepeatVal = document.getElementById("repeatPassId").value;

    if(emailVal != "" && loginSec != "" && passVal != "" && passRepeatVal != "" && passVal === passRepeatVal){
        alert("To the (specified) post office a confirmation email has been sent.");
    }
}

//---------------3------------
class Person{
    #firstname;
    #lastname;
    #birhtday
    #gender;
    #country;
    #city;
    #skills;

    constructor(){
        this.#skills = [];
    }

    setFirstmame(firstname){
        this.#firstname = firstname;
    }
    setLastname(lastname){
        this.#lastname = lastname;
    }
    setBirhtday(birhtday){
        this.#birhtday = birhtday;
    }
    setGender(gender){
        this.#gender = gender;
    }
    setCountry(country){
        this.#country = country;
    }
    setCity(city){
        this.#city = city;
    }
    addSkill(skills){
        this.#skills.push(skills);
    }
    

    getFirstname(){
        return this.#firstname;
    }
    getLastname(){
        return this.#lastname;
    }
    getBirhtday(){
        return this.#birhtday;
    }
    getGender(){
        return this.#gender;
    }
    getCountry(){
        return this.#country;
    }
    getCity(){
        return this.#city;
    }
    getSkills(){
        let str = "";
        for (let i = 0; i < this.#skills.length; i++) {
            if(i != this.#skills.length - 1){
                str += this.#skills[i] + ", ";
            }
            else{
                str += this.#skills[i];
            }
        }
        return str;
    }
}

let p = new Person();

const saveBut = document.getElementById("saveId");
saveBut.onclick = (e) =>{
    p.setFirstmame(document.getElementById("firstnameId").value);
    
    p.setLastname(document.getElementById("lastnameId").value);

    p.setBirhtday(document.getElementById("birthdayId").value);

    let radioCheckF = document.getElementById("genderFId").checked;
    let radioCheckM = document.getElementById("genderMId").checked;

    if(radioCheckF){
        p.setGender(document.getElementById("genderFId").value);
    }
    else if(radioCheckM){
        p.setGender(document.getElementById("genderMId").value);
    }

    p.setCountry(document.getElementById("countriesListId").value);

    p.setCity(document.getElementById("citiesId").value);

    const htmlChk = document.getElementById("htmlId").checked;
    const cssChk = document.getElementById("cssId").checked;
    const jsChk = document.getElementById("jsId").checked;
    const phpChk = document.getElementById("phpId").checked;
    const cPlusChk = document.getElementById("cPlusId").checked;
    const javaChk = document.getElementById("javaId").checked;
    const cSharpChk = document.getElementById("cSharpId").checked;

    if(htmlChk){
        p.addSkill(document.getElementById("htmlId").value);
    }
    if(cssChk){
        p.addSkill(document.getElementById("cssId").value);
    }
    if(jsChk){
        p.addSkill(document.getElementById("jsId").value);
    }
    if(phpChk){
        p.addSkill(document.getElementById("phpId").value);
    }
    if(cPlusChk){
        p.addSkill(document.getElementById("cPlusId").value);
    }
    if(javaChk){
        p.addSkill(document.getElementById("javaId").value);
    }
    if(cSharpChk){
        p.addSkill(document.getElementById("cSharpId").value);
    }

    firstId.innerText = p.getFirstname();
    lastId.innerText = p.getLastname();
    birthId.innerText = p.getBirhtday();
    genderId.innerText = p.getGender();
    countryId.innerText = p.getCountry();
    cityId.innerText = p.getCity();
    skillsId.innerText = p.getSkills();
}
