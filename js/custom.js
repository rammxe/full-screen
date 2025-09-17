$(function () {
  // 각 section의 시작 위치(top 좌표) 저장
  let con01 = $("#con01").offset().top;
  let con02 = $("#con02").offset().top;
  let con03 = $("#con03").offset().top;
  let con04 = $("#con04").offset().top;

  console.log(con01, con02, con03, con04); // 확인용 로그

  // 스크롤 이벤트 실행
  $(window).on("scroll", function () {
    // 현재 스크롤 위치
    let scroll = $(this).scrollTop();
    console.log(scroll); // 확인용 로그

    // 스크롤이 con02 이상 내려가면 헤더에 .on 클래스 추가 (fixed로 바뀌는 효과용)
    if (scroll >= con02) {
      $("header").addClass("on");
    }

    // 섹션 con01 영역일 때
    if (scroll >= con01 && scroll < con02) {
      $("#navi li").removeClass("on"); // 전체 내비에서 .on 제거
      $("#navi li").eq(0).addClass("on"); // 첫 번째 내비에만 .on 추가

      // 섹션 con02 영역일 때
    } else if (scroll >= con02 && scroll < con03) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(1).addClass("on");
      $("#con02").addClass("on"); // con02에 .on 추가 (애니메이션 등 효과용)

      // 섹션 con03 영역일 때
    } else if (scroll >= con03 && scroll < con04) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(2).addClass("on");
      $("#con03").addClass("on"); // con03에 .on 추가

      // 나머지: con04 이상일 때
    } else {
      $("#navi li").removeClass("on");
      $("#navi li").eq(3).addClass("on");
    }
  });
  $("header li").on("click", function () {
    let i = $(this).index();
    $("#navi li").removeClass("on");
    $("#navi li").eq(i).addClass("on");
    let target = $("#container section").eq(i).offset().top;
    $("html, body").animate({ scrollTop: target }, 800);
    // console.log(target);
  });

  $("#navi li").on("click", function () {
    let i = $(this).index();
    $("#navi li").removeClass("on");
    $("#navi li").eq(i).addClass("on");
    let target = $("section").eq(i).offset().top;
    $("html, body").animate({ scrollTop: target });
  });
});
