console.log('taco')

let body = {  "category": "test pi",
              "brand": "raspbi pi",
              "name": "taco test",
              "img": "https://images.pexels.com/photos/38283/bananas-fruit-carbohydrates-sweet-38283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              "quantity": 666,
              "location": "refrigerator" }

fetch('https://eggtrackerapp.herokuapp.com/foodstuff',{
  method: 'POST',
  headers: {
    "content-type": "application/json"
    },
  body: body
    })
  .then(res => res.status=201 ? this.setRedirect() : console.log('not working'))