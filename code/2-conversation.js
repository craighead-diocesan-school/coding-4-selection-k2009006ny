// ####################################
// ##### ----- Conversation ----- #####
// ####################################

function conversation() {
  alert('Welcome to my conversation program.')

  alert('Do you like cycling? Answer yes or no.')
  let answer = prompt()

  if (answer == 'yes') {
    alert("That's good - you will get very fit.")
  } else {
    alert('Perhaps you like some other sport.')
  }

  alert('Goodbye')
}

function age() {
  alert('Welcome to my conversation program.')
  let name = prompt('What is your name?')
  let age = prompt('How old are you, ' + name + '?')
  age = Number(age)

  if (age >= 20) {
    alert(name + ',' + ' you are old enough to drink alcohol!')
  } else {
    alert(name + ',' + ' you can always enjoy drinking juice instead of alcohol🤪')
  }
}

function modify() {
  alert('Welcome to my sports discussion program.')
  let run = prompt('Do you like running? Plesase write yes or no.')

  if (run == 'yes') {
    alert("That's good!")
    let like = prompt('Do you do athletics?')
  } if (like == 'yes') {
    alert('Good luck in your next race.')
  } else {
    alert('Just for fun then.')
  }
  else {
    let watch = prompt('Do you watch Olympic athletics?')
  } if (watch == 'yes') {
    alert("That's good - it's inspiring.")
  } else {
    alert("It's not for everyone.")
  }
  alert('Good bye!!')
}