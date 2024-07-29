// ####################################
// ######## ----- Capital ----- #######
// ####################################

function capital() {
  let name = prompt('What is you name?')
  let answer = prompt('Quick question, ' + name + '. What is the capital of France?')

  if (answer == 'Paris') {
    alert("That's right😆 , " + name + '.')
  } else {
    alert("It's not correct. The answer is Paris 🇫🇷🥐")
  }
}
