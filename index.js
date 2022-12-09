/* eslint-disable */

let boxs = document.querySelectorAll("div");

let timer = false;

document.addEventListener("scroll", () => {
  if (!timer) {
    timer = true;
    setTimeout(() => {
      boxs.forEach((box, index) => {
        // 1 -> 0, 0 -> -1
        let ratio =
          box.getBoundingClientRect().top / box.getBoundingClientRect().height;
        // 0 -> 1, 1 -> 0
        let opacity =
          box.getBoundingClientRect().top > 0 ? 1 - ratio : 1 + ratio;

        //이벤트가 view에안보이는데 일어나는걸 막음 (투명도 떄문)
        if (opacity >= 0 && opacity <= 1) {
          if (index === 4) {
            box.style.transform = `rotate(${ratio * 1000}deg)`;
            box.style.fontSize = ratio > 0 ? `${ratio * 20 + 30}px` : "30px";
          } else if (index === 2) {
            box.style.transform =
              ratio > 0 ? `translateX(${ratio * 500}px)` : "translateX(0)";
            // box.style.transform = `translateY(${ratio * 100}px)`;
            // box.style.transform = `translate(${ratio * 1000}px,${ratio * 500}px)`;
          } else {
            box.style.opacity = opacity;
            box.style.fontSize = ratio > 0 ? `${ratio * 200 + 30}px` : "30px";
            box.style.transform = `translateY(${ratio * 100}px)`;
          }
          //50vh는 가운데 있게 하기 위함 박스 크기에 따라 다르게 해야할듯
        }
      });
      timer = false;
    }, 20);
  }
});
