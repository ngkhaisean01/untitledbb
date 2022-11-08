basic.forever(function () {
    if (input.lightLevel() < 0) {
        pins.servoWritePin(AnalogPin.P2, 180)
    } else {
        pins.servoWritePin(AnalogPin.P2, 0)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        for (let index = 0; index < 3; index++) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(200)
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.pause(200)
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
    }
})
