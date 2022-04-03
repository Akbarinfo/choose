const elCheckbox = document.querySelector('#checkbox1')
const elCheckboxTwo = document.querySelector('#checkbox2')
const elCheckboxThree = document.querySelector('#checkbox3')

//Sonlar
let elSpanOne = document.querySelector('#span1')
let elSpanTwo = document.querySelector('#span2')
let elSpanThree = document.querySelector('#span3')

//Namelar
let elNameOne = document.querySelector('#name1')
let elNameTwo = document.querySelector('#name2')
let elNameThree = document.querySelector('#name3')

//Btnlar
let elText = document.querySelector('#text')
let elBtn = document.querySelector('#btn1')
let elBtnTwo = document.querySelector('#btn2')



elCheckbox.addEventListener('click', () => {
  if(!elCheckbox.checked) {
    elCheckboxTwo.checked = false
    elCheckboxThree.checked = false
    elSpanTwo.style.backgroundColor = '#f7f6f7'
    elSpanThree.style.backgroundColor = '#f7f6f7'
    elSpanTwo.style.color = '#696869'
    elSpanThree.style.color = '#696869'
    elNameTwo.style.color = '#696869'
    elNameThree.style.color = '#696869'
    elText.textContent = 'Choose title content'
    elBtnTwo.textContent = 'Submit title'
    elBtn.style.display = 'none'
    elBtnTwo.style.display = 'block'
  }
  elCheckbox.checked = true
})

elCheckboxTwo.addEventListener('click', () => {
  console.log(elCheckboxTwo.checked)
  if(elCheckboxTwo.checked && !elCheckboxThree.checked) {
    elSpanTwo.style.backgroundColor = '#2e72a8'
    elSpanTwo.style.color = '#fff'
    elNameTwo.style.color = 'black'
    elText.textContent = 'Choose description'
    elBtn.textContent = 'Back'
    elBtnTwo.textContent = 'Submit description'
    elBtn.style.display = 'block'
  } else if( !elCheckboxTwo.checked && elCheckboxThree.checked) {
    elSpanTwo.style.backgroundColor = '#f7f6f7'
    elSpanTwo.style.color = '#696869'
    elNameTwo.style.color = '#696869'
    elText.textContent = 'Choose title content'
    elBtnTwo.textContent = 'Submit'
    elBtn.style.display = 'none'
    elSpanThree.style.backgroundColor = '#f7f6f7'
    elSpanThree.style.color = '#696869'
    elNameThree.style.color = '#696869'
    elText.textContent = 'Choose title content'
    elBtn.textContent = 'Back'
    elCheckboxThree.checked = false
  }
  else {
    elSpanTwo.style.backgroundColor = '#f7f6f7'
    elSpanTwo.style.color = '#696869'
    elNameTwo.style.color = '#696869'
    elText.textContent = 'Choose title content'
    elBtnTwo.textContent = 'Submit'
    elBtn.style.display = 'none'
  }
})

elCheckboxThree.addEventListener('click', () => {
  if(elCheckboxTwo.checked && elCheckboxThree.checked) {
    elSpanThree.style.backgroundColor = '#2e72a8'
    elSpanThree.style.color = '#fff'
    elNameThree.style.color = 'black'
    elText.textContent = 'Are you happy now?'
    elBtn.textContent = 'No, go back'
    elBtnTwo.textContent = 'Yes, go ahead'
    elBtn.style.display = 'block'
  } else {
    elSpanThree.style.backgroundColor = '#f7f6f7'
    elSpanThree.style.color = '#696869'
    elNameThree.style.color = '#696869'
    elText.textContent = 'Choose title content'
    elBtn.textContent = 'Back'
    elBtnTwo.textContent = elCheckboxTwo.checked ? 'Submit description' : 'Submit'
  }
})

