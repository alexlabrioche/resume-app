new TypeIt('#resume-title', {
  cursor: false,
  lifeLike: true,
  speed: 200
})
  .pause(1500)
  .delete(5)
  .pause(500)
  .type("Boulanger")
  .go();