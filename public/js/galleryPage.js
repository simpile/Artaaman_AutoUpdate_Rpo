
/* -------------------------------------------------------------------------- */
/*                                GALLERY-PAGE                                */
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

  
  function call(id) {
    const items = Array.from(document.getElementsByClassName("filter"));
    items.map(function (item, index) {
      // console.log(item);
      if (id === "all") {
        item.classList.remove('d-none');
        item.classList.add('fadeIn','glightbox');
        setTimeout(clean,500);
      } else {
        const check = items[index].classList.contains(id);
        // console.log("check:"+check);
  
        if (check) {
          item.classList.remove('d-none');
          item.classList.add('fadeIn','glightbox');
        } else {
          item.classList.add('d-none');
          item.classList.remove('fadeIn','glightbox');
        }
      }
    }
    )
  }
  
  function clean() {
    const items = Array.from(document.getElementsByClassName("filter"));
    items.map(function (item, index) {
      item.classList.remove('fadeIn');
    })
  }
  window.onload=call('products');

  function checkHistory(){
    if (document.referrer === "http://localhost:3000/" ){
        window.onload=call('products');
    }
  }
  checkHistory()
