
function toggleNav() {
    var overlay = document.getElementById("overlay");
    if (overlay.style.width === "100%") {
        overlay.style.width = "0";
    } else {
        overlay.style.width = "100%";
        overlay.style.display = "block";
    }
  }
  
  // Function to close the side navigation bar
  function closeNav() {
    var overlay = document.getElementById("overlay");
    overlay.style.width = "0";
    overlay.style.display = "none"; // Add this line
  }
  
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });  



  let currentReviewIndex = 0;
  const reviewItems = document.querySelectorAll('.review-item');

  function showReview(index) {
      // Hide all review items
      reviewItems.forEach(item => {
          item.style.display = 'none';
      });

      // Show the selected review
      reviewItems[index].style.display = 'block';
  }

  function nextReview() {
      currentReviewIndex = (currentReviewIndex + 1) % reviewItems.length;
      showReview(currentReviewIndex);
  }

  // Show the initial review
  showReview(currentReviewIndex);

  // Auto-advance the slideshow every 5 seconds
  setInterval(nextReview, 5000);



  // Initialize and display the map
  function initMap() {
    // Define the company's location
    var companyLocation = { lat: 26.24689, lng: 92.04584  }; // Replace with your company's latitude and longitude

    // Create a map object centered at the company's location
    var map = new google.maps.Map(document.getElementById('map'), {
        center: companyLocation,
        zoom: 15, // Adjust the zoom level as needed
    });

    // Create a marker for the company's location
    var marker = new google.maps.Marker({
        position: companyLocation,
        map: map,
        title: 'Our Company Location', // Tooltip text for the marker
    });
}  