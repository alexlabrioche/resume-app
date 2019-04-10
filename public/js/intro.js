// console.info("intro.js launched");
new TypeIt('#intro-title', {
  cursor: false,
  lifeLike: true,
  startDelay: 500
})
  .pause(1500)
  .delete()
  .type("I love web-development")
  .pause(1500)
  .delete()
  .type("I also love")
  .pause(500)
  .delete()
  .options({ lifeLike: false, speed: 0 })
  .type("Yoga ")
  .pause(500)
  .delete()
  .type("Photos ")
  .pause(500)
  .delete()
  .type("Mountains")
  .pause(500)
  .delete()
  .pause(500)
  .options({ lifeLike: true, speed: 100 })
  .type("And simple things...")
  .pause(1000)
  .delete()
  .exec(async () => {
    await new Promise((resolve, reject) => {
      // console.info("end of typewriter");
      window.location.href = "/home";
    });
  })
  .go();
