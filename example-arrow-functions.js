var names = ['Patrick', 'Garrett', 'Alex'];
//
// names.forEach(function(name) {
//   console.log('forEach: ', name);
// })
//
// names.forEach( (name) => console.log("arrow: ", name) );

// var returnMe = (name) => name + '!';
// console.log(returnMe('Patrick'));

var person = {
  name: 'Patrick',
  greet: function() {
    names.forEach( (curName) => console.log(this.name + ' says hi to ' + curName) );
  }
}

person.greet();
