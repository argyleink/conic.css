const CONICS = [
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
        from .5turn at bottom center,
        lightblue, 
        white
      )`,
    shadow: 'lightblue',
  },
  {
    colors: ['mediumvioletred', 'gold'],
    hex: ['#c71585', '#ffd700'],
    gradient: `
      conic-gradient(
        from 90deg at 40% -25%,
        #ffd700, #f79d03, #ee6907, #e6390a, #de0d0d, #d61039, #cf1261, #c71585, 
        #cf1261, #d61039, #de0d0d, #ee6907, #f79d03, #ffd700, #ffd700, #ffd700
      )`,
    shadow: 'mediumvioletred',
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
    colors: ['paleturquoise', 'orangered'],
    hex: ['#afeeee', '#ff4500'],
    gradient: `
      conic-gradient(
        from 90deg at 25% -10%, 
        #ff4500, #d3f340, #7bee85, #afeeee, #7bee85
      )`,
    shadow: `paleturquoise`,
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
    colors: ['deeppink', 'cyan', 'rebeccapurple'],
    hex: ['#ff1493', '#0ff', '#639'],
    gradient: `
      conic-gradient(
        from -.5turn at bottom right,
        deeppink, 
        cyan,
        rebeccapurple
      )`,
    shadow: 'cyan',
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
        from .5turn at 50% 110%,
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
          from .5turn at center left,
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
        from .5turn at top right,
        darkseagreen, 
        darkslategray
      )`,
    shadow: 'darkseagreen',
  },
  {
    colors: ['#222', '#111'],
    hex: ['#111', '#222'],
    gradient: `
      conic-gradient(
        from 90deg at 50% 0%, 
        #111, 50%, #222, #111
      )`,
    shadow: `#333`,
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
        #ffa500, #ff7715, #ff522a, #ff3f47, #ff5482, #ff69b4
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
        from -90deg at 25% 115%,
        #ff0000, #ff0066, #ff00cc, #cc00ff, #6600ff, 
        #0000ff, #0000ff, #0000ff, #0000ff
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
    colors: ['indigo', 'lightseagreen'],
    hex: ['#4b0082', '#20b2aa'],
    gradient: `
      conic-gradient(
        from 90deg at 50% 125%, 
        #20b2aa, #135da5, #0d0895, #4b0082,
        #4b0082, #0d0895, #135da5, #20b2aa
      )`,
    shadow: `lightseagreen`,
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
  {
    colors: ['midnightblue', 'lawngreen'],
    hex: ['#191970', '#7cfc00'],
    gradient: `
      conic-gradient(
        from -270deg at 75% 110%,
        midnightblue, 
        lawngreen
      )`,
    shadow: 'lawngreen',
  },
  {
    colors: ['deeppink', 'rebeccapurple'],
    hex: ['#ff1493', '#639'],
    gradient: `
      conic-gradient(
        from .5turn at bottom left,
        deeppink,
        rebeccapurple
      )`,
    shadow: `deeppink`,
  },
  {
    colors: ['navy', 'lime'],
    hex: ['#000080', '#0f0'],
    gradient: `
      conic-gradient(
        from 90deg at 50% 125%, 
        #1f005c, #003298, #005ac6, #007fdc, #00a2d3, #00c4ae, 
        #00e474, #00ff00, #1f005c, #003298, #005ac6, #007fdc, 
        #00a2d3, #00c4ae, #00e474, #00ff00
      )`,
    shadow: `navy`,
  },
  {
    colors: ['snow', 'white'],
    hex: ['#fffafa', '#fff'],
    gradient: `
      conic-gradient(
        from 0deg at 0% 0%,
        snow, 
        white
      )`,
    shadow: 'white',
  },
  {
    colors: ['#00c476', '#82b0ff'],
    hex: ['#00c476', '#82b0ff'],
    gradient: `
      conic-gradient(
        from .5turn at 0% 0%, 
        #00c476, 
        10%, 
        #82b0ff, 
        90%, 
        #00c476
      )`,
    shadow: '#82b0ff',
  },
]

export default CONICS