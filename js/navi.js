
/* for scroll spying of navbar */
$(document).ready(function() {
    $("body").scrollspy({target: "#navbar", offset: 50});
});

/* for sticky navbar on the top */
$(document).ready(function() {
    var navbar = $("#navbar-dynamic");
    function scroll() {
        var theTop = navbar.offset().top;

        if ($(window).scrollTop() >= theTop) {
            $("#navbar").addClass("navbar-fixed-top");
            $("#fixed-top").addClass("navbar-padding");
            $("#nav-right").addClass("navbar-right-margin");
            //console.log("fix: " + theTop + " " + $(window).scrollTop());

        } else {
            $("#navbar").removeClass("navbar-fixed-top");
            $("#fixed-top").removeClass("navbar-padding");
            $("#nav-right").removeClass("navbar-right-margin");
        }
    }
    document.onscroll = scroll;
});


/* for loading the home page text after finish loading the whole site */
$(window).load(function() {
     $("home").hide();
});


