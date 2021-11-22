const pathDog = 'assets/dog.svg'

const dog = Character`
  width:20%;
  ${pathDog}
`

const WrapperCharacters = (css,children) => (
  `
    <div style="${css}">${children} </div> 
  `
)


const wrapperCharacters = WrapperCharacters`
  display: flex;
  justify-content: space-around;
  ${dog + dog + dog}
`
