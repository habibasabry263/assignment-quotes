var quotes=[

    {content:'“Be yourself; everyone else is already taken.”', author:'― Oscar Wilde'},
    {content:'“So many books, so little time.”', author:'― Frank Zappa'},
    {content:'“Be the change that you wish to see in the world.”', author:'― Mahatma Gandhi'},
    {content:'“A room without books is like a body without a soul.”', author:'― Marcus Tullius Cicero'},
    {content:'“You only live once, but if you do it right, once is enough.”', author:'― Mae West'},
]
lastquote=0

function getquotes(){
var randomIndex;
do {
    randomIndex = Math.floor(Math.random() * quotes.length);
} while
 (randomIndex === lastquote); 

lastquote = randomIndex; 

console.log(quotes[randomIndex]);
document.getElementById('content').innerHTML=quotes[randomIndex].content;
document.getElementById('author').innerHTML=quotes[randomIndex].author;
}