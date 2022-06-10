input.onButtonPressed(Button.A, function () {
    basic.showString("VIBHASHANA")
    basic.showIcon(IconNames.Square)
    radio.sendValue("VIBHASHANA", 774814756)
    music.playMelody("C5 G B A F A C5 B ", 500)
    music.setVolume(222)
})
function doSomething (sprite: game.LedSprite, image: Image) {
	
}
music.onEvent(MusicEvent.MelodyNotePlayed, function () {
    soundExpression.spring.playUntilDone()
})
basic.showLeds(`
    . . . . .
    . # # # .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    # . . . #
    . # . # .
    # . # . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . . # . .
    . # . # .
    `)
basic.showLeds(`
    . # . # .
    . . # . .
    . . # . .
    . # . # .
    # . . . #
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . # . # .
    . # # # .
    `)
radio.raiseEvent(
EventBusSource.MICROBIT_ID_IO_P1,
EventBusValue.MICROBIT_RADIO_EVT_DATAGRAM
)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
radio.sendNumber(96.9)
led.enable(true)
