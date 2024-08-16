
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

  // console.log(call)

         
  // function pagination()  {
  //   var images = document.querySelectorAll(".glightbox");
  //   let imgAr = Array.from(images);
  //   let slideImg= imgAr.slice(5)

  //  slideImg.map((i) => i.style.display="none")
  // }
  // function mapActive(){
  //   console.log("hither")
  //     var mapBtn=document.getElementById("map");
  //     mapBtn.classList.add("active")
  //   }

//     const Pagination=()=>{
//       const allImages =document.querySelectorAll(".myFilterGallery img")
//         for(var i=0; i<=allImages.length; i++){
// if(i>10){
// allImages[i].setAttribute("style", "display:none;")


// }
//         }
     
//     }
//     Pagination();

    // preloader
// var images = document.querySelectorAll("img");
// console.log(images)
//   images.onload=function(){
//     for(let img of images){
// img.style.backgroundColor="red"}
// }
    // image.onload = function(){ document.querySelectorAll("img").style.backgroundColor = "red"; }
 
    //   var images = document.querySelectorAll('img');
    // for(let img of images){if(!img.complete && img.naturalWidth == 0){
    //     img.style.backgroundColor='red';
    //   }
      
    //   }

// let sitemap = document.getElementById('sitemap')

// const anchors = document.querySelectorAll('a.gallery_product'); // Select target elements

// anchors.forEach(anchor => {
//   const dataString = anchor.getAttribute('data-glightbox'); // Extract data-glightbox attribute
//   const match = dataString.match(/title:([^;]*); description:([^;]*)/); // Extract title and description

//   if (match) {
//     const title = match[1].trim();
//     const description = match[2].trim();
//     const imageUrl = anchor.querySelector('img').src; // Get image URL

//     // Get base URL of the current website
//     const baseUrl = "https://artaaman.com"; // or use a more robust method to get the base URL

//     // Create XML structure
//     const xmlString = `
//       <image:image>
//         <image:loc>${baseUrl}/${imageUrl.split('/').slice(3).join('/')}</image:loc>
//         <image:title>${title}</image:title>
//         <image:caption>${description}</image:caption>
//       </image:image>
//     `;
//     // Log or use the XML string as needed
//     console.log(xmlString);
//     sitemap.innerText += xmlString ; // Add newline for better readability

//     // alert(xmlString)
//   }
// });
