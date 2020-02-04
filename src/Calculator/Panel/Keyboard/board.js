const board = [ 
  [
    {character: '7', 
    type: 'number', 
    value: '7',
    classes: "c-calculator__button",

    },
    {
      character: '8',
      type: 'number',
      value: '8',
      classes: "c-calculator__button",

    },
    {
      character: '9',
      type: 'number',
      value: '9',
      classes: "c-calculator__button",

    },
    {
      character: '&#247;',
      type: 'number',
      value: '/',
      classes: "c-calculator__button c-calculator__button--operator",

    }
  ],
  
  [
    {
      character: '4',
      type: 'number',
      value: '4',
      classes: "c-calculator__button",

    },
    {
      character: '5',
      type: 'number',
      value: '5',
      classes: "c-calculator__button",

    },
    {
      character: '6',
      type: 'number',
      value: '6',
      classes: "c-calculator__button",

    },
    {
      character: 'x',
      type: 'number',
      value: '*',
      classes: "c-calculator__button c-calculator__button--operator",

    }
  ],
  
  [
    {
    character: '1',
    type: 'number',
    value: '1',
    classes: "c-calculator__button",

    },
    {
      character: '2',
      type: 'number',
      value: '2',
      classes: "c-calculator__button",

    },
    {
      character: '3',
      type: 'number',
      value: '3',
      classes: "c-calculator__button",

    },
    {
      character: '-',
      type: 'number',
      value: '-',
      classes: "c-calculator__button c-calculator__button--operator",

    }
  ],
  
  [
    {
      character: '(',
      type: 'number',
      value: '(',
      classes: "c-calculator__button",
    },
    {
      character: '0',
      type: 'number',
      value: '0',
      classes: "c-calculator__button",

    },
    {
      character: ')',
      type: 'number',
      value: ')',
      classes: "c-calculator__button",

    }, 
    {
      character: '+',
      type: 'number',
      value: '+',
      classes: "c-calculator__button c-calculator__button--operator",

    }
  ],
  
  [
    {
      character: 'AC',
      type: 'function',
      method: () => {
        // reset the calculato
      },
      classes: 'c-calculator__button c-calculator__button--function js-calculator__clearall',
    },
    {
      character: '&#171;',
      type: 'function',
      method: () => {
        // clear the last character in display
      },
      classes: "c-calculator__button c-calculator__button--function js-calculator__clear",

    },
    
    {
      character: '.',
      type: 'number',
      value: '.',
      classes: "c-calculator__button c-calculator__button--function",

    },
    {
      character: '=',
      type: 'function',
      value: '=',
      classes: "c-calculator__button c-calculator__button--operator",

    }
  ]
]

export default board;