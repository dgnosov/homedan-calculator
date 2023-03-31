const CalculatorSettings = {
    calculatorTitle: "Сумма",
    calculatorInputs: [
        {id: 'r1', name: "Оклад за месяц", short_name: "месяц", hint: false},
        {id: 'r2', name: "МРОТ", short_name: "", hint: true},
        {id: 'r3', name: "Оплата за день", short_name: "день", hint: false},
        {id: 'r4', name: "Оплата за час", short_name: "час", hint: false},
    ],

    calculatorResultsTest: {
      salary: "сотрудник будет получать на руки",
      ndfl: {
          text1: "НДФЛ",
          text2: "от оклада"
      },
        total: "за сотрудника в месяц"
    },
    calculatorNDFLBtnText: {
        text1: "Указать с НДФЛ",
        text2: "без НДФЛ"
    },

    calculatorNDFL: 13,
    calculatorInputPlaceholder: 'Введите данные...',
    calculatorCurrency: '₽',
    calculatorHintText: 'МРОТ - минимальный размер оплаты труда. Разный для разных регионов.'
}


export default CalculatorSettings