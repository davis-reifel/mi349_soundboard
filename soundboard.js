var buttonOne = document.getElementById('s1')
var buttonTwo = document.getElementById('s2')
var buttonThree = document.getElementById('s3')

var audioOne = new Audio('sound1.wav')
var audioTwo = new Audio('sound2.wav')
var audioThree = new Audio('sound3.wav')

buttonOne.addEventListener('mouseenter', function () {
    audioOne.play()
})
buttonTwo.addEventListener('mouseenter', function () {
    console.log('I was clicked!')
})
buttonThree.addEventListener('mouseenter', function () {
    console.log('I was clicked!')
})

buttonOne.addEventListener('click', function () {
    audioOne.play()
})
buttonTwo.addEventListener('click', function () {
    console.log('I was clicked!')
})
buttonThree.addEventListener('click', function () {
    console.log('I was clicked!')
})