const API_URL = 'http://localhost:3000'; // Ajusta si tu backend está en otro lado

function fetchMessage() {
  fetch(`${API_URL}/`)
    .then(res => res.text())
    .then(data => {
      document.getElementById('response').textContent = data;
    })
    .catch(err => console.error('Error al hacer GET:', err));
}

function sendData(event) {
  event.preventDefault();
  const input = document.getElementById('inputText').value;

  fetch(`${API_URL}/echo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ mensaje: input })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById('response').textContent = JSON.stringify(data, null, 2);
    })
    .catch(err => console.error('Error al hacer POST:', err));
}
