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
    let wrapper = document.body.querySelector(".wrapper");
    let quotesDescription = wrapper.firstElementChild;
    let quotesName = wrapper.lastElementChild;
    let button = document.body.querySelector(".generator");
    let pop = document.body.querySelector(".spinner");

    quotesDescription.innerText = quotes[0].quote;
    quotesName.innerText = quotes[0].name;

    button.addEventListener("click", function() {
        const index = Math.floor(Math.random() * quotes.length);
        const findObj = quotes[index];

        quotesDescription.innerText = quotes[index].quote;
        quotesName.innerText = quotes[index].name;
    })
});


