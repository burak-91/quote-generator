const newQuoteButton = document.getElementById("new-quote");
const twitterButton = document.getElementById("twitter");
const quoteSpan= document.getElementById("quote");
const authorSpan= document.getElementById("author");
const loader=document.getElementById("loader")
const quoteContainer = document.getElementById("quote-container")



const ui= new UI();
const request = new Request();


eventListeners=()=>{
    newQuoteButton.addEventListener("click",()=>getNewQuoto())
    twitterButton.addEventListener("click",()=>goToTwitter())
    document.addEventListener("DOMContentLoaded",()=>getNewQuoto())
}
eventListeners()

getNewQuoto=()=>{
    request.getRequest()
    .then(res => ui.showNewQuote(res))
    loader.style.display="block"
    quoteContainer.style.display="none"
    setTimeout(()=>{
        loader.style.display="none"
        quoteContainer.style.display="block"
    },750)
}

goToTwitter=()=>{
   const quote = quoteSpan.innerText
   const author = authorSpan.innerHTML
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quote}-${author}`
    open(twitterUrl,"_blank")
}

