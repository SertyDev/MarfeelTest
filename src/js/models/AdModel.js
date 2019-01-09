'use strict';

// A base class is defined using the new reserved 'class' keyword
class AdModel {
    // ..and an (optional) custom class constructor. If one is
    // not supplied, a default constructor is used instead:
    // constructor() { }
    constructor(name) {
      this.name = name;
    }
  
    // Simple class instance methods using short-hand method
    // declaration
    consoleName() {
      console.log('Name of the Ad: ' + this.name + '.');
    }
  
    // We will look at static and subclassed methods shortly
  }

  export default AdModel;