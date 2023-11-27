$("#modal-kate-open").click(function () {
  $(".modal-kate-back").fadeIn();
});

$(".modal-kate-close").click(function () {
  $(".modal-kate-back").fadeOut();
});
// console.log($(".movie-container"));
const movieUrls = [
  "../../resources/image/공포/horror1.jpg",
  "../../resources/image/공포/horror2.jpg",
  "../../resources/image/공포/horror3.jpg",
  "../../resources/image/공포/horror4.jpg",
  "../../resources/image/공포/horror5.jpg",
  "../../resources/image/공포/horror6.jpg",
  "../../resources/image/공포/horror7.jpg",
  "../../resources/image/공포/horror8.jpg",
  "../../resources/image/공포/horror9.jpg",
  "../../resources/image/공포/horror10.jpg",
  "../../resources/image/스포츠/spo1.jpg",
  "../../resources/image/스포츠/spo2.jpg",
  "../../resources/image/스포츠/spo3.jpg",
  "../../resources/image/스포츠/spo4.jpg",
  "../../resources/image/스포츠/spo5.jpg",
  "../../resources/image/스포츠/spo6.jpg",
  "../../resources/image/스포츠/spo7.jpg",
  "../../resources/image/스포츠/spo8.jpg",
  "../../resources/image/스포츠/spo9.jpg",
  "../../resources/image/스포츠/spo10.jpg",
  "../../resources/image/액션·범죄/cri-and-act1.jpg",
  "../../resources/image/액션·범죄/cri-and-act2.jpg",
  "../../resources/image/액션·범죄/cri-and-act3.jpg",
  "../../resources/image/액션·범죄/cri-and-act4.jpg",
  "../../resources/image/액션·범죄/cri-and-act5.jpg",
  "../../resources/image/액션·범죄/cri-and-act6.jpg",
  // "../../resources/image/액션·범죄/cri-and-act7.jpg"
];
let horMovies = [
    "../../resources/image/공포/horror1.jpg",
    "../../resources/image/공포/horror2.jpg",
    "../../resources/image/공포/horror3.jpg",
    "../../resources/image/공포/horror4.jpg",
    "../../resources/image/공포/horror5.jpg",
    "../../resources/image/공포/horror6.jpg",
    "../../resources/image/공포/horror7.jpg",
    "../../resources/image/공포/horror8.jpg",
    "../../resources/image/공포/horror9.jpg",
    "../../resources/image/공포/horror10.jpg",
]
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    // console.log(array[4])
  }
  return array;
}

const shuffledUrls = shuffleArray(movieUrls);

// Append all shuffled images to .movie-container
shuffledUrls.forEach((url) => {
  $(".movie-container").append(`<img src='${url}'>`);
});

$(document).ready(function () {
  $("#hor").change(function () {
    if ($(this).prop("checked")) {
      for (let i = 1; i < 11; i++) {
        $(".movie-container").append(
          `<img src='../../resources/image/공포/horror${i}.jpg'>`
        );
      }
    } else {
      $(".movie-container img[src*='공포'").remove(); // 체크 해제 시 이미지 삭제
    }
  });
});
$(document).ready(function () {
  $("#spo").change(function () {
    if ($(this).prop("checked")) {
      for (let i = 1; i < 11; i++) {
        $(".movie-container").append(
          `<img src='../../resources/image/스포츠/spo${i}.jpg'>`
        );
      }
    } else {
      $(".movie-container img[src*='스포츠'").remove(); // 체크 해제 시 이미지 삭제
    }
  });
});
$(document).ready(function () {
  $("#cri-and-act").change(function () {
    if ($(this).prop("checked")) {
      for (let i = 1; i < 7; i++) {
        $(".movie-container").append(
          `<img src='../../resources/image/액션·범죄/cri-and-act${i}.jpg'>`
        );
      }
    } else {
      $(".movie-container img[src*='액션·범죄'").remove(); // 체크 해제 시 이미지 삭제
    }
  });
});
$(document).ready(function () {
  $("#medy").change(function () {
    if ($(this).prop("checked")) {
      for (let i = 1; i < 11; i++) {
        $(".movie-container").append(
          `<img src='../../resources/image/코미디/medy${i}.jpg'>`
        );
      }
    } else {
      $(".movie-container img[src*='코미디'").remove(); // 체크 해제 시 이미지 삭제
    }
  });
});

