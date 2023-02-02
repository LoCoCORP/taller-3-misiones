let distancia = 0
function paraVelocidad() {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    basic.pause(1000)
    para()
}
function paraTiempo() {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    basic.pause(1000)
    para()
}
function ondasSonoras() {
    distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
}
input.onButtonPressed(Button.A, function () {
    comprobarMetapara()
})
function para() {
    maqueen.motorStop(maqueen.Motors.All)
}
function comprobarMetapara() {
    avanza()
    if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        soundExpression.giggle.playUntilDone()
        basic.showIcon(IconNames.Yes)
        para()
    } else {
        soundExpression.sad.playUntilDone()
        basic.showIcon(IconNames.No)
    }
}
function avanza() {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
}
basic.forever(function () {

})
