'use strict';

class Visits {
    constructor(total, byPhone, byTablet) {
      this.total = total;
      this.byPhone = byPhone;
      this.byTablet = byTablet;
    }

    showDataInConsole() {
      console.log('Visits total: ' + this.total + '.');
      console.log('Visits by phone: ' + this.byPhone + '.');
      console.log('Visits by tablet: ' + this.byTablet + '.');
    }
  }

  export default Visits;