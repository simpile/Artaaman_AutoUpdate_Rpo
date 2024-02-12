var iconiFy = document.createElement('script');  
iconiFy.setAttribute('src','https://code.iconify.design/2/2.1.0/iconify.min.js');
document.head.appendChild(iconiFy)


/* -------------------------------------------------------------------------- */
/*                                AOS-ANIMATION                               */
/* -------------------------------------------------------------------------- */
AOS.init({
  // disable: "mobile",
  duration: 800,
  anchorPlacement: "center-bottom",
});


/* -------------------------------------------------------------------------- */
/*                                  NAVBAR                                  */
/* -------------------------------------------------------------------------- */

// TOGGLE NAVBAR

const navbarItems = document.getElementById("myNavbar-contents");
const hamburger = document.querySelector(".iconify");
const closeIcn = document.querySelector(".close");
navbarItems.style.display = "none";
closeIcn.style.display = "none";
hamburger.style.display = "block";

function toggleNav() {
  // console.log("Before:", navbarItems.style.display, hamburger.style.display, closeIcn.style.display);
  navbarItems.style.display = (navbarItems.style.display === "none") ? "block" : "none";
  const isNavbarHidden = navbarItems.style.display === "none";
  hamburger.style.display = isNavbarHidden ? "block" : "none";
  closeIcn.style.display = isNavbarHidden ? "none" : "block";
  // console.log("After:", navbarItems.style.display, hamburger.style.display, closeIcn.style.display);
}

[hamburger, closeIcn].forEach(btn => {
  btn.addEventListener("click", toggleNav);
});


// //  HIDE ON SCROLL
var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos || navbarItems.style.display === "block") {
    document.getElementById("myNavbar").style.top = "0";
  } else {
    document.getElementById("myNavbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}

/* -------------------------------------------------------------------------- */
/*                                  newsletter                                 */
/* -------------------------------------------------------------------------- */
function beforeSubmit() {
  const name = sanitize(document.getElementById('mySubscribe-formName').value);
  const email = sanitize(document.getElementById('mySubscribe-formEmail').value);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  document.getElementById('mySubscribe-form').addEventListener('submit', function (event) {
    event.preventDefault()
  }
  )

  // اعتبارسنجی نام
  if (!name || name.trim() === '' || !email || email.trim() === '') {
      alert('نمیتواند خالی باشد');
      
      return false;
  }
  // اعتبارسنجی نام
  if (name.trim().length < 3 ) {
      alert('نام و نام خانوادگی نمیتواند کمتر از 3 حرف باشد');
      
      return false;
  }
  if (!emailRegex.test(email)) {
    alert('لطفاً یک آدرس ایمیل معتبر وارد کنید.');
    return false;
}
  // اگر به اینجا رسیدیم، فرم اعتبارسنجی شده است
  
  
  subscribeToNewsletter();
  return true;
}

function subscribeToNewsletter() {
   const name = sanitize(document.getElementById('mySubscribe-formName').value);
   const email = sanitize(document.getElementById('mySubscribe-formEmail').value);

  fetch('/subscribe', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
  })
  .then(response => response.json())
  .then(data => {
      alert(data.message);
  })
  .catch(error => {
      console.error('Error:', error);
  });
}


      /* -------------------------------------------------------------------------- */
      /*                              SUPPORT BTN                                   */
      /* -------------------------------------------------------------------------- */
      var mySupportBtn = document.getElementById('mySupport-btn');
      var isScrolling;
      mySupportBtn.style.display="none"
      window.addEventListener('scroll', function () {
        // Clear the timeout while the user is still scrolling
        clearTimeout(isScrolling);
      
        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(function () {
          // Check if the user has scrolled to a certain position (adjust as needed)
          if (window.scrollY > 400) {
            mySupportBtn.style.display = 'block';
          } else {
            mySupportBtn.style.display = 'none';
          }
        }, 200);
      });
      
      // modal part
      $(document).ready(function() {
        $('#mySupport-btn').click(function() {
          $('#chatModal').modal('show');
        });
      
        $('#chatForm').submit(function(event) {
          event.preventDefault(); // Prevent default form submission
      
          
        });
      });
      
      
      function validateSupportForm(event) {
        const name = sanitize(document.getElementById('mySupport-formName').value.trim());
        const email = sanitize(document.getElementById('mySupport-formEmail').value.trim());
        const phone = sanitize(document.getElementById('mySupport-formPhone').value.trim());
        const method = sanitize(document.getElementById('mySupport-formMethod').value);
        const message = sanitize(document.getElementById('mySupport-formMessage').value.trim());
      
        const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      
        // اعتبارسنجی نام
        if (!name || name.trim().length < 3) {
          alert('لطفاً نام و نام خانوادگی را با حداقل 3 حرف وارد کنید.');
          // event.preventDefault();
          return false;
        }
      
        // اعتبارسنجی ایمیل
        if (!emailRegex.test(email)) {
          alert('لطفاً یک آدرس ایمیل معتبر وارد کنید.');
          // event.preventDefault();
          return false;
        }
      
        // اعتبارسنجی شماره تماس
        const phoneRegex = /^[0-9]{11}$/;
        if (!phoneRegex.test(phone)) {
          alert('لطفاً یک شماره تماس معتبر وارد کنید.');
          // event.preventDefault();
          return false;
        }
      
        // اعتبارسنجی روش ارتباط
        if (method === 'default') {
          alert('لطفاً یک روش ارتباط را انتخاب کنید.');
          // event.preventDefault();
          return false;
        }
      
        // اعتبارسنجی پیغام
      
        const minLength = 10;
        const maxLength = 1000;
        const disallowedCharacters = ['<', '>', '"', "'", ' '];
      
        if (message.trim().length < minLength) {
          alert('لطفاً پیام خود را با حداقل ' + minLength + ' کاراکتر وارد کنید.');
          return false;
        }
      
        if (message.trim().length > maxLength) {
          alert('لطفاً پیام خود را با حداکثر ' + maxLength + ' کاراکتر وارد کنید.');
          return false;
        }
      
         const words = message.split(' ');
        for (const word of words) {
          if (disallowedCharacters.some(character => word.includes(character))) {
            alert('لطفاً از کاراکتر غیرمجاز ' + character + ' در پیام خود استفاده نکنید.');
            return false;
          }
        }
      
        
      
        // ارسال فرم
        supportMsg({ name, email, phone, method, message });
      
        // جلوگیری از تغییر آدرس صفحه
        event.preventDefault();
        event.stopPropagation();
      
        location.href = location.href;
      
        return true;
      }
      
      function supportMsg(data) {
        const name = sanitize(data.name);
        const email = sanitize(data.email);
        const phone = sanitize(data.phone);
        const method = sanitize(data.method);
        const message = sanitize(data.message);
      
        fetch('/support', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, phone, method, message }),
        })
          .then(response => response.json())
          .then(data => {
            alert(data.message);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }
      
      function sanitize(string) {
        // حذف کاراکترهای خطرناک
        return string.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;').replace(/ /g, '&nbsp;');
      }
      