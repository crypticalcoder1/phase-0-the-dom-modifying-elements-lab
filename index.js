// Write your code here!
function scuberGreetingForFeet(distance) {
    if (distance <= 400) {
      return 'This one is on me!';
    } else if (distance > 2000 && distance <= 2500) {
      return 'I will gladly take your thirty bucks.';
    } else if (distance > 2500) {
      return 'No can do.';
    }
    // No need for an else statement because every possible case is covered above
  }
  function ternaryCheckCity(city) {
    return city === "NYC" ? "Ok, sounds good." : "No go.";
  }
  function switchOnCharmFromTip(tip) {
    switch (tip) {
      case 'generous':
        return 'Thank you so much.';
      case 'not as generous':
        return 'Thank you.';
      default:
        return 'Bye.';
    }
  }
  // Remove the <main> node with id 'main'
document.querySelector('main#main').remove();

// Create a new <h1> element
let newHeader = document.createElement('h1');

// Set the id attribute of newHeader to 'victory'
newHeader.id = 'victory';

// Set the text content of newHeader
newHeader.textContent = 'YOUR-NAME is the champion'; // Replace YOUR-NAME with your name

// Append newHeader to the <body> element
document.body.appendChild(newHeader);
