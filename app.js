const fetch = require("node-fetch")

console.log('taco test')

var body = JSON.stringify({  category: "test pi",
              brand: "raspbi pi",
              name: "taco test",
              img: "https://images.pexels.com/photos/38283/bananas-fruit-carbohydrates-sweet-38283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              quantity: 666,
              location: "refrigerator" })

function getStuff(){
  console.log('comment inside fetch')
  fetch('https://eggtrackerapp.herokuapp.com/foodstuff',{
    method: 'POST',
    headers: { "content-type": "application/json" },
    body: body
    })
    .then(res => res.status=201 ? console.log(res.status) : console.log('not working'))
}

getStuff()
