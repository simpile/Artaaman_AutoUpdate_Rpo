document.write(
 `
 <nav class="myNavbar">
 <div class="mainWrapper">
   <a href="/" id="myNavbar-logo">
     <svg xmlns="http://www.w3.org/2000/svg" width="37.545" height="55.522" viewBox="0 0 37.545 55.522">
       <g id="Group_1" data-name="Group 1" transform="translate(-297.439 -21.708)">
         <circle id="Ellipse_4" data-name="Ellipse 4" cx="5.581" cy="5.581" r="5.581"
           transform="translate(319.603 21.708)" fill="#fff" />
         <g id="Group_16" data-name="Group 16">
           <path id="Path_22" data-name="Path 22"
             d="M330.765,49.806c0-8.474-1.625-17.274-14.554-17.274-5.727,0-11.5,3.307-13.725,8.057a22.724,22.724,0,0,1,11.3-2.182c7.423.5,9.139,5.373,9.322,8.946l-.075,14.677a8.026,8.026,0,0,1-.437,2.446,10.681,10.681,0,0,1-10.221,7.076c-4.227.1-8.594-3.69-8.292-9.668.175-3.461,2.02-6.2,5.561-9.086A39.032,39.032,0,0,1,321.4,46.073c-6.666.143-13.105,2.364-16.786,5.147a17.5,17.5,0,0,0-7.173,13.867c0,6.115,4.368,12.143,12.929,12.143A15.747,15.747,0,0,0,323.3,70.94l-.074,6.277h11.761c-.188-1.031-4.261-3.648-4.261-3.648Z"
             fill="#fff" />
         </g>
       </g>
     </svg>
   </a>
   <button onclick="openNav()">
     <!-- <i class="iconify" data-icon="bx:bx-menu" data-width="30" data-height="30"></i> -->
     <svg class="iconify" xmlns="http://www.w3.org/2000/svg" style="vertical-align: -0.125em;" width="30" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>
   </button>
 </div>
</nav>
<div class="myNavbar-contents" id="myNavbar-contents">
<ul>
  <li class="myNavbar-item">
    <a href="/">
      <!-- <span class="iconify" data-icon="carbon:home" data-width="30" data-height="25"></span> -->
      <svg class="iconify" xmlns="http://www.w3.org/2000/svg" style="vertical-align: -0.125em;" width="30" height="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428ZM18 26h-4v-8h4Zm2 0v-8a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26Z"/></svg>     
          <p>خانه</p>
    </a>
  </li>
  <li class="myNavbar-item">
  <a disabled href="#"  >
  <!-- <span class="iconify" data-icon="bytesize:cart" data-width="25" ></span> -->
  <svg class="iconify" xmlns="http://www.w3.org/2000/svg" width="25" height="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M6 6h24l-3 13H9m18 4H10L5 2H2"/><circle cx="25" cy="27" r="2"/><circle cx="12" cy="27" r="2"/></g></svg>
  
    <p> (به زودی)فروشگاه<span style="color:red">*</span></p>
  </a>
</li>  
  <li class="myNavbar-item">
    <a href="/gallery">
      <!-- <span class="iconify" data-width="20" data-icon="grommet-icons:gallery"></span>        -->
      <svg class="iconify" xmlns="http://www.w3.org/2000/svg" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M1 1h18v18H1V1Zm4 18v4h18V5.97h-4M6 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2ZM2 18l5-6l3 3l4-5l5 6"/></svg>
         <p>گالری</p>
    </a>
    <li class="myNavbar-item">
      <a href="/news">
        <!-- <span class="iconify" data-icon="emojione-monotone:rolled-up-newspaper" data-width="28"
          data-height="30"></span> -->
          <svg class="iconify" xmlns="http://www.w3.org/2000/svg" width="28" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path fill="currentColor" d="M61.699 46.101a.813.813 0 0 0-.141-.113c-1.489-1.199-14.357-11.592-21.064-17.674c.218-.64.141-.904.141-.904l-6.374-6.375s.088.224-.079.787C28.029 14.849 19.118 3.815 18.014 2.443c.011.016.015.038.023.055c-.042-.071-.083-.142-.14-.197c-1.203-1.203-5.67 1.313-9.978 5.621C3.612 12.229 1.097 16.696 2.3 17.9a1 1 0 0 0 .201.14c-.019-.011-.042-.015-.061-.026c1.373 1.107 12.411 10.021 19.382 16.173c-.567.168-.789.073-.789.073l6.374 6.376s.258.092.911-.133c6.084 6.707 16.468 19.566 17.668 21.057c.034.049.072.096.115.141c.203.203.5.301.874.301c1.836 0 5.525-2.342 9.104-5.92c4.308-4.309 6.823-8.777 5.62-9.981M9.399 7.863c1.652-1.651 3.34-2.639 3.772-2.207a.406.406 0 0 1 .103.29c-.487-.163-1.72.567-2.906 1.754c-1.3 1.3-2.053 2.655-1.683 3.023c.157.159.494.111.931-.095c-1.14.888-2.109 1.318-2.423 1.005c-.432-.43.557-2.118 2.206-3.77m-5.062 8c-.361-.361-.249-1.135.23-2.155a.598.598 0 0 0 .156.397c.677.677 3.326-.874 5.918-3.462c2.591-2.591 4.14-5.241 3.462-5.918c-.256-.256-.794-.194-1.505.123c2.018-1.434 3.668-2.069 4.246-1.492c.903.904-1.164 4.437-4.617 7.89c-3.454 3.454-6.988 5.521-7.89 4.617m10.919-2.386l-.396.401c-.469.467-.939.917-1.414 1.349l14.486 14.484c-.6.576-1.146 1.075-1.652 1.515l-15.416-13.84c-.71.542-1.417 1.04-2.109 1.487l15.541 13.951c-.244.176-.459.315-.671.453c-5.074-4.514-12.585-10.692-16.979-14.271c2.352-1.236 4.922-3.365 6.959-5.403c.863-.864 3.799-3.911 5.397-6.961c3.469 4.262 9.71 11.852 14.271 16.979c-.092.142-.17.272-.278.429L19.224 8.712a35.437 35.437 0 0 1-1.545 2.045l13.739 15.304a45.278 45.278 0 0 1-1.707 1.871L15.256 13.477m39.498 41.277c-3.396 3.396-6.345 5.11-7.536 5.343c-1.659-2.058-11.202-13.853-17.176-20.484c1.194-.773 2.868-2.107 5.165-4.404a48.086 48.086 0 0 0 2.56-2.75L56.991 51.16l1.636-1.922l-19.303-18.774c.108-.156.188-.288.278-.43c6.533 5.885 18.075 15.23 20.498 17.186c-.219 1.071-1.835 4.023-5.346 7.534"/><path fill="currentColor" d="M32.428 41.338c5.558 6.359 12.84 15.326 15.017 18.02c.443-.162 1.166-.5 2.164-1.154c1.496-.979 3.119-2.328 4.693-3.903L37.021 37.019a101.143 101.143 0 0 1-4.593 4.319"/></svg>
        <p>اخبار و مقالات</p>
      </a>
    </li>
  </li>
  <li class="myNavbar-item">
    <a href="/contact">
      <!-- <span class="iconify" data-icon="clarity:phone-handset-line" data-width="25" data-height="30"></span> -->
      <svg class="iconify" xmlns="http://www.w3.org/2000/svg" width="25" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path fill="currentColor" d="M27.73 35.44a4.72 4.72 0 0 1-1-.11a33.91 33.91 0 0 1-16.62-8.75a32.71 32.71 0 0 1-9-16.25a4.58 4.58 0 0 1 1.35-4.28l4-3.85A2 2 0 0 1 8 1.66a2 2 0 0 1 1.45.87l5 7.39a1.6 1.6 0 0 1-.11 1.9l-2.51 3A18.94 18.94 0 0 0 16 20.71a19.26 19.26 0 0 0 6.07 4.09l3.11-2.47a1.64 1.64 0 0 1 1.86-.12l7.55 4.88A2 2 0 0 1 35 30.2l-3.9 3.86a4.74 4.74 0 0 1-3.37 1.38ZM7.84 3.64l-4 3.85a2.54 2.54 0 0 0-.75 2.4a30.7 30.7 0 0 0 8.41 15.26a31.9 31.9 0 0 0 15.64 8.23a2.75 2.75 0 0 0 2.5-.74l3.9-3.86l-7.29-4.71l-3.34 2.66a1 1 0 0 1-.92.17a20.06 20.06 0 0 1-7.36-4.75a19.49 19.49 0 0 1-4.87-7.2A1 1 0 0 1 10 14l2.7-3.23Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="none" d="M0 0h36v36H0z"/></svg>
      <p>تماس با ما</p>
    </a>
  </li>
  <li class="myNavbar-item">
    <a href="/about">
      <!-- <span class="iconify" data-icon="clarity:info-circle-line" data-width="45" data-height="30"></span> -->
      <svg class="iconify" xmlns="http://www.w3.org/2000/svg" width="45" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><circle cx="17.93" cy="11.9" r="1.4" fill="currentColor" class="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M21 23h-2v-8h-3a1 1 0 0 0 0 2h1v6h-2a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2Z" class="clr-i-outline clr-i-outline-path-2"/><path fill="currentColor" d="M18 6a12 12 0 1 0 12 12A12 12 0 0 0 18 6Zm0 22a10 10 0 1 1 10-10a10 10 0 0 1-10 10Z" class="clr-i-outline clr-i-outline-path-3"/><path fill="none" d="M0 0h36v36H0z"/></svg>
      <p>درباره‌ی ما</p>
    </a>
  </li>
 
 

</ul>
</div>


 `
  );

  