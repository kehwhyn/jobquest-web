import Hammer from "hammerjs";

const SCREEN_WIDTH = document.body.clientWidth;

function setGesturesActions(
  element,
  {
    handleMovement,
    changeDirection,
    handleVacancyApplication,
    authenticatedUser,
  }
) {
  const hammertime = new Hammer(element.current);
  hammertime.on("pan", (e) => {
    handleMovement(true);
    if (e.deltaX > 0) {
      changeDirection("right");
    } else if (e.deltaX < 0) {
      changeDirection("left");
    }
    element.current.style.transform = `translateX(${e.deltaX}px)`;
  });
  hammertime.on("panend", async (e) => {
    handleMovement(false);
    let descartado;
    const keep = Math.abs(e.velocityX) < 0.5 && Math.abs(e.deltaX) < 160;
    if (!keep && authenticatedUser) {
      if (e.deltaX > 0) {
        descartado = false;
        goToRight(element);
      } else {
        descartado = true;
        goToLeft(element);
      }
      await handleVacancyApplication(descartado);
    } else {
      element.current.style.transform = "";
    }
  });
}

const goToRight = (element) => {
  element.current.style.transform = `translateX(${SCREEN_WIDTH}px)`;
  setTimeout(() => (element.current.style.display = "none"), 300);
};

const goToLeft = (element) => {
  element.current.style.transform = `translateX(-${SCREEN_WIDTH}px)`;
  setTimeout(() => (element.current.style.display = "none"), 300);
};
export { setGesturesActions, goToLeft, goToRight };
