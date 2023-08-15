/** This should build a sentence and display it in the main browser window. */
// Unnecessary comment https://res.cloudinary.com/practicaldev/image/fetch/s--aIBPDZ9g--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fal0udi31n6r3pwg8d73.png

var myStr = ''; // Naming!
first_part = 'I like to eat';

function GetSentence() {
  console.log('starting function');
  myStr = first_part; // Immutability is breached
  console.log('so far so good');
  for (var i = 0; i < 3; i++) { // Magic var is used here, it's better to use length if array below
    var x = ['apples', "bananas", 'cookies']; // Memory lack (the same array each iteration)
    myStr = myStr + ' ' + x[i] + ' '; // There will be 2 spaces between meals (is it a feature?)
    $('body') // Single Responsibility, one func - creates the string, another - places it
      .find('h1')
      .text(myStr);
    console.log(myStr);
  }
}

GetSentence();
