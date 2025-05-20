function Avanti (Speed: number) {
    pins.analogWritePin(AnalogPin.P2, Math.map(Speed, 0, 100, 0, 255))
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
basic.forever(function () {
    Avanti(100)
})
