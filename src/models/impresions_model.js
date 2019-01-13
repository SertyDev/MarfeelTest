'use strict';

class Impresions {
    constructor(title, order, byPhone, byTablet, total) {
      this.Title = title;
      this.Order = order;
      this.ByPhone = byPhone;
      this.ByTablet = byTablet;
      this.Total = total;
    }


    
    showDataInConsole() {
      console.log('Impresions total: ' + this.total + '.');
      console.log('Impresions by phone: ' + this.byPhone + '.');
      console.log('Impresions by tablet: ' + this.byTablet + '.');
    }
  }

  export default Impresions;