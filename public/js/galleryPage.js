
/* -------------------------------------------------------------------------- */
/*                                  GLightbox                                 */
/* -------------------------------------------------------------------------- */

// var lightboxDescription = GLightbox({
//     selector: 'glightbox',
//     touchNavigation: true,    
//   });
  
//    // Get the container element
//    var btnContainer = document.getElementById("myBtn-wrapper");
  
//    // Get all buttons with class="btn" inside the container
//    var btns = btnContainer.getElementsByClassName("btn");
   
//    // Loop through the buttons and add the active class to the current/clicked button
//    for (var i = 0; i < btns.length; i++) {
//      btns[i].addEventListener("click", function() {
//        var current = document.getElementsByClassName("active");
//        current[0].className = current[0].className.replace(" active", "");
//        this.className += " active";
//      });
//    }
var lightboxDescription = GLightbox({
    selector: 'glightbox',
    touchNavigation: false, // غیرفعال کردن پیمایش لمسی داخلی
});

// Get the container element
var btnContainer = document.getElementById("myBtn-wrapper");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// اضافه کردن قابلیت swipe به صورت دستی
let touchStartX = 0;
let touchEndX = 0;

const lightboxElements = document.querySelectorAll('.gslide');

lightboxElements.forEach((element) => {
    element.addEventListener('touchstart', function(event) {
        touchStartX = event.changedTouches[0].screenX;
    });

    element.addEventListener('touchend', function(event) {
        touchEndX = event.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            lightboxDescription.nextSlide();
        } 
        if (touchEndX > touchStartX + 50) {
            lightboxDescription.prevSlide();
        }
    }
});


  /* -------------------------------------------------------------------------- */
  /*                                 filter buttons                             */
  /* -------------------------------------------------------------------------- */

  function call(id) {
    const items = Array.from(document.getElementsByClassName("filter"));
    items.forEach(function (item) {
        if (id === "all") {
            item.classList.remove('d-none');
            item.classList.add('fadeIn', 'glightbox');
        } else {
            if (item.classList.contains(id)) {
                item.classList.remove('d-none');
                item.classList.add('fadeIn', 'glightbox');
            } else {
                item.classList.add('d-none');
                item.classList.remove('fadeIn', 'glightbox');
            }
        }
    });
    // Reset fadeIn after a timeout
    setTimeout(clean, 500);
}

function clean() {
    const items = Array.from(document.getElementsByClassName("filter"));
    items.forEach(function (item) {
        item.classList.remove('fadeIn');
    });
}

/* -------------------------------------------------------------------------- */
/*                                   skleton                                  */
/* -------------------------------------------------------------------------- */
// // مخفی کردن همه تصاویر قبل از بارگذاری
// document.addEventListener("DOMContentLoaded", function() {
//   const images = document.querySelectorAll('.filter');
//   // images.forEach(image => {
//   //   image.style.display = 'none'; // مخفی کردن تصاویر
//   // });

//   const skeletonContainer = document.getElementById('skeleton-container');
//   const totalImages = images.length;

//   // حداکثر تعداد تصاویر در هر صفحه
//   const maxImagesPerPage = 12;

//   // تعداد اسکلتون‌ها باید برابر با تعداد تصاویر در صفحه باشد
//   const skeletonCount = Math.min(totalImages, maxImagesPerPage);

//   // ایجاد اسکلتون‌ها به صورت داینامیک
//   for (let i = 0; i < skeletonCount; i++) {
//     const skeletonLoader = document.createElement('div');
//     skeletonLoader.classList.add('skeleton-loader');
//     skeletonLoader.innerHTML = `
//       <div class="skeleton-image"></div>
//       <div class="skeleton-text"></div>
//       <div class="skeleton-text short"></div>
//     `;
//     skeletonContainer.appendChild(skeletonLoader);
//   }

//   // نمایش اسکلتون
//   skeletonContainer.style.display = 'flex';

//   setTimeout(() => {
//     // مخفی کردن اسکلتون
//     skeletonContainer.style.display = 'none';

//     // نمایش تصاویر
//     images.forEach(image => {
//       image.style.display = 'block'; // نمایش تصاویر
//     });
//   }, 500); // مدت زمان بارگذاری به میلی‌ثانیه
// });
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('.filter img'); // انتخاب تصاویر
  const skeletonContainer = document.getElementById('skeleton-container');

  // حداکثر تعداد تصاویر در هر صفحه
  const maxImagesPerPage = 12;

  // تعداد اسکلتون‌ها باید برابر با تعداد تصاویر در صفحه باشد
  const skeletonCount = Math.min(images.length, maxImagesPerPage);

  // ایجاد اسکلتون‌ها به صورت داینامیک
  for (let i = 0; i < skeletonCount; i++) {
      const skeletonLoader = document.createElement('div');
      skeletonLoader.classList.add('skeleton-loader');
      skeletonLoader.innerHTML = `
          <div class="skeleton-image"></div>
          <div class="skeleton-text"></div>
          <div class="skeleton-text short"></div>
      `;
      skeletonContainer.appendChild(skeletonLoader);
  }

  // نمایش اسکلتون
  skeletonContainer.style.display = 'flex';

  // مخفی کردن اسکلتون‌ها و نمایش تصاویر وقتی بارگذاری شد
  images.forEach((image, index) => {
      const skeletonLoader = skeletonContainer.children[index]; // اسکلتون مربوط به این تصویر

      // وقتی تصویر بارگذاری شد
      image.addEventListener('load', () => {
          // مخفی کردن اسکلتون
          if (skeletonLoader) {
              skeletonLoader.style.display = 'none';
          }
          // نمایش تصویر بارگذاری شده
          image.style.display = 'block'; // نمایش تصویر
      });

      // اگر تصویر از قبل بارگذاری شده باشد
      if (image.complete) {
          skeletonLoader.style.display = 'none'; // مخفی کردن اسکلتون
          image.style.display = 'block'; // نمایش تصویر
      } else {
          // اگر تصویر بارگذاری نشود
          image.style.display = 'none'; // مخفی کردن تصویر تا بارگذاری شود
      }
  });
});