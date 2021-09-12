$(document).ready(function() {
    $(".imageDes").click(function() {
        $(".imageDes").toggle();
        $(".descriptionDes").toggle();
    });

    $(".descriptionDes").click(function() {
        $(".descriptionDes").toggle();
        $(".imageDes").toggle();
    });
    $(".imageDev").click(function() {
        $(".imageDev").toggle();
        $(".descriptionDev").toggle();
    });

    $(".descriptionDev").click(function() {
        $(".descriptionDev").toggle();
        $(".imageDev").toggle();
    });
    $(".imagePro").click(function() {
        $(".imagePro").toggle();
        $(".descriptionPro").toggle();
    });

    $(".descriptionPro").click(function() {
        $(".descriptionPro").toggle();
        $(".imagePro").toggle();
    });

  /* contact us */

    $("#submit").click(function() {
        var identity = $("#name").val();
        var email = $("#email").val();
        var message = $("#texrareaFormControl").val();

        if(identity.length === 0 || email.length === 0 || message.length === 0) {
            alert("Fill in the approptiate information");
        }
        else {
            alert("Hello! " + identity + ", Message from " + email+ " received");

        }
    });


    $("#imgOne").hover(function() {
        $(this).css("opacity","0.5");
    },function() {
        $(this).css("opacity","unset");
    });
    $("#imgTwo").hover(function() {
        $(this).css("opacity","0.5");
    },function() {
        $(this).css("opacity","unset");
    });
    $("#imgThree").hover(function() {
        $(this).css("opacity","0.5");
    },function() {
        $(this).css("opacity","unset");
    });
    $("#imgFour").hover(function() {
        $(this).css("opacity","0.5");
    },function() {
        $(this).css("opacity","unset");
    });
    $("#imgFive").hover(function() {
        $(this).css("opacity","0.5");
    },function() {
        $(this).css("opacity","unset");
    });
    $("#imgSix").hover(function() {
        $(this).css("opacity","0.5");
    },function() {
        $(this).css("opacity","unset");
    });
    $("#imgSeven").hover(function() {
        $(this).css("opacity","0.5");
    },function() {
        $(this).css("opacity","unset");
    });
    $("#imgEight").hover(function() {
        $(this).css("opacity","0.5");
    },function() {
        $(this).css("opacity","unset");
    });
});
