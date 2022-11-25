console.log(" YAY we r connected");

//Creating a div to contain quote and btn
// let div = document.createElement('div');
// document.body.appendChild(div);
    
// // Creating A Button
// let btn = document.createElement('button');
// document.body.appendChild(btn)
// btn.innerHTML = "SHOW ANOTHER QUOTE";

// // Styling

// document.body.style.marginTop = '200px';
// document.body.style.display = 'flex';
// document.body.style.flexDirection =  'column';
// document.body.style.alignItems ='center';
// document.body.style.backgroundColor = 'plum'

// div.style.textAlign = "center";

// btn.style.color = 'bisque';
// btn.style.backgroundColor = 'blue';

// Above code, Tried to generate the html tags in js, but its much easier to code it on html

const btn = document.getElementById('getQuote')
const quote = document.getElementById('quote');
const author = document.getElementById('author');

//Adding Quotes in an array as obj elements
const quoteArray1 = [
    {
      "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
      "author": "Thomas Edison"
    },
    {
      "text": "You can observe a lot just by watching.",
      "author": "Yogi Berra"
    },
    {
      "text": "A house divided against itself cannot stand.",
      "author": "Abraham Lincoln"
    },
    {
      "text": "Difficulties increase the nearer we get to the goal.",
      "author": "Johann Wolfgang von Goethe"
    },
    {
      "text": "Fate is in your hands and no one elses",
      "author": "Byron Pulsifer"
    },
    {
      "text": "Be the chief but never the lord.",
      "author": "Lao Tzu"
    },
    {
      "text": "Nothing happens unless first we dream.",
      "author": "Carl Sandburg"
    },
    {
      "text": "Well begun is half done.",
      "author": "Aristotle"
    },
    {
      "text": "Life is a learning experience, only if you learn.",
      "author": "Yogi Berra"
    },
    {
      "text": "Self-complacency is fatal to progress.",
      "author": "Margaret Sangster"
    }];

// first quote printed on the screen when the page loads
quote.innerHTML =  quoteArray1[0].text ;
author.innerHTML = quoteArray1[0].author;
console.log(quoteArray1[0].text);

//Getting quote without async by hard coding the quotes to the quoteArray1
function displayQuote(quoteArray){
    if(!quoteArray){
        quoteArray= quoteArray1;
    }
    let randomNumber  = Math.floor(Math.random() *quoteArray.length);
    console.log(quoteArray)
    quote.innerText = quoteArray[randomNumber].text;
    author.innerText = quoteArray[randomNumber].author ;

}

function getQuote(){
    displayQuote();
}

btn.onclick = getQuote;
//btn.addEventListener('click',displayQuote);an alternate to onclick


/*    Async Function  we get the the quote array by fetching from the url */
const  url  = "https://type.fit/api/quotes";
async function getQuoteAsync(){
        try{
            let quoteArray2 = await fetch(url);
                if(quoteArray2.ok){
                quoteArray2 = await quoteArray2.json();
                console.log(quoteArray2);
                displayQuote(quoteArray2);
                //throw Error()
                }else{

                     btn.onclick = getQuote;// if there is a problem getting quotes from url, it will get it from the array
                    throw new Error("problem in resolve")
                }
        }
        catch{
          console.log("error thrown on try catch block");
          btn.onclick = getQuote;

        }
}
//btn.onclick = getQuoteAsync; //uncomment if u want to try quotes from api



