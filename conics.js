 // colors: [],
 // gradient: ``,
 // shadow: '',

const CONICS = [
  {
    colors: ['deeppink', 'rebeccapurple'],
    gradient: `conic-gradient(
      from 180deg at bottom left,
      deeppink,
      rebeccapurple
    ) border-box;`,
    shadow: `deeppink`,
  },
  {
    colors: ['cyan', 'rebeccapurple'],
    gradient: `conic-gradient(
      from 90deg at bottom right,
      cyan, 
      rebeccapurple
    ) border-box;`,
    shadow: 'cyan',
  },
  {
    colors: ['deeppink', 'cyan'],
    gradient: `conic-gradient(
      from 0deg at bottom left,
      deeppink, 
      cyan
    ) border-box;`,
    shadow: 'deeppink',
  },
  {
    colors: ['deeppink', 'cyan', 'rebeccapurple'],
    gradient: `conic-gradient(
      from -180deg at bottom right,
      deeppink, 
      cyan,
      rebeccapurple
    ) border-box;`,
    shadow: 'cyan',
  },
  {
    colors: ['lime', 'cyan'],
    gradient: `conic-gradient(
      from 0deg at top right,
      lime, 
      cyan
    ) border-box;`,
    shadow: 'cyan',
  },
  {
    colors: ['black', 'white'],
    gradient: `conic-gradient(
      from -90deg at top left,
      black, 
      white
    ) border-box;`,
    shadow: 'gray',
  },
  {
    colors: ['slategray', 'white'],
    gradient: `conic-gradient(
      from 0deg at top right,
      slategray, 
      white
    ) border-box`,
    shadow: 'slategray',
  },
  {
    colors: ['white', 'orange'],
    gradient: `conic-gradient(
      from 180deg at 50% 110%,
      white, 
      orange
    ) border-box;`,
    shadow: 'orange',
  },
   {
      colors: ['lime', 'cyan'],
      gradient: `conic-gradient(
        from 180deg at center left,
        lime, 
        cyan
      ) border-box;`,
      shadow: 'cyan',
   },
]

export default CONICS