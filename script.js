function  generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
  }

const inspirationalQuotes = {
    quotes:["I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
            "The Best Way To Get Started Is To Quit Talking And Begin Doing.",
            "Don’t Let Yesterday Take Up Too Much Of Today.",
            "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.",
            "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.",
            "We May Encounter Many Defeats But We Must Not Be Defeated.",
            "We Generate Fears While We Sit. We Overcome Them By Action."],
    autor:["Jimmy Dean","Walt Disney","Will Rogers","Vince Lombardi","Og Mandino","Maya Angelou","Henry Link"]
    
}

function generateQuote(quoteObj){
    let index = generateRandomNumber(quoteObj['quotes'].length)
    let quote =`"${quoteObj.quotes[index]}" `;
    let autor  = `${quoteObj.autor[index].toUpperCase()}`

    
    return [quote,autor];
}

let quote = document.getElementById('quote');
let autor = document.getElementById('autor');

function loadQuote(){
    let wholeQuote = generateQuote(inspirationalQuotes);
    quote.innerText = wholeQuote[0];
    autor.innerText = "-" + wholeQuote[1];
}



window.onload(loadQuote());
