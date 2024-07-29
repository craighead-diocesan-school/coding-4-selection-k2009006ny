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