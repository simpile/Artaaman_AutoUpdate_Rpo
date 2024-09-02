
/* -------------------------------------------------------------------------- */
/*                                  GLightbox                                 */
/* -------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
    var lightboxDescription = GLightbox({
        selector: 'glightbox',
        touchNavigation: false, // غیرفعال کردن پیمایش لمسی داخلی
        loop: true,
        // closeOnOutsideClick: false, // بسته نشود با کلیک خارج
        onOpen: function() {
            const lightboxContainer = document.querySelector('#glightbox-body');

            if (lightboxContainer) {
                // اضافه کردن Hammer.js برای شناسایی حرکات Swipe
                var hammer = new Hammer(lightboxContainer);

                // تنظیم حرکات Swipe
                hammer.on('swipeleft', function(event) {
                    event.preventDefault(); // جلوگیری از بسته شدن GLightbox
                    lightboxDescription.nextSlide(); // پیمایش به اسلاید بعدی
                });

                hammer.on('swiperight', function(event) {
                    event.preventDefault(); // جلوگیری از بسته شدن GLightbox
                    lightboxDescription.prevSlide(); // پیمایش به اسلاید قبلی
                });

          
            }
        }
    });
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