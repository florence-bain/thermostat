
document.addEventListener("DOMContentLoaded", () => {
  fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.querySelector('#current-temperature').innerText = data.main.temp;
  });
  const thermostat = new Thermostat();
  document.querySelector('#temperature').innerText = thermostat.temperature
});

const updateTemperature = () => {
  document.querySelector('#temperature').innerText = thermostat.temperature;
  document.querySelector('#temperature').className = thermostat.energyUsage();
}

document.querySelector('#temperature-up').addEventListener('click', () => {
  thermostat.up();
  document.querySelector('#temperature').innerText = thermostat.temperature;
});

document.querySelector('#temperature-down').addEventListener('click', () => {
  thermostat.down();
  document.querySelector('#temperature').innerText = thermostat.temperature;
});

document.querySelector('#temperature-reset').addEventListener('click', () => {
  thermostat.reset();
  updateTemperature();
});

document.querySelector('#powersaving-off').addEventListener('click', () => {
  thermostat.switchPowerSaveOff();
  document.querySelector('#power-saving-status').innerText = 'off';
  updateTemperature();
});

// const selectElement = document.querySelector('#current-city');
// selectElement.addEventListener('change', (event) => {
//   const city = event.target.value;
//   const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`

//   fetch(url)
//   .then((response) => {
//     return response.json()
//   })
//   .then ((data) => {
//     document.querySelector('#current-temperature').innerText = data.main.temp;
//   })
// })

document.querySelector('#select-city').addEventListener('submit', (event) => {
  event.preventDefault();
  const city = document.querySelector('#current-city').ariaValueMax;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`

  fetch(url)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.querySelector('#current-temperature').innerText = data.main.temp;
  })
})

