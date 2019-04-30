ObloqWeather.Obloq_http_setup(
SerialPin.P1,
SerialPin.P2,
"hitest",
"12345678"
)
ObloqWeather.Set_location(LOCATION.Pulau_Ubin)
basic.forever(function () {
    basic.showString(ObloqWeather.get_temperature())
    basic.pause(2000)
})
