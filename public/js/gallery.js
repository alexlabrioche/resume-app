new TypeIt('#gallery-text', {
  cursor: false,
  lifeLike: true,
  speed: 75
})
  .pause(1500)
  .delete(13)
  .type("I take pictures")
  .pause(1500)
  .delete()
  .options({ speed: 50 })
  .type("But most of the time I forget my camera")
  .pause(1500)
  .delete()
  .type("or my sunscreen")
  .pause(1000)
  .delete()
  .type("and so I just enjoy landscapes...")
  .go();
