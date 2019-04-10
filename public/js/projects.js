new TypeIt('#projects-title', {
  cursor: false,
  lifeLike: true
})
  .pause(1500)
  .delete(9)
  .pause(500)
  .type("at School, but send me an email if you want...")
  .go();