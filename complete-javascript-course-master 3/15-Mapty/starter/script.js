'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

///////////// Work Out Class //////////////////
class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords; // Arr [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in mins
  }
}

///////////// Running Class //////////////////
class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }

  calcPace() {
    // Min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

/////////////// Cycling Class //////////////////
class Cycling extends Workout {
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
  }

  calcSpeed() {
    // km / h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

////// Examples /////////
// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycle1 = new Cycling([39, -12], 5.2, 24, 178);

// console.log(cycle1);
// console.log(run1);

/////////////////////////////////// Application Architecture Class //////////////////////////////////
class App {
  /// Private Instance properties
  #map;
  #mapEvent;

  constructor() {
    this._getPosition();

    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert(`Could not get your position.`);
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
    ////////////   Handling clicks on Map ////////////////////
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    const validInput = (...inputs) => inputs.every(inp => Number.isFinite(inp));

    const allPositive = (...inputs) => inputs.every(inp => inp > 0);
    e.preventDefault();
    // Get data from form

    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;

    // Check if data is valid

    // If workout running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      //Check if the data is valid;
      // if (
      //   !Number.isFinite(distance) ||
      //   !Number.isFinite(duration) ||
      //   !Number.isFinite(cadence)
      // )

      if (
        !validInput(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      ) {
        return alert('Input have to be positive number');
      }
    }

    // If workout cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;

      if (
        !validInput(distance, duration, elevation) ||
        !allPositive(distance, duration)
      ) {
        return alert('Input have to be positive number');
      }
    }
    // Add new object to workout

    // render workout on map as marker
    const { lat, lng } = this.#mapEvent.latlng;

    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
      )
      .setPopupContent('Workout')
      .openPopup();

    // Render workout on list

    /////// Clear input fields ///////////
    inputDistance.value =
      inputCadence.value =
      inputDuration.value =
      inputElevation.value =
        '';
  }
}

const app = new App();
