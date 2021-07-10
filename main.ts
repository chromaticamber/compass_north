let 角度bearing = 0
basic.forever(function () {
    角度bearing = input.compassHeading()
    if (角度bearing < 30 || 角度bearing > 330) {
        basic.showString("N")
    } else {
        basic.showString("")
    }
})
