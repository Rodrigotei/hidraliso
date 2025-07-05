AOS.init();
async function getUserLocation() {
	try {
		const response = await fetch("https://ipapi.co/json/");
		const data = await response.json();

		if (data.city) {
			document.getElementById("user-city").textContent = data.city;
		} else {
			document.getElementById("user-city").textContent = "sua região";
		}
	} catch (error) {
		document.getElementById("user-city").textContent = "sua região";
	}
}
getUserLocation();

function getNumberWoman() {
  const n = Math.floor(Math.random() * (199 - 10 + 1)) + 10;
  document.getElementById("number-woman").textContent = n;
}
getNumberWoman();

const sashTrack = document.getElementById('sashTrack');
const img = sashTrack.querySelector('img');

// Só clona se for menor que 600px
if (window.innerWidth <= 600) {
	const clone = img.cloneNode(true);
	sashTrack.appendChild(clone);
}


var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      loop: true,
      speed: 500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
	   navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints:{
        0:{
          slidesPerView: 1
        },
        450:{
          slidesPerView: 2
        },
        600:{
          slidesPerView: 3
        },
        800:{
          slidesPerView: 4
        }
      }
    });


	
  var swiper = new Swiper(".mySwiper1", {
      spaceBetween: 30,
      loop: true,
      autoplay: true,
      speed: 500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints:{
        0:{
          slidesPerView: 1
        },
        450:{
          slidesPerView: 2
        },
        600:{
          slidesPerView: 3
        },
        800:{
          slidesPerView: 4
        },
        1300:{
          slidesPerView: 5
        }
      }
    });

  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;

      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });