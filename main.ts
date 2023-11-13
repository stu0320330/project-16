let Timer = 0
let Lemon_on_Spoon = false
let Lemon: game.LedSprite = null
input.onButtonPressed(Button.A, function () {
    basic.showString("3 2 1 Go!!!!!!!")
    Timer = 0
    Lemon_on_Spoon = true
    Lemon = game.createSprite(2, 2)
    while (Lemon_on_Spoon) {
        Timer += 1
        if (input.acceleration(Dimension.X) > 200) {
            if (Lemon.get(LedSpriteProperty.X) == 4) {
                Lemon_on_Spoon = false
            } else {
                Lemon.change(LedSpriteProperty.X, 1)
                basic.pause(200)
            }
        }
    }
    while (Lemon_on_Spoon) {
        Timer += 1
        if (input.acceleration(Dimension.X) > -200) {
            if (Lemon.get(LedSpriteProperty.X) == 0) {
                Lemon_on_Spoon = false
            } else {
                Lemon.change(LedSpriteProperty.X, -1)
                basic.pause(200)
            }
        }
    }
    while (Lemon_on_Spoon) {
        Timer += 1
        if (input.acceleration(Dimension.Y) > 200) {
            if (Lemon.get(LedSpriteProperty.Y) == 0) {
                Lemon_on_Spoon = false
            } else {
                Lemon.change(LedSpriteProperty.Y, 1)
                basic.pause(200)
            }
        }
    }
    while (Lemon_on_Spoon) {
        Timer += 1
        if (input.acceleration(Dimension.Y) > -200) {
            if (Lemon.get(LedSpriteProperty.Y) == 0) {
                Lemon_on_Spoon = false
            } else {
                Lemon.change(LedSpriteProperty.Y, -1)
                basic.pause(200)
            }
        }
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.UntilDone)
        basic.showString("Game Over!")
    }
})
basic.forever(function () {
    if (Timer == 30) {
        basic.showString("You Win")
    }
})
