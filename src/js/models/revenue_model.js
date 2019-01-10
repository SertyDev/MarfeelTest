'use strict';

class Revenue {
    constructor(total, byPhone, byTablet) {
      this.total = total;
      this.byPhone = byPhone;
      this.byTablet = byTablet;
    }

    consoleName() {
      console.log('Revenue total: ' + this.total + '.');
      console.log('Revenue by phone: ' + this.byPhone + '.');
      console.log('Revenue by tablet: ' + this.byTablet + '.');
    }
  }

  export default Revenue;