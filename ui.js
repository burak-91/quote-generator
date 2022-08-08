class UI{
    constructor(){
        this.quoteSpan= document.getElementById("quote");
        this.authorSpan= document.getElementById("author");
       
    }


    showNewQuote(quote){
        let genereNumber = Math.floor(Math.random() * 1643) + 1
        this.quoteSpan.innerText=quote[genereNumber].text
        this.authorSpan.innerText=quote[genereNumber].author
    }



}