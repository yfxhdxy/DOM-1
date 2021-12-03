const div = dom.create("<div>111</div>");
console.log(div);

const test = dom.find('#test>.red')[0]

dom.style(test, 'color', 'red')

const divList = dom.find('.red')
dom.each(divList, (n)=> console.log(n)) 