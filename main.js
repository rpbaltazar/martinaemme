window.addEventListener('mousemove', event => {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;

  mouseXPercentage = Math.round(event.x / windowWidth * 100);
  mouseYPercentage = Math.round(event.y / windowHeight * 100);

  radialMouseTracker = document.querySelector("#mouse-tracker");
  radialMouseTracker.style.background = 'radial-gradient(at ' + mouseXPercentage + '% ' + mouseYPercentage + '%, #3C8A8A, #e66465)';
});
