const carForm = document.getElementById("carForm");
const brandInput = document.getElementById("brandInput");
const yearInput = document.getElementById("yearInput");
const mileageInput = document.getElementById("mileageInput");
const errorDiv = document.getElementById("error");
const carList = document.getElementById("carList");

const currentYear = new Date().getFullYear();

const cars = [];

function renderCars(carsArray) {
  carList.innerHTML = "";

  if (carsArray.length === 0) {
    carList.textContent = "Машин нет.";
    return;
  }

  carsArray.forEach(car => {
    const carDiv = document.createElement("div");
    carDiv.className = "car-item";
    carDiv.textContent = `Бренд: ${car.brand}, Год: ${car.year}, Пробег: ${car.mileage} км`;
    carList.appendChild(carDiv);
  });
}

carForm.addEventListener("submit", (e) => {
  e.preventDefault();

  errorDiv.textContent = "";

  const brand = brandInput.value.trim();
  const year = parseInt(yearInput.value);
  const mileage = parseInt(mileageInput.value);

  if (!brand || isNaN(year) || isNaN(mileage)) {
    errorDiv.textContent = "Пожалуйста, заполните все поля корректно.";
    return;
  }

  if (year < 1900 || year > currentYear) {
    errorDiv.textContent = `Год должен быть в диапазоне 1900-${currentYear}.`;
    return;
  }

  if (mileage < 0) {
    errorDiv.textContent = "Пробег не может быть отрицательным.";
    return;
  }

  cars.push({ brand, year, mileage });
  renderCars(cars);
  carForm.reset();
});

// Инициализация
renderCars(cars);
