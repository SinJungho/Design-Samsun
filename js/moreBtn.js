function startAnimation() {
  const line = document.getElementById('line');
  const animationDuration = 2000; // 2 seconds
  const frameRate = 60;
  const frameDuration = 1000 / frameRate;
  const totalFrames = animationDuration / frameDuration;
  let currentFrame = 0;

  const animationInterval = setInterval(() => {
    currentFrame++;
    const progress = currentFrame / totalFrames;

    if (progress <= 1) {
      const height = (1 - progress) * 100; // Decrease height from 100 to 0
      const opacity = 1 - progress; // Decrease opacity from 1 to 0

      line.style.height = height + 'px';
      line.style.opacity = opacity;
    } else {
      clearInterval(animationInterval);
      line.style.display = 'none'; // Hide the line after the animation is complete
    }
  }, frameDuration);
}
