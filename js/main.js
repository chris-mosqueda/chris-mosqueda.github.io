"use strict";
$(function () {

    $(document).ready(function() {
        $(".macBook").each(function(i) {
            $(this).delay(i * 400).fadeIn(800);
        });
        $(".macBook:not(:last)").delay(500).fadeOut();

        // $("#mac2").delay(150).fadeIn("slow");
        // $("#mactext1").delay(2250).fadeIn("slow");

        var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("projSlides");
            var slideInfo = document.getElementsByClassName("slide-info");

            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n > slideInfo.length) {
                slideIndex = 1;
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < slideInfo.length; i++) {
                slideInfo[i].style.display = "none";
            }
            slides[slideIndex-1].style.display = "block";
            slideInfo[slideIndex-1].style.display = "block";
        }

        $("#nextBtn").click(function(){
           plusSlides(1);
        });
    });
});