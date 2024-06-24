const bookingCards = document.querySelectorAll(".booking-card");

// document.addEventListener('DOMContentLoaded', (event) => {
//   const bookingForm = document.getElementById('booking-form');
//   const successMessage = document.getElementById('success-message');

//   bookingForm.addEventListener('submit', function(event) {
//       event.preventDefault(); // Prevent the default form submission

//       const today = new Date();
//       const todayDate = today.toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
//       const currentTime = today.toTimeString().split(' ')[0]; // Get current time in HH:MM:SS format

//       const departureDate = document.getElementById('departure-date').value;
//       const returnTime = document.getElementById('return-date').value;

//       const departureDateError = document.getElementById('departure-date-error');
//       const returnTimeError = document.getElementById('return-time-error');

//       let isValid = true;

//       // Clear previous error messages
//       departureDateError.textContent = 'Please enter a valid departure date!';
//       returnTimeError.textContent = 'Please enter a valid meeting time!';
//       successMessage.style.display = 'block';
//       successMessage.textContent = 'Booking Successful';

//       if (departureDate < todayDate) {
//           departureDateError.textContent = 'Please choose a departure date that is today or in the future.';
//           isValid = false;
//       } else if (departureDate === todayDate && returnTime <= currentTime) {
//           returnTimeError.textContent = 'Please choose a return time that is later today or in the future.';
//           isValid = false;
//       }

//       if (isValid) {
//           successMessage.textContent = 'Booking saved successfully!';
//           successMessage.style.display = 'block';
//           // Optionally, you can reset the form or perform any other actions here
//           bookingForm.reset();
//       }
//   });
// });

document.getElementById('booking-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const destination = document.getElementById('destination').value;
  const departureDate = document.getElementById('departure-date').value;
  const returnDate = document.getElementById('return-date').value;

  const newBooking = {
      name,
      email,
      destination,
      departureDate,
      returnDate,
      quantity: 1
  };
  let bookings = JSON.parse(localStorage.getItem('bookings')) || [];

  const existingBooking = bookings.find(booking => 
      booking.name === newBooking.name &&
      booking.email === newBooking.email &&
      booking.destination === newBooking.destination &&
      booking.departureDate === newBooking.departureDate &&
      booking.returnDate === newBooking.returnDate
  );

  if (existingBooking) {
      existingBooking.quantity += 1;
  } else {
      bookings.push(newBooking);
  }

  localStorage.setItem('bookings', JSON.stringify(bookings));

  alert('Booking successful!');

  document.getElementById('booking-form').reset();
});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',
  spaceBetween: 30,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    500: 
    {
      slidesPerView: 1,
    },
    700:
    {
      slidesPerView: 2,
    },
    950:
    {
      slidesPerView: 3,
    },
  },
});
