input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        servos.P0.setRange(0, 180)
        servos.P0.run(50)
    }
})
basic.forever(function () {
	
})
