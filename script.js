let quotes = [
    {   name: "Sir Francis Bacon",
        quote: "Knowledge is power.",
    },
    {
        name:"John Kennedy",
        quote:"Knowledge is power.",
    },
    {
        name: "Winston Churchill",
        quote: "If you are going through hell, keep going.",
    },
    {
        name: "W. E. Hickson",
        quote:"If at first you don’t succeed, try, try again.",
    },
    {
        name: "Terminator(movie)",
        quote: "I'll be back.",
    },
];

document.addEventListener("DOMContentLoaded", function(){
    let mainText = document.body.querySelector(".main-text");
    let quotesDescription = mainText.firstElementChild;
    let quotesName = mainText.lastElementChild;
    let button = document.body.querySelector(".generator");

    quotesDescription.innerText = quotes[0].quote;
    quotesName.innerText = quotes[0].name;

    button.addEventListener("click", function() {
        const index = Math.floor(Math.random() * quotes.length);
        const findObj = quotes[index];

        quotesDescription.innerText = quotes[index].quote;
        quotesName.innerText = quotes[index].name;
    })
    
});


