/* -------------------------------------------------------------------------- */
/*                               NAVBAR SECTION                               */
/* -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector("#toggle-btn");
  const sidebar = document.querySelector("#sidebar");

  toggleButton.addEventListener("click", function () {
    sidebar.classList.toggle("show");
  });
});

/* -------------------------------------------------------------------------- */
/*                               CONTENT SECTION                              */
/* -------------------------------------------------------------------------- */
function showSection(sectionId) {
  $(".section").removeClass("active-section");
  $("#" + sectionId).addClass("active-section");
}

/* -------------------------------------------------------------------------- */
/*                               PAGINATION PART                              */
/* -------------------------------------------------------------------------- */
function paginateItems(sectionId, itemsPerPage) {
  const section = document.getElementById(sectionId);
  const items = section.querySelectorAll(".item");
  const paginationContainer = section.querySelector(".pagination");
  let currentPage = 1;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const showPage = (page) =>
    items.forEach((item, index) => {
      item.style.display =
        index >= (page - 1) * itemsPerPage && index < page * itemsPerPage
          ? ""
          : "none";
    });

  const createPagination = () => {
    paginationContainer.innerHTML = "";
    Array.from({ length: totalPages }, (_, i) => {
      const pageBtn = document.createElement("button");
      pageBtn.textContent = i + 1;
      pageBtn.onclick = () => {
        currentPage = i + 1;
        showPage(currentPage);
      };
      paginationContainer.appendChild(pageBtn);
    });
  };

  showPage(currentPage);
  createPagination();
}

paginateItems("articles", 6); // 6 مقاله در هر صفحه نمایش داده شود.
paginateItems("subscribers", 6); // 6 مقاله در هر صفحه نمایش داده شود.
paginateItems("images", 6); // 6 تصویر در هر صفحه نمایش داده شود.
paginateItems("messages", 6); // 6 مقاله در هر صفحه نمایش داده شود.

/* -------------------------------------------------------------------------- */
/*                 HANDLE EDITE PARTS FOR ARTICLES AND IMAGES                 */
/* -------------------------------------------------------------------------- */

function openEditImgModal(id, title, description, category,link, src = '') {
    const fields = { editImageId: id, editTitle: title, editDescription: description, editCategory: category, editLink:link };
    for (let key in fields) {
        document.getElementById(key).value = fields[key];
    }
    const preview = document.getElementById('editImagePreview');
    if (src) {
        preview.src = src;
        preview.style.display = 'block';
    } else {
        preview.style.display = 'none';
    }

    // Set the URL field with the current image URL
    document.getElementById('editImageUrl').value = src;
}
// articl
function openEditModal(button) {
  const id = button.getAttribute('data-id');
  const title = button.getAttribute('data-title');
  const desc = button.getAttribute('data-desc');
  const label = button.getAttribute('data-label');
  const alt = button.getAttribute('data-alt');
  const keywords = button.getAttribute('data-keywords');
  const subj = button.getAttribute('data-subj');

  // مقداردهی به فیلدهای مدال
  document.getElementById('editedTitle').value = title;
  document.getElementById('editedDesc').value = desc;
  document.getElementById('label').value = label;
  document.getElementById('alt').value = alt;
  document.getElementById('keywords').value = keywords;
  document.getElementById('subj').value = subj;

  // تنظیم آدرس ارسال فرم
  const form = document.getElementById('editArticleForm');
  form.action = `/editarticle/${id}`;
}

/* -------------------------------------------------------------------------- */
/*                      CK-EDITORS FOR ARTICLE TEXTAREAS                      */
/* -------------------------------------------------------------------------- */
const editors = ['#desc'];

// , '#editedDesc'

editors.forEach(selector => {
    ClassicEditor
        .create(document.querySelector(selector), {
          language: 'fa', // زبان فارسی برای راست‌چین شدن)
          } )
        .catch(error => {
            console.error(error);
        });
});
