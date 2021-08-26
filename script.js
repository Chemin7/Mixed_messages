function  generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
  }

const inspirationalQuotes = {
    quotes:["I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
            "The Best Way To Get Started Is To Quit Talking And Begin Doing.",
            "Don’t Let Yesterday Take Up Too Much Of Today.",
            "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up."],
    autor:["Jimmy Dean","Walt Disney","Will Rogers","Vince Lombardi"]
    
}

function generateQuote(quoteObj){
    let index = generateRandomNumber(quoteObj['quotes'].length)
    let quote =`"${quoteObj.quotes[index]}" `;
    let autor  = `${quoteObj.autor[index].toUpperCase()}`
    return [quote,autor];
}

let quote = document.getElementById('quote');
let autor = document.getElementById('autor');


quote.innerText = generateQuote(inspirationalQuotes)[0];
autor.innerText = "-" + generateQuote(inspirationalQuotes)[1];



