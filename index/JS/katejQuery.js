

$("#modal-open").click(function () {
    $(".modal-back").fadeIn();
  });

$(".modal-close").click(function () {
    $(".modal-back").fadeOut();
  });
console.log($(".movie-container"))



$(document).ready(function() {
    $("#hor").change(function() {
        if ($(this).prop("checked")) {
            for (let i = 1; i < 11; i++) {
                $(".movie-container").append(`<img src='../../resources/image/공포/horror${i}.jpg'>`);
            }
        } else {
            $(".movie-container img[src*='공포'").remove(); // 체크 해제 시 이미지 삭제
        }
    });
});
$(document).ready(function() {
    $("#spo").change(function() {
        if ($(this).prop("checked")) {
            for (let i = 1; i < 11; i++) {
                $(".movie-container").append(`<img src='../../resources/image/스포츠/spo${i}.jpg'>`);
            }
        } else {
            $(".movie-container img[src*='스포츠'").remove(); // 체크 해제 시 이미지 삭제
        }
    });
});
$(document).ready(function() {
    $("#cri-and-act").change(function() {
        if ($(this).prop("checked")) {
            for (let i = 1; i <7; i++) {
                $(".movie-container").append(`<img src='../../resources/image/액션·범죄/cri-and-act${i}.jpg'>`);
            }
        } else {
            $(".movie-container img[src*='액션·범죄'").remove(); // 체크 해제 시 이미지 삭제
        }
    });
});
$(document).ready(function() {
    $("#medy").change(function() {
        if ($(this).prop("checked")) {
            for (let i = 1; i < 11; i++) {
                $(".movie-container").append(`<img src='../../resources/image/코미디/medy${i}.jpg'>`);
            }
        } else {
            $(".movie-container img[src*='코미디'").remove(); // 체크 해제 시 이미지 삭제
        }
    });
});
for (let i = 1; i < 11; i++) {
    $(".movie-container").append(`<img src='../../resources/image/공포/horror${i}.jpg'>`);
}
for(let i=1; i<11; i++){
    $(".movie-container").append( `<img src='../../resources/image/스포츠/spo${i}.jpg'>`)
}

for(let i=1; i<7; i++){
    $(".movie-container").append( `<img src='../../resources/image/액션·범죄/cri-and-act${i}.jpg'>`)
}
for(let i=1; i<11; i++){
    $(".movie-container").append( `<img src='../../resources/image/코미디/medy${i}.jpg'>`)
}