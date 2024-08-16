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

function openEditModal(id, title, description, category, src = '') {
    const fields = { editImageId: id, editTitle: title, editDescription: description, editCategory: category };
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
}

/* -------------------------------------------------------------------------- */
/*                      CK-EDITORS FOR ARTICLE TEXTAREAS                      */
/* -------------------------------------------------------------------------- */
const editors = ['#desc', '#editedDesc'];

editors.forEach(selector => {
    ClassicEditor
        .create(document.querySelector(selector))
        .catch(error => {
            console.error(error);
        });
});