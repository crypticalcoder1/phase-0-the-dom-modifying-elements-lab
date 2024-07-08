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

// Step 1: Create a div element
const element = document.createElement('div');

// Step 2: Append the div element to the body
document.body.append(element);

// Step 3: Create an unordered list (ul) and populate it with list items (li)
const ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  const li = document.createElement('li');
  li.textContent = (i + 1).toString();
  ul.append(li);
}

// Append the ul to the div created in Step 1
element.append(ul);

// Step 4: Modify the style and content of the div
element.style.backgroundColor = '#f0f0f0';
element.style.padding = '20px';
element.textContent = 'Dynamic Content Example';

// Step 5: Remove elements from the DOM
setTimeout(() => {
  ul.removeChild(ul.querySelector('li:nth-child(2)')); // Remove the second li from the ul
}, 3000);
