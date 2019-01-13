'use strict';

class Visits {
  constructor(title, order, byPhone, byTablet, total) {
    this.Title = title;
    this.Order = order;
    this.ByPhone = byPhone;
    this.ByTablet = byTablet;
    this.Total = total;
  }

    showDataInConsole() {
      console.log('Visits total: ' + this.total + '.');
      console.log('Visits by phone: ' + this.byPhone + '.');
      console.log('Visits by tablet: ' + this.byTablet + '.');
    }
  }

  export default Visits;