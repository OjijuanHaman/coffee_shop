var form = document.shopform

var wholeTotal = document.getElementById('total')

var h1 = document.createElement("h1")
wholeTotal.appendChild(h1)

form.addEventListener('submit',function(event){
    event.preventDefault()
    console.log(form.item1.value)

    
 
    var item1 = form.item1.value * 3.00
    var item2 = form.item2.value * 7.00
    var item3 = form.item3.value * 11.00
    var totalPrice = item1 + item2 + item3
    h1.textContent= '$'+ totalPrice + ' is your total'
})

