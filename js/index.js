const root = document.querySelector('#root')
const textTitle = 'difficulty level'


//tagged template string
const title = Title`
  color: #f2c394;
  font-size: 2.5rem;
  letter-spacing: 2px;
  margin-bottom: 4rem;
  ${textTitle}
`

root.insertAdjacentHTML('beforeend', title)
root.insertAdjacentHTML('beforeend', wrapperCharacters)
root.insertAdjacentHTML('beforeend', slide)