let quoteBody1 = document.getElementById("quoteBody1");
let quoteAuthor1 = document.getElementById("quoteAuthor1");

let quoteBody2 = document.getElementById("quoteBody2");
let quoteAuthor2 = document.getElementById("quoteAuthor2");

let quoteBody3 = document.getElementById("quoteBody3");
let quoteAuthor3 = document.getElementById("quoteAuthor3");

let quoteBody4 = document.getElementById("quoteBody4");
let quoteAuthor4 = document.getElementById("quoteAuthor4");

let quoteBody5 = document.getElementById("quoteBody5");
let quoteAuthor5 = document.getElementById("quoteAuthor5");

// 

let shortQuoteBody1 = document.getElementById("shortQuoteBody1");
let shortQuoteAuthor1 = document.getElementById("shortQuoteAuthor1");

let shortQuoteBody2 = document.getElementById("shortQuoteBody2");
let shortQuoteAuthor2 = document.getElementById("shortQuoteAuthor2");

let shortQuoteBody3 = document.getElementById("shortQuoteBody3");
let shortQuoteAuthor3 = document.getElementById("shortQuoteAuthor3");

// 

let instagramIcon = document.getElementById("instagramIcon");
let githubIcon = document.getElementById("githubIcon");



fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => printQuote(data));

  function printQuote(data){

	quoteBody1.append(`"${data["content"]}"`)
	quoteAuthor1.append(data["author"])	  
        
  };


fetch('https://api.quotable.io/random')
  .then(response2 => response2.json())
  .then(data2 => printQuote2(data2));

  function printQuote2(data2){

	quoteBody2.append(`"${data2["content"]}"`)
	quoteAuthor2.append(data2["author"])	  
        
  };

fetch('https://api.quotable.io/random')
  .then(response3 => response3.json())
  .then(data3 => printQuote3(data3));

  function printQuote3(data3){

	quoteBody3.append(`"${data3["content"]}"`)
	quoteAuthor3.append(data3["author"])	  
        
  };

fetch('https://api.quotable.io/random')
  .then(response4 => response4.json())
  .then(data4 => printQuote4(data4));

  function printQuote4(data4){

	quoteBody4.append(`"${data4["content"]}"`)
	quoteAuthor4.append(data4["author"])	  
        
  };

fetch('https://api.quotable.io/random')
  .then(response5 => response5.json())
  .then(data5 => printQuote5(data5));

  function printQuote5(data5){

	quoteBody5.append(`"${data5["content"]}"`)
	quoteAuthor5.append(data5["author"])	  
        
  };

  // OTHER SECTION



fetch('https://api.quotable.io/random')
.then(response1 => response1.json())
.then(data1 => printShortQuote1(data1));

function printShortQuote1(data1){

shortQuoteBody1.innerHTML = `"${data1["content"]}"`
shortQuoteAuthor1.innerHTML =`${data1["author"]}`
      
};
  
fetch('https://api.quotable.io/random')
.then(response2 => response2.json())
.then(data2 => printShortQuote2(data2));

function printShortQuote2(data2){

shortQuoteBody2.innerHTML = `"${data2["content"]}"`
shortQuoteAuthor2.innerHTML=`${data2["author"]}`	  
      
};
  
fetch('https://api.quotable.io/random')
.then(response3 => response3.json())
.then(data3 => printShortQuote3(data3));

function printShortQuote3(data3){

shortQuoteBody3.innerHTML = `"${data3["content"]}"`
shortQuoteAuthor3.innerHTML = `${data3["author"]}`
      
};


instagramIcon.addEventListener("click",function(){
  location.href = "https://www.instagram.com/dalvinsegura/"
})

githubIcon.addEventListener("click",function(){
  location.href = "https://github.com/dalvin181/"
})