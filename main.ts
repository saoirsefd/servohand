radio.onReceivedString(function (receivedString) {
    if (receivedString == "blue" && blue == 1) {
        servos.P0.run(50)
        basic.pause(100)
        servos.P0.run(0)
        blue = 0
    }
    if (receivedString == "blue up" && blue == 0) {
        servos.P0.run(-50)
        basic.pause(100)
        servos.P0.run(0)
        blue = 1
    }
    if (receivedString == "green" && green == 1) {
        servos.P0.run(50)
        basic.pause(100)
        servos.P0.run(0)
        green = 0
    }
    if (receivedString == "green up" && green == 0) {
        servos.P0.run(-50)
        basic.pause(100)
        servos.P0.run(0)
        green = 1
    }
    if (receivedString == "yellow" && yellow == 1) {
        servos.P0.run(50)
        basic.pause(100)
        servos.P0.run(0)
        yellow = 0
    }
    if (receivedString == "yellow up" && yellow == 0) {
        servos.P0.run(-50)
        basic.pause(100)
        servos.P0.run(0)
        yellow = 1
    }
    if (receivedString == "orange" && orange == 1) {
        servos.P0.run(50)
        basic.pause(100)
        servos.P0.run(0)
        basic.showString("o")
        orange = 0
    }
    if (receivedString == "orange up" && orange == 0) {
        servos.P0.run(-50)
        basic.pause(100)
        servos.P0.run(0)
        basic.showString("u")
        orange = 1
    }
    if (receivedString == "red" && red == 1) {
        servos.P0.run(50)
        basic.pause(100)
        servos.P0.run(0)
        red = 0
    }
    if (receivedString == "red up" && red == 0) {
        servos.P0.run(-50)
        basic.pause(100)
        servos.P0.run(0)
        red = 1
    }
})
let red = 0
let orange = 0
let yellow = 0
let green = 0
let blue = 0
radio.setGroup(22)
blue = 1
green = 1
yellow = 1
orange = 1
red = 1
