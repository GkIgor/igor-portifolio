  const clock = document.getElementById('clock');
  const hours = document.getElementById('hours');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');

  function setClock() {
    const now = new Date();

    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    const s = now.getSeconds().toString().padStart(2, '0');

    hours.innerHTML = `${h}:`;
    minutes.innerHTML = `${m}:`;
    seconds.innerHTML = s;
  }

  setInterval(setClock, 1000);

  setClock();
