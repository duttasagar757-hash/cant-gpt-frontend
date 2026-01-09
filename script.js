async function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value;
  input.value = "";

  if (!message) return;

  const messages = document.getElementById("messages");
  messages.innerHTML += `<p><b>You:</b> ${message}</p>`;

  try {
    const res = await fetch(https://cant-gpt-backend.onrender.com/chat, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await res.json();
    messages.innerHTML += `<p><b>Cant-GPT:</b> ${data.reply}</p>`;
  } catch {
    messages.innerHTML += `<p><b>Cant-GPT:</b> I would reply, but the internet called in sick.</p>`;
  }
}
