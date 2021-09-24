input.onButtonPressed(Button.B, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
        soundExpression.happy.playUntilDone()
    } else {
        game.gameOver()
        soundExpression.giggle.playUntilDone()
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
basic.forever(function () {
    music.playMelody("C D E F G A B C5 ", 120)
    sprite.move(1)
    basic.pause(200)
    sprite.ifOnEdgeBounce()
})
