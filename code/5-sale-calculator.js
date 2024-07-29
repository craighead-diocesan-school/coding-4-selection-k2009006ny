// ####################################
// #### ----- Sale Calculator ----- ###
// ####################################

function saleCalculator() {
  let spend = prompt('How much money do you have to spend?')
  let item = prompt('How much is the item normally?')
  let discount = prompt('And what is the discount percentage?')
  let percentage = discount * 0.01
  let one = 1 - percentage
  let cost = item * one

  if (cost > spend) {
    alert("You don't have enough. You have $" + spend + ' to spend, but even with ' + discount + '% off, $' + item + 
      ' only comes down to $' + cost + '.')
  } else {
    alert("You have enough. You have $" + spend + ' to spend, it is less than ' + discount + '% off, $' + item +
       ' only comes down to $' + cost + '.')
  }
}