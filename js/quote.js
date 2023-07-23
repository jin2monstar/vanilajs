const quotesList = [
  { quote: '"Where there is life, there is hope.", author: "Cicero"' },
  { quote: '"Happiness is a habit. Cultivate it.", author: "Elbert Hubbard"' },
  {
    quote: '"The secret of success is to do the common thing uncommonly well."',
    author: "John D. Rockefeller",
  },
  {
    quote: '"If you do what you love, you’ll never work a day in your life."',
    author: "Marc Anthony",
  },
  {
    quote: '"Whether you think you can or think you can’t, you’re right."',
    author: "Henry Ford",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");
const todayQuotes = quotesList[Math.floor(Math.random() * quotesList.length)];

quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;
