const board = [
  [
    {
      character: "7",
      value: "7",
      classes: "c-calculator__button"
    },
    {
      character: "8",
      value: "8",
      classes: "c-calculator__button"
    },
    {
      character: "9",
      value: "9",
      classes: "c-calculator__button"
    },
    {
      character: "÷",
      value: "/",
      classes: "c-calculator__button c-calculator__button--operator"
    }
  ],

  [
    {
      character: "4",
      value: "4",
      classes: "c-calculator__button"
    },
    {
      character: "5",
      value: "5",
      classes: "c-calculator__button"
    },
    {
      character: "6",
      value: "6",
      classes: "c-calculator__button"
    },
    {
      character: "x",
      value: "*",
      classes: "c-calculator__button c-calculator__button--operator"
    }
  ],

  [
    {
      character: "1",
      value: "1",
      classes: "c-calculator__button"
    },
    {
      character: "2",
      type: "number",
      value: "2",
      classes: "c-calculator__button"
    },
    {
      character: "3",
      value: "3",
      classes: "c-calculator__button"
    },
    {
      character: "-",
      value: "-",
      classes: "c-calculator__button c-calculator__button--operator"
    }
  ],

  [
    {
      character: "AC",
      value: 'AC',
      classes:
        "c-calculator__button c-calculator__button--function js-calculator__clearall"
    },
    {
      character: "0",
      value: "0",
      classes: "c-calculator__button"
    },
    {
      character: ".",
      value: ".",
      classes: "c-calculator__button c-calculator__button--function"
    },
    {
      character: "+",
      value: "+",
      classes: "c-calculator__button c-calculator__button--operator"
    }
  ],

  [ 
       
    {
      character: "=",
      value: "=",
      classes: "c-calculator__button c-calculator__button--operator c-calculator-equals"
    }
  ]
];

export default board;
