'use strict';

class Revenue {
    constructor(title, order, byPhone, byTablet, total) {
      this.Title = title;
      this.Order = order;
      this.ByPhone = byPhone;
      this.ByTablet = byTablet;
      this.Total = total;
    }

    showDataInConsole() {
      console.log('Revenue total: ' + this.total + '.');
      console.log('Revenue by phone: ' + this.byPhone + '.');
      console.log('Revenue by tablet: ' + this.byTablet + '.');
    }
  }

  export default Revenue;