document.write(
    
    `
    
     <section class="mySupport" id="hiddenElement">
    <a class="mySupport-btnFloat" id="mySupport-btn">
      <span class="iconify" data-width="50" data-icon="pajamas:question"></span>
    </a>
    <div class="modal text-right fade" id="chatModal" tabindex="-1" role="dialog" aria-labelledby="chatModalLabel"
      aria-hidden="true">
       <div class="modal-dialog " role="document">
        <div class="modal-content ">
          <div class="modal-header">
             
              <p class="mt-2 chat-bubble">
سلام؛  لطفاً فرم زیر را پر کنید تا از تیم پشتیبانی با شما تماس گرفته شود.              </p>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-right">
          
             
              <form onsubmit="return validateSupportForm(event) " id="supportForm">
                <div class="row">
                  <div class="form-group col-6">
                    <label for="name">نام و نام خانوادگی</label>
                    <input type="text" class="form-control" id="mySupport-formName" name="name" placeholder="نام خود را وارد کنید">
                  </div>
                  <div class="form-group col-6">
                    <label for="email">آدرس ایمیل</label>
                    <input type="email" class="form-control" id="mySupport-formEmail" name="email" placeholder="ایمیل خود را وارد کنید">
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label for="phone">شماره تماس</label>
                    <input type="text" class="form-control" id="mySupport-formPhone" name="phone"
                      placeholder="شماره تماس خود را وارد کنید">
                  </div>
                  <div class="form-group col-6">
                    <label for="contact-method">روش ارتباط</label>
                    <select class="form-control" id="mySupport-formMethod" name="contact-method">
                      <option value="default">روش ارتباط</option>
                      <option value="email">ایمیل</option>
                      <option value="message">پیامک</option>
                      <option value="text">شبکه های مجازی</option>
                      <option value="call">تماس تلفنی</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="message">پیغام</label>
                  <textarea class="form-control" id="mySupport-formMessage" name="message" rows="5"
                    placeholder="پیغام خود را وارد کنید"></textarea>
                </div>
                <button type="submit"  class="myBtn myBtn-greenN btn-primary w-100" >ارسال</button>
              </form>
              <!--  -->
              
    
          <div class="row m-auto modal-contact-info">
            <div class="col-12 text-center">
              <p>
                
                همچنین میتوانید از طریق راههای ارتباطی زیر با ما در تماس باشید.
              </p>
            </div>
            <div class="col-6">
              
              <ul class="row list-unstyled custom-social justify-content-between ">
                <li>
                  <a title="تلگرام" target="_blank" href="https://t.me/artaaman_co">
                    <span class="iconify" data-icon="iconoir:telegram-circled" data-width="25"></span>
                  </a>
                </li>
                <li>
                  <a title="اینستاگرام" target="_blank" href="https://www.instagram.com/artaaman/">
                    <span class="iconify" data-width="25" data-icon="akar-icons:instagram-fill"></span>
                  </a>
                </li>
                <li>
                  <a title="واتساپ" target="_blank" href="https://wa.me/989909890646">
                    <span class="iconify" data-icon="ic:twotone-whatsapp" data-width="28"></span>
                  </a>
                </li>
                <li>
                  <a title="ایمیل" target="_blank" href="mailto:info@artaaman.com">
                    <span class="iconify" data-width="25" data-icon="octicon:mail-24"></span>
                  </a>
                </li>
              </ul>
            </div>
            
                <a class="col-6 contact-number d-flex justify-content-end" href="tel:09909890646">
                  <p class=" text-left">
                    
                    9909890646
                    <span>
                      <span class="iconify" data-icon="clarity:phone-handset-line" data-width="28"></span>
                    </span>
                  </p>
           
                </a>
          </div>
              <!--  -->
          </div>
          
        </div>
        </div>
      </div>
  </section>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.0.3/swiper-bundle.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
  integrity="sha512-3P8rXCuGJdNZOnUx/03c1jOTnMn3rP63nBip5gOP2qmUh5YAdVAvFZ1E+QLZZbC1rtMrQb+mah3AfYW11RUrWA=="
  crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://unpkg.com/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>

  `);