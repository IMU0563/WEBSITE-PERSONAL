// Get references to the elements
const envelope = document.querySelector('.envelope');
const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');

// Function to open the envelope
function openEnvelope() {
  envelope.classList.add('open');
}

// Function to close the envelope
function closeEnvelope() {
  envelope.classList.remove('open');
}

// Add event listeners to the buttons
openButton.addEventListener('click', openEnvelope);
closeButton.addEventListener('click', closeEnvelope);