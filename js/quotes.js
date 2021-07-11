const quotes = [
    {
        quote: 'Act as if what you do makes a difference. It does.',
        author: 'William James',
    },

    {
        quote: 'Never bend your head. Always hold it high. Look the world straight in the eye.',
        author: 'Helen Keller',
    },

    {
        quote: "When you have a dream, you've got to grab it and never let go.",
        author: 'Carol Burnett',
    },

    {
        quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
        author: 'Jimmy Dean',
    },

    {
        quote: "No matter what you're going through, there's a light at the end of the tunnel.",
        author: 'Demi Lovato',
    },

    {
        quote: 'Limit your "always" and your "nevers."',
        author: 'Amy Poehler​​',
    },

    {
        quote: 'Nothing is impossible. The word itself says "I am possible!"',
        author: 'Audrey Hepburn',
    },

    {
        quote: "Try to be a rainbow in someone else's cloud.",
        author: 'Maya Angelou',
    },

    {
        quote: 'You get what you give.',
        author: 'Jennifer Lopez',
    },

    {
        quote: 'Keep your face to the sunshine and you cannot see a shadow.',
        author: 'Helen Keller',
    }
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
