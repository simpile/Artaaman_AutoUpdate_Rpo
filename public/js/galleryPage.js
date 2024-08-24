
/* -------------------------------------------------------------------------- */
/*                                  GLightbox                                 */
/* -------------------------------------------------------------------------- */

var lightboxDescription = GLightbox({
    selector: 'glightbox',
    
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

  /* -------------------------------------------------------------------------- */
  /*                                 filter buttons                             */
  /* -------------------------------------------------------------------------- */

//   function call(id) {
//     const items = Array.from(document.getElementsByClassName("filter"));
//     items.forEach(function (item) {
//         if (id === "all") {
//             item.classList.remove('d-none');
//             item.classList.add('fadeIn', 'glightbox');
//         } else {
//             if (item.classList.contains(id)) {
//                 item.classList.remove('d-none');
//                 item.classList.add('fadeIn', 'glightbox');
//             } else {
//                 item.classList.add('d-none');
//                 item.classList.remove('fadeIn', 'glightbox');
//             }
//         }
//     });
//     // Reset fadeIn after a timeout
//     setTimeout(clean, 500);
// }

// function clean() {
//     const items = Array.from(document.getElementsByClassName("filter"));
//     items.forEach(function (item) {
//         item.classList.remove('fadeIn');
//     });
// }

/* -------------------------------------------------------------------------- */
/*                                   skleton                                  */
/* -------------------------------------------------------------------------- */
window.onload = function() {
  const skeletonContainer = document.getElementById('skeleton-container');
  const images = document.querySelectorAll('.filter');

  // تعداد تصاویر موجود
  const totalImages = images.length;

  // حداکثر تعداد تصاویر در هر صفحه
  const maxImagesPerPage = 9;

  // تعداد اسکلتون‌ها باید برابر با تعداد تصاویر در صفحه باشد
  const skeletonCount = Math.min(totalImages, maxImagesPerPage);

  // ایجاد اسکلتون‌ها به صورت داینامیک
  for (let i = 0; i < skeletonCount; i++) {
    const skeletonLoader = document.createElement('div');
    skeletonLoader.classList.add('skeleton-loader');
    skeletonLoader.innerHTML = `
      <div class="skeleton-image gallery_product col-lg-4 col-md-6 col-sm-12 filter"></div>
      <div class="skeleton-text"></div>
      <div class="skeleton-text short"></div>
    `;
    skeletonContainer.appendChild(skeletonLoader);
  }

  // مخفی کردن اسکلتون و نمایش تصاویر بعد از 2 ثانیه
  setTimeout(() => {
    // مخفی کردن اسکلتون
    skeletonContainer.style.display = 'none';

    // نمایش تصاویر
    images.forEach(image => {
      image.style.display = 'block'; // نمایش تصاویر
    });
  }, 200000); // مدت زمان بارگذاری به میلی‌ثانیه
};

// کنترل فیلتر کردن تصاویر
function call(id) {
  const items = Array.from(document.getElementsByClassName("filter"));
  const skeletonContainer = document.getElementById('skeleton-container');

  // مخفی کردن همه تصاویر
  items.forEach(item => {
    item.style.display = 'none';
  });

  // نشان دادن اسکلتون
  skeletonContainer.style.display = 'flex';

  setTimeout(() => {
    if (id === "all") {
      items.forEach(item => {
        item.style.display = 'block'; // نمایش همه تصاویر
      });
    } else {
      items.forEach(item => {
        if (item.classList.contains(id)) {
          item.style.display = 'block'; // نمایش تصاویر مربوط به کتگوری
        }
      });
    }

    // مخفی کردن اسکلتون
    skeletonContainer.style.display = 'none';
  }, 2000); // مدت زمان بارگذاری
}
