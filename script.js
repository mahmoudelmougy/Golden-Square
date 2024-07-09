document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    const showSlide = (index) => {
        const slidesContainer = document.querySelector('.slides');
        slidesContainer.style.transform = `translateX(${index * 100}%)`;
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    };

    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    };

    document.querySelector('.next-slide').addEventListener('click', nextSlide);
    document.querySelector('.prev-slide').addEventListener('click', prevSlide);

    // Automatically go to the next slide every 3 seconds
    setInterval(nextSlide, 7000);
})



// document.getElementById('contactForm').addEventListener('submit', function (e) {
//     e.preventDefault();
//     const formData = new FormData(this);
//     fetch(this.action, {
//         method: 'POST',
//         body: formData,
//         headers: {
//             'Accept': 'application/json'
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.ok) {
//             alert('تم إرسال بياناتك بنجاح!');
//         } else {
//             alert('حدث خطأ ما يرجى إعادة المحاولة');
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// });
