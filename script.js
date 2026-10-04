/* =========================================
   BOOK OPENING
========================================= */

const openBook = document.getElementById("openBook");
const cover = document.getElementById("cover");


openBook.addEventListener("click", () => {

    cover.classList.add("opened");

});


/* =========================================
   CHAPTERS
========================================= */

const chapterButtons = document.querySelectorAll(".chapter");

const contentsPage = document.getElementById("contentsPage");

const chapterPages = document.querySelectorAll(".chapter-content");

const backButtons = document.querySelectorAll(".back-button");


/* =========================================
   OPEN A CHAPTER
========================================= */

chapterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const pageName = button.dataset.page;

        const selectedPage =
            document.getElementById(pageName);


        if (!selectedPage) return;


        /* Hide contents */

        contentsPage.style.display = "none";


        /* Hide every chapter */

        chapterPages.forEach((page) => {

            page.classList.remove("active");

        });


        /* Show selected chapter */

        selectedPage.classList.add("active");

    });

});


/* =========================================
   BACK TO CONTENTS
========================================= */

backButtons.forEach((button) => {

    button.addEventListener("click", () => {

        /* Hide chapters */

        chapterPages.forEach((page) => {

            page.classList.remove("active");

        });


        /* Show contents */

        contentsPage.style.display = "flex";

    });

});


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        chapterPages.forEach((page) => {

            page.classList.remove("active");

        });

        contentsPage.style.display = "flex";

    }

});