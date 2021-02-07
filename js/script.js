window.addEventListener('load', function () {
 let btnActive = document.querySelectorAll('.work-list-button');
 /* console.log(btnActive); */

  for (let i = 0; i < btnActive.length; i++) {
      btnActive[i].addEventListener('click', function () {
        this.classList.toggle("work-list-button-active");
        this.classList.toggle("work-list-button-active");

      })
  }


})