
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
// مخفی کردن همه تصاویر قبل از بارگذاری
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.filter');
  // images.forEach(image => {
  //   image.style.display = 'none'; // مخفی کردن تصاویر
  // });

  const skeletonContainer = document.getElementById('skeleton-container');
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
      <div class="skeleton-image"></div>
      <div class="skeleton-text"></div>
      <div class="skeleton-text short"></div>
    `;
    skeletonContainer.appendChild(skeletonLoader);
  }

  // نمایش اسکلتون
  skeletonContainer.style.display = 'flex';

  setTimeout(() => {
    // مخفی کردن اسکلتون
    skeletonContainer.style.display = 'none';

    // نمایش تصاویر
    images.forEach(image => {
      image.style.display = 'block'; // نمایش تصاویر
    });
  }, 500); // مدت زمان بارگذاری به میلی‌ثانیه
});
