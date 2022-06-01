
// Variáveis e tipos de dados:

// Declaration

//var name 

// Assigment (atribuir valores)

//name = 'Mike'

// Agrupamento de declarações 

/* let age, isHuman 

age = 20
isHuman = true

// Array 

const animals = [
    'Lion', 
    'Monkey',
    'Cat'
]
 */
//console.log(animals [0])







/* Declare uma variável e atribua valores a cada um dos dados:

    * Name : string 
    * Age : number (interege)
    * stars : number (float)
    * isSubscribed: Boolean
*/

//let name = 'Felippe'
// let Age = 28
// let stars = 4.5
// let isSubscribed = true






/* function mouthSize(animal) {

    if(animal.toLowerCase() == 'alligator'){
     
      return 'small'
    }else{
      return 'wide'
    }
      
  };

  

  //console.log(mouthSize('cat'))


  function piDoGuedes(){
 
    return 3.14
 */
 /*  }

//console.log(piDoGuedes())


function areaDoCirculo(raio){

    return 2*piDoGuedes()*raio
}

console.log(areaDoCirculo(3))


function volumeDoCubo(lado,altura){

    return (lado**2)*altura
}

console.log(volumeDoCubo(2,3)) */





/* let phrases = 'eu quero viver o Amor !'
console.log(phrases.includes('Amor')) */
/* 
let controleDePassageiros = function(cap,on,wait){

if(cap > wait - on){
    return 0
}else{
    return (wait - on)
}
};

console.log(controleDePassageiros(100,60,50))
console.log(controleDePassageiros(10,5,5)) */


function estadoVital(bullet,zombies,range){
    
    // Matar todos.
    if (bullet >= zombies && zombies < (2 * range)){

        return "You shot all " + zombies + " zombies."

    }

    // Morrer antes de acabar as balas e de matar todos.
    else if (zombies > (2 * range) && bullet > (2 * range)){

        return "You shot " + (2 * range) + " zombies before being eaten: overwhelmed."

    }
    
    //Ficar sem munição.
    else if  (bullet < zombies && bullet < (2 * range)){
        
        return "You shot " + (bullet) + " zombies before being eaten: run out of ammo."

    }
    
    //Ficar sem munição ao mesmo tempo que os zumbis chegam.
    else if (bullet == (2 * range) && zombies > (2 * range)){ 

        return "You shot " + (2 * range) + " zombies before being eaten: overwhelmed."
    }
};



console.log(estadoVital(20,18,11)) // 18 zumbis 
console.log(estadoVital(17,20,7)) // 14 zumbis
console.log(estadoVital(10,20,9)) // 10 zumbis 
console.log(estadoVital(20,25,10)) // 20 zumbis 

