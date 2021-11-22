const css = `<style>
  :root {
    --line-height: 10px;
  }

  *{
    margin: 0;
    padding: 0;
    border: none;
  }
  
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #635f53;
    height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    background: #958974;
    height: 100vh;
    font-family: 'Chakra Petch', sans-serif;
    width: 40vw;
    min-width: 768px;
    height: 65vh;
    text-align: center;
    padding-top: 4rem;
    padding-bottom: 8rem;
  }
  </style>`

  const head = document.querySelector('head')
  head.insertAdjacentHTML('beforeend', css)