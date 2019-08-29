{
  const counterElement = document.getElementById("counter");
  const titleElement = document.getElementById("title");

  const decreaseCounter = () => {
    const counter = Number(counterElement.textContent);
    if (counter > 1) {
      counterElement.textContent = counter - 1;
    } else {
      clearInterval(intervalId);
      titleElement.textContent = "BOOM!";
      setTimeout(() => {
        titleElement.textContent = "Everything is broken now :(";
      }, 2000);
    }
  };
  const intervalId = setInterval(decreaseCounter, 1000);

  /**
    const blockElement = document.getElementById("block");
    const frameElement = document.getElementById("frame");

    const movement = 7;
    const blockWidth = parseFloat(getComputedStyle(block).width);

    const moveBlock = () => {
        const xBlock = parseFloat(getComputedStyle(blockElement).left);
        const xMax = parseFloat(getComputedStyle(frameElement).width);
        if (xBlock + blockWidth <= xMax) {
            blockElement.style.left = (xBlock + movement) + "px";
            animationId = requestAnimationFrame(moveBlock);
        } else {
            cancelAnimationFrame(animationId);
        }
        
    };
    let animationId = requestAnimationFrame(moveBlock);
    */
}
{
  const ballElement = document.getElementById("ball");
  const frameElement = document.getElementById("frame");

  let leftToRigth = true;
  const movement = 7;

  let animationId;
  const moveBlock = () => {
    const ballWidth = Number(ballElement.clientWidth);
    const xMax = parseFloat(getComputedStyle(frameElement).width);
    const xBlock = parseFloat(getComputedStyle(ballElement).left);
    if (leftToRigth) {
        if (xBlock + ballWidth <= xMax) {
            ballElement.style.left = xBlock + movement + "px";
          } else {
            leftToRigth = false;
          }
    } else {
        if (xBlock > 0) {
            ballElement.style.left = xBlock - movement + "px";
          } else {
            leftToRigth = true;
          }
    }
    animationId = requestAnimationFrame(moveBlock);
  };

  const startElement = document.getElementById("start");
  const stopElement = document.getElementById("stop");

  startElement.addEventListener("click", e => {
    animationId = requestAnimationFrame(moveBlock);
    startElement.disabled = true;
    stopElement.disabled = false;
  });
  stopElement.addEventListener("click", e => {
    cancelAnimationFrame(animationId);
    startElement.disabled = false;
    stopElement.disabled = true;
  });
  
}
