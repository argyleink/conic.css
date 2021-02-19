const CONICS = [
  {
    colors: ['deeppink', 'rebeccapurple'],
    hex: ['#ff1493', '#639'],
    gradient: `
      conic-gradient(
        from 180deg at bottom left,
        deeppink,
        rebeccapurple
      )`,
    shadow: `deeppink`,
  },
  {
    colors: ['cyan', 'rebeccapurple'],
    hex: ['#0ff', '#639'],
    gradient: `
      conic-gradient(
        from 90deg at bottom right,
        cyan, 
        rebeccapurple
      )`,
    shadow: 'cyan',
  },
  {
    colors: ['lightblue', 'white'],
    hex: ['#add8e6', '#fff'],
    gradient: `
      conic-gradient(
        from 180deg at bottom center,
        lightblue, 
        white
      )`,
    shadow: 'lightblue',
  },
  {
    colors: ['deeppink', 'cyan'],
    hex: ['#ff1493', '#0ff'],
    gradient: `
      conic-gradient(
        from 0deg at bottom left,
        deeppink, 
        cyan
      )`,
    shadow: 'deeppink',
  },
  {
    colors: ['deeppink', 'cyan', 'rebeccapurple'],
    hex: ['#ff1493', '#0ff', '#639'],
    gradient: `
      conic-gradient(
        from -180deg at bottom right,
        deeppink, 
        cyan,
        rebeccapurple
      )`,
    shadow: 'cyan',
  },
  {
    colors: ['cyan', 'lime'],
    hex: ['#0ff', '#0f0'],
    gradient: `
      conic-gradient(
        from 0deg at top right,
        lime, 
        cyan
      )`,
    shadow: 'cyan',
  },
  {
    colors: ['white', 'black'],
    hex: ['#000', '#fff'],
    gradient: `
      conic-gradient(
        from -90deg at top left,
        black, 
        white
      )`,
    shadow: 'gray',
  },
  {
    colors: ['slategray', 'white'],
    hex: ['#708090', '#fff'],
    gradient: `
      conic-gradient(
        from 0deg at top right,
        slategray, 
        white
      )`,
    shadow: 'slategray',
  },
  {
    colors: ['white', 'orange'],
    hex: ['#fff', '#ffa500'],
    gradient: `
      conic-gradient(
        from 180deg at 50% 110%,
        white, 
        orange
      )`,
    shadow: 'orange',
  },
  {
      colors: ['lime', 'cyan'],
      hex: ['#0f0', '#0ff'],
      gradient: `
        conic-gradient(
          from 180deg at center left,
          lime, 
          cyan
        )`,
      shadow: 'cyan',
  },
  {
    colors: ['blueviolet', 'blue'],
    hex: ['#8a2be2', '#00f'],
    gradient: `
      conic-gradient(
        from -90deg at 50% -25%,
        blue, 
        blueviolet
      )`,
    shadow: 'blue',
  },
  {
    colors: ['darkseagreen', 'darkslategray'],
    hex: ['#8fbc8f', '#2f4f4f'],
    gradient: `
      conic-gradient(
        from 180deg at top right,
        darkseagreen, 
        darkslategray
      )`,
    shadow: 'darkseagreen',
  },
  {
    colors: ['lightcyan', 'lightblue'],
    hex: ['#e0ffff', '#add8e6'],
    gradient: `
      conic-gradient(
        from 0deg at top right,
        lightcyan, 
        lightblue
      )`,
    shadow: 'lightcyan',
  },
  {
    colors: ['hotpink', 'orange'],
    hex: ['#ffa500', '#ff69b4'],
    gradient: `
      conic-gradient(
        from -135deg at -10% center,
        orange, 
        hotpink
      )`,
    shadow: 'hotpink',
  },
  {
    colors: ['white', 'orchid'],
    hex: ['#fff', '#da70d6'],
    gradient: `
      conic-gradient(
        from -90deg at 50% 105%,
        white, 
        orchid
      )`,
    shadow: 'orchid',
  },
  {
    colors: ['red', 'blue'],
    hex: ['#f00', '#00f'],
    gradient: `
      conic-gradient(
        from -90deg at 25% 105%,
        red, 
        blue
      )`,
    shadow: 'blue',
  },
  {
    colors: ['papayawhip', 'peachpuff'],
    hex: ['#ffefd5', '#ffdab9'],
    gradient: `
      conic-gradient(
        from -90deg at bottom center,
        papayawhip, 
        peachpuff
      )`,
    shadow: 'peachpuff',
  },
  {
    colors: ['yellowgreen', 'yellow'],
    hex: ['#ffff00', '#9acd32'],
    gradient: `
      conic-gradient(
        from -270deg at 50% -5%,
        yellow, 
        yellowgreen
      )`,
    shadow: 'yellowgreen',
  },
  {
    colors: ['purple', 'sienna'],
    hex: ['#a0522d', '#800080'],
    gradient: `
      conic-gradient(
        from -90deg at 75% -25%,
        sienna, 
        purple
      )`,
    shadow: 'purple',
  },
  {
    colors: ['cadetblue', 'darkgreen'],
    hex: ['#5f9ea0', '#006400'],
    gradient: `
      conic-gradient(
        from -270deg at 110% 50%,
        cadetblue, 
        darkgreen
      )`,
    shadow: 'cadetblue',
  },
  {
    colors: ['fuchsia', 'floralwhite'],
    hex: ['#f0f', '#fffaf0'],
    gradient: `
      conic-gradient(
        from -270deg at 75% 110%,
        fuchsia, 
        floralwhite
      )`,
    shadow: 'fuchsia',
  },
]

export default CONICS