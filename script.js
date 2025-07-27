
const eventForm = document.getElementById('eventForm');
const eventList = document.getElementById('eventList');

eventForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('eventName').value;
  const date = document.getElementById('eventDate').value;
  const time = document.getElementById('eventTime').value;
  const location = document.getElementById('eventLocation').value;

  const li = document.createElement('li');
  li.textContent = `🗓️ ${name} - ${date} ${time} @ ${location}`;

  eventList.appendChild(li);

  eventForm.reset(); 
});
