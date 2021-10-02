const menu = {
    _courses: {
      _appetizers:[],
      _mains:[],
      _desserts:[],
  
      get appetizers() {
        return this._appetizers;
      },
  
      get mains() {
        return this._mains;
      },
  
      get desserts() {
        return this._desserts;
      },
  
      get courses() {
       return {
         _appetizers,
         _mains,
         _desserts
       };
      },
  
      set appetizers(appetizer) {
        this._appetizers.push(appetizer);
      },
  
      set mains(main) {
        this._mains.push(main);
      },
  
      set desserts(dessert) {
        this._desserts.push(dessert);
      },
    },
  
  addDishToCourse(courseName,dishName,dishPrice){
      
      let dish = { 
        name: dishName,
        price: dishPrice
      }
  
     switch (courseName){
       case 'appetizers': 
        this._courses.appetizers = dish;
        break;
       case 'desserts': 
        this._courses.desserts = dish;
        break;
       case 'mains': 
        this._courses.mains = dish;
        break;
       defualt: 
        console.log('Incorrect Course Name');
        break;   
     }
    }, // end of addDishToCourse
  
  getRandomDishFromCourse(courseName) {
  let dishes = '';
   
   switch (courseName){
       case 'appetizers': 
        dishes = this._courses.appetizers;
        break;
       case 'desserts': 
        dishes = this._courses.desserts;
        break;
       case 'mains': 
        dishes = this._courses.mains;
        break;
       defualt: 
        console.log('Incorrect Course Name');
        break;   
     }
  return dishes[Math.floor(Math.random() * dishes.length)];
  },
  
  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let dessert = this.getRandomDishFromCourse('desserts');
    let main = this.getRandomDishFromCourse('mains');
    let price = appetizer.price + dessert.price + dessert.price;
  
    console.log(`Appetizer = ${appetizer.name}`);
    console.log(`Main = ${main.name}`);
    console.log(`Dessert = ${dessert.name}`);
    console.log(`-------------------------`);
    console.log(`Total Price = ${price}`);
  
  } // end of generateRandomMeal()
  
  }; // end of object menu
  
  menu.addDishToCourse('appetizers','a1',5);
  menu.addDishToCourse('appetizers','a2',5);
  menu.addDishToCourse('appetizers','a3',4);
  menu.addDishToCourse('mains','m1',3);
  menu.addDishToCourse('mains','m2',2);
  menu.addDishToCourse('mains','m3',2);
  menu.addDishToCourse('desserts','d1',1);
  menu.addDishToCourse('desserts','d2',3);
  menu.addDishToCourse('desserts','d3',6);
  
  //console.log(menu);
  menu.generateRandomMeal();
  
  
  
  