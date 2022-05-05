//use input from user along with the calculation button. 
//Needs to be able to differentiate between numbers and operators, store these and perform the calculations, and return the result to the screen ***data validation***
//Nice to have: multiple operations in the same input, and display input, previous total should be stored for the next operation, and clear button needs to work

const keys = document.querySelector('.calculatorButtons');
keys.addEventListener('click', event => {
    const { target } = event;
    const { value } = target;
    if (!target.matches('button')) {
        return
    } else {
        console.log(value)
        calculator.parseInput(value)
    }
})
const calculator = {
    displayText: '0',
    previousTotal: null,

    parseInput(value) {

        switch (value) {
            case '=':
                //answer
                this.calcAnswer(this.displayText)
                break;
            case 'C':
                //clear
                this.clearAll()
                break;
            case '.':
                if (this.displayText == 0) {
                    //add 0. then append the rest of the string
                    this.addText('0.')
                } else {
                    //add value to text string
                    this.addText(value)
                }
                break;
            default:
                //add value to text string
                this.addText(value)
                break;
        }
    },
    addText(value) {
        if (this.displayText === '0') {
            this.displayText = ''
        }else if(this.previousTotal !== null) {
            this.displayText = this.previousTotal
            this.previousTotal = null
        }
        if (isNaN(+(value)) && isNaN(+(this.displayText))) {
            if (isNaN(this.displayText.slice(-1))) {
                return;
            }
        }
        this.displayText += value//output display text to screen
        this.outputText(this.displayText)
    },
    outputText(text) {
        document.querySelector('.calcScreen').value = text
    },
    calcAnswer(equation) {
        let result = Function("return " + equation)()
        this.outputText(result)
    },
    clearAll() {
        this.displayText = '0',
        this.prevTotal = null,
        this.outputText(this.displayText)
    }
}