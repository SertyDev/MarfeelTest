'use strict';

class Impresions {
    constructor(total, byPhone, byTablet) {
      this.total = total;
      this.byPhone = byPhone;
      this.byTablet = byTablet;
    }

    showDataInConsole() {
      console.log('Impresions total: ' + this.total + '.');
      console.log('Impresions by phone: ' + this.byPhone + '.');
      console.log('Impresions by tablet: ' + this.byTablet + '.');
    }
  }

  export default Impresions;