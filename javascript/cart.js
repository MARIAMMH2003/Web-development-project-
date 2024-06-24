document.addEventListener('DOMContentLoaded', function() {
    const bookingsContainer = document.getElementById('bookings-container');
    const buyButton = document.querySelector('.buy-button');
    const buyOptions = document.querySelector('.buy-options');
    const visaButton = document.querySelector('.visa-button');
    const reserveButton = document.querySelector('.reserve-button');
    const buyForm = document.querySelector('.buy-form');
    const closeModals = document.querySelectorAll('.close-modal');
    const submitPayment = document.getElementById('submit-payment');

    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];

    buyButton.addEventListener('click', () => {
      buyOptions.style.display = 'flex';
    });

    visaButton.addEventListener('click', () => {
      buyForm.style.display = 'flex';
    
    });

    reserveButton.addEventListener('click', () => {
      alert('Reserved! You can buy your tickets on arrival.');
      buyOptions.style.display = 'none';
    });

    closeModals.forEach(closeModal => {
      closeModal.addEventListener('click', () => {
        buyOptions.style.display = 'none';
        buyForm.style.display = 'none';
      });
    });

    function renderBookings() {
      bookingsContainer.innerHTML = '';
      if (bookings.length === 0) {
        bookingsContainer.innerHTML = '<p>No bookings found.</p>';
      } else {
        bookings.forEach((booking, index) => {
          const bookingElement = document.createElement('div');
          bookingElement.classList.add('booking');
          bookingElement.innerHTML = `
            <h2>${booking.name}</h2>
            <button class="close-btn">&times;</button>
            <p><strong>Email:</strong> ${booking.email}</p>
            <p><strong>Destination:</strong> ${booking.destination}</p>
            <p><strong>Departure Date:</strong> ${booking.departureDate}</p>
            <p><strong>Return Date:</strong> ${booking.returnDate}</p>
            <div class="quantity-controls">
              <button class="decrement">-</button>
              <span class="quantity">${booking.quantity}</span>
              <button class="increment">+</button>
            </div>
          `;
          bookingsContainer.appendChild(bookingElement);

          bookingElement.querySelector('.increment').addEventListener('click', () => updateQuantity(index, 1));
          bookingElement.querySelector('.decrement').addEventListener('click', () => updateQuantity(index, -1));
          bookingElement.querySelector('.close-btn').addEventListener('click', () => deleteBooking(index));
        });
      }
    }

    function updateQuantity(index, change) {
      bookings[index].quantity += change;
      if (bookings[index].quantity < 1) bookings[index].quantity = 1;
      localStorage.setItem('bookings', JSON.stringify(bookings));
      renderBookings();
      updateCartAmount();
    }

    function deleteBooking(index) {
      bookings.splice(index, 1);
      localStorage.setItem('bookings', JSON.stringify(bookings));
      renderBookings();
      updateCartAmount();
    }

    document.querySelector('.reset-cart').addEventListener('click', () => {
      bookings = [];
      localStorage.setItem('bookings', JSON.stringify(bookings));
      renderBookings();
      updateCartAmount();
    });

    function updateCartAmount() {
      let totalTickets = bookings.reduce((sum, booking) => sum + booking.quantity, 0);
      window.parent.document.querySelector('.cartamount').textContent = totalTickets;
    }

    submitPayment.addEventListener('click', (e) => {
      e.preventDefault();
      const cardNumber = document.getElementById('card-number').value;
      const cardHolderName = document.getElementById('card-holder-name').value;
      const expirationDate = document.getElementById('expiration-date').value;
      const cvv = document.getElementById('cvv').value;

      let valid = true;

      if (!/^\d{16}$/.test(cardNumber)) {
        document.getElementById('card-number-error').style.display = 'block';
        valid = false;
      } else {
        document.getElementById('card-number-error').style.display = 'none';
      }

      if (!/^(\w+\s){2}\w+$/.test(cardHolderName)) {
        document.getElementById('card-holder-name-error').style.display = 'block';
        valid = false;
      } else {
        document.getElementById('card-holder-name-error').style.display = 'none';
      }

      if (!/^\d{2}\/\d{2}$/.test(expirationDate)) {
        document.getElementById('expiration-date-error').style.display = 'block';
        valid = false;
      } else {
        document.getElementById('expiration-date-error').style.display = 'none';
      }

      if (!/^\d{2,4}$/.test(cvv)) {
        document.getElementById('cvv-error').style.display = 'block';
        valid = false;
      } else {
        document.getElementById('cvv-error').style.display = 'none';
      }

      if (valid) {
        alert('Payment successful! Tickets purchased.');
        buyForm.style.display = 'none';
        bookingsContainer.insertAdjacentHTML('beforebegin', '<div class="purchase-success">Purchase Successful</div>');
      }
    });

    renderBookings();
  });
