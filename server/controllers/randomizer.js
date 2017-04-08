var randomizer = function(req,res){
  var data = {
    color: randomizeBoxColor(),
    number: randomizeBoxNumber() 
  }
  res.send(data);
}

function randomizeBoxColor() {
  var letters = '0123456789ABCDEF'
  var hexa = '#'
  for (var i = 0; i < 6; i++) {
    var random = Math.floor(Math.random() * 16)
    hexa += letters[random]
  }
  return hexa
}

function randomizeBoxNumber() {
  return Math.floor(Math.random() * 9) + 1
}

module.exports = {
  randomizer
}