elBtnTwo.addEventListener('click', () => {
  if( elBtnTwo.textContent == 'Submit title') {
    elSpanTwo.style.backgroundColor = '#2e72a8'
    elSpanTwo.style.color = '#fff'
    elNameTwo.style.color = 'black'
    elText.textContent = 'Choose description'
    elBtn.textContent = 'Back'
    elBtnTwo.textContent = 'Submit description'
    elBtn.style.display = 'block'
    elCheckboxTwo.checked = true
  } else if( elBtnTwo.textContent == 'Submit description') {
    elSpanThree.style.backgroundColor = '#2e72a8'
    elSpanThree.style.color = '#fff'
    elNameThree.style.color = 'black'
    elText.textContent = 'Are you happy now?'
    elBtn.textContent = 'No, go back'
    elBtnTwo.textContent = 'Yes, go ahead'
    elBtn.style.display = 'block'
    elCheckboxThree.checked = true
  } else if(elBtnTwo.textContent == 'Yes, go ahead') {
    elBtn.style.display = 'none'
    elBtnTwo.style.display = 'none'
    elText.textContent = "Ok we're done. Thanks for sending us your data!"
  }
})

elBtn.addEventListener('click', () => {
  if(elBtn.textContent == 'Back') {
     elSpanTwo.style.backgroundColor = '#f7f6f7'
    elSpanTwo.style.color = '#696869'
    elNameTwo.style.color = '#696869'
    elText.textContent = 'Choose title content'
    elBtnTwo.textContent = 'Submit title'
    elBtn.style.display = 'none'
    elCheckboxTwo.checked = false
  } else if(elBtn.textContent == 'No, go back') {
    elSpanThree.style.backgroundColor = '#f7f6f7'
    elSpanThree.style.color = '#696869'
    elNameThree.style.color = '#696869'
    elText.textContent = 'Choose title content'
    elBtn.textContent = 'Back'
    elBtnTwo.textContent = elCheckboxTwo.checked ? 'Submit description' : 'Submit'
    elCheckboxThree.checked = false
  }
})

// if( !elCheckbox.checked) {
//   elSpanOne.style.backgroundColor = '#2e72a8'
//   elSpanOne.style.color = '#fff'
//   elNameOne.style.color = 'black'
// }

// elBtnTwo.addEventListener('click', () => {
//   console.log('ishladi')
//   elCheckboxTwo.checked = true
//   elSpanTwo.style.backgroundColor = '#2e72a8'
//   elSpanTwo.style.color = '#fff'
//   elNameTwo.style.color = 'black'
//   elText.textContent = 'Choose Description content'
//   elBtn.style.display = "block"
// })

// elCheckboxTwo.addEventListener('click', () => {
//   if(elCheckboxTwo.checked) {
//     elSpanTwo.style.backgroundColor = '#2e72a8'
//     elSpanTwo.style.color = '#fff'
//     elNameTwo.style.color = 'black'
//     elText.textContent = 'Choose Description content'
//     elBtn.style.display = "block"
//   }
//   else {
//     elSpanTwo.style.backgroundColor = '#f7f6f7'
//     elSpanTwo.style.color = '#696869'
//     elNameTwo.style.color = '#696869'
//     elText.textContent = 'Choose title content'
//     elBtnTwo.textContent = 'Sumbit'
//     elBtn.style.display = "none"
//   }
// })

// if(! elCheckboxTwo.checked && ! elCheckbox.checked) {
// elCheckboxThree.addEventListener('click', () => {
//     if(elCheckboxThree.checked) {
//       elSpanThree.style.backgroundColor = '#2e72a8'
//       elSpanThree.style.color = '#fff'
//       elNameThree.style.color = 'black'
//       elText.textContent = 'Choose Description content'
//     }
//     else {
//       elSpanThree.style.backgroundColor = '#f7f6f7'
//       elSpanThree.style.color = '#696869'
//       elNameThree.style.color = '#696869'
//     }
//   })
// }

// if(! elCheckboxTwo.checked) {
//   elBtnTwo.addEventListener('click', () => {
//     console.log('ishladi 3')
//     elSpanThree.style.backgroundColor = '#2e72a8'
//     elSpanThree.style.color = '#fff'
//     elNameThree.style.color = 'black'
//     elText.textContent = 'Yes, go ahead'
//     elBtn.style.display = "No, go back"
//   })
// }