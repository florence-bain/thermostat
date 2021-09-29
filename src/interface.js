
document.addEventListener("DOMContentLoaded", () => {
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

