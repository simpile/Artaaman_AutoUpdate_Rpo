document.write(`
<section class="mySubscribe container ">
  <div class="mySubscribe-formWrap">
    <h3 class="d-flex align-items-center mb-4"  data-aos="fade-left">
     <img src="/images/envelope-outline.svg" alt="Image"class="img-fluid">
  عضویت در خبرنامه
         </h3>
    <form id="mySubscribe-form" onsubmit="return beforeSubmit()" class="row  align-items-center mb-4">
      <div class="mySubscribe-formItem" data-aos="fade-up" data-aos-delay="100">
        <input id="mySubscribe-formName" type="text" class="form-control" placeholder="نام خود را وارد کنید">
      </div>
      <div class="mySubscribe-formItem"data-aos="fade-up" data-aos-delay="300">
        <input id="mySubscribe-formEmail" type="email" class="form-control" placeholder="ایمیل خود را وارد کنید">
      </div>
    
        <button type="submit" class="myBtn myBtn-greenN"data-aos="fade-up" data-aos-delay="400">
          <span class="iconify" data-icon="fa:paper-plane"></span>
        </button>
    
    </form>
    </div>

</section>
`);