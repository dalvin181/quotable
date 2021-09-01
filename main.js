let quoteBody1 = document.getElementById("quoteBody1");
let quoteAuthor1 = document.getElementById("quoteAuthor1");

let quoteBody2 = document.getElementById("quoteBody2");
let quoteAuthor2 = document.getElementById("quoteAuthor2");

let quoteBody3 = document.getElementById("quoteBody3");
let quoteAuthor3 = document.getElementById("quoteAuthor3");

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
