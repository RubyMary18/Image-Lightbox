const img = document.querySelectorAll('.image-gallery li'),
      lightboxContainer = document.querySelector('.lightbox-container'),
      closeBtn = document.querySelector('.close'),
      prevBtn = document.querySelector('.slider-arrow .prev'),
      nextBtn = document.querySelector('.slider-arrow .next'),
      prevImg = document.querySelector('.img-box figure img'),
      imgNumber = document.querySelector('.first');

window.onload = () => {
    for (let i = 0; i < img.length; i++) {

        let newIndex = i;

        img[i].onclick = () => {

            lightboxContainer.classList.add('show');
            preview(newIndex);

            prevBtn.onclick = prevClick;
            nextBtn.onclick = nextClick;

            function prevClick() {
                if (newIndex > 0) {
                            newIndex--;
                            preview(newIndex);
                        } else {
                            newIndex = img.length - 1;
                            preview(newIndex);
                        }
            }

            function nextClick() {
                if (newIndex < img.length - 1) {
                            newIndex++;
                            preview(newIndex);
                        } else {
                            newIndex = 0;
                            preview(newIndex);
                        }
            }

        }
        function preview(newIndex) {
            imgNumber.innerHTML = newIndex + 1;
            let currentImgUrl = img[newIndex].querySelector('img').src;
            prevImg.src = currentImgUrl;
        }
    }

    closeBtn.onclick = () => {
        lightboxContainer.classList.remove('show');
    }
}