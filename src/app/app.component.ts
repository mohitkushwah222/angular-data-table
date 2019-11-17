import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-data-table';
  columns = [
    {
      key: 'id',
      columnName: 'S.No',
      isEnable: true
    },
    {
      key: 'name',
      columnName: 'Name',
      isEnable: true
    },
    {
      key: 'lastName',
      columnName: 'Last Name',
      isEnable: true
    },
    {
      key: 'mobile',
      columnName: 'Mobile Number',
      isEnable: true
    }
  ];
  totalData = [
    {
      id: 1,
      name: 'Sahil',
      lastName: 'Singh',
      mobile: 1234567890
    },
    {
      id: 2,
      name: 'Sahil2',
      lastName: 'Singh',
      mobile: 1234567890
    },
    {
      id: 3,
      name: 'Sahil3',
      lastName: 'Singh',
      mobile: 1234567890
    },
    {
      id: 4,
      name: 'Sahil4',
      lastName: 'Singh',
      mobile: 1234567890
    },
    {
      id: 5,
      name: 'Sahil5',
      lastName: 'Singh',
      mobile: 1234567890
    },
    {
      id: 6,
      name: 'Sahil6',
      lastName: 'Singh',
      mobile: 1234567890
    },
    {
      id: 7,
      name: 'Sahil7',
      lastName: 'Singh',
      mobile: 1234567890
    },
    {
      id: 8,
      name: 'Sahil8',
      lastName: 'Singh',
      mobile: 1234567890
    },
    {
      id: 9,
      name: 'Sahil9',
      lastName: 'Singh',
      mobile: 1234567890
    },
    {
      id: 10,
      name: 'Sahil10',
      lastName: 'Singh',
      mobile: 1234567890
    },
    {
      id: 11,
      name: 'Sahil11',
      lastName: 'Singh',
      mobile: 1234567890
    },
    {
      id: 12,
      name: 'Sahil12',
      lastName: 'Singh',
      mobile: 1234567890
    },
    {
      id: 13,
      name: 'Sahil13',
      lastName: 'Singh',
      mobile: 1234567890
    },
    {
      id: 14,
      name: 'Sahil14',
      lastName: 'Singh',
      mobile: 1234567890
    },
    {
      id: 15,
      name: 'Sahil15',
      lastName: 'Singh',
      mobile: 1234567890
    },
    {
      id: 16,
      name: 'Sahil16',
      lastName: 'Singh',
      mobile: 1234567890
    },
    {
      id: 17,
      name: 'Sahil17',
      lastName: 'Singh',
      mobile: 1234567890
    },
    {
      id: 18,
      name: 'Sahil18',
      lastName: 'Singh',
      mobile: 1234567890
    },
    {
      id: 19,
      name: 'Sahil19',
      lastName: 'Singh',
      mobile: 1234567890
    },
    {
      id: 20,
      name: 'Sahil20',
      lastName: 'Singh',
      mobile: 1234567890
    },
    {
      id: 21,
      name: 'Sahil21',
      lastName: 'Singh',
      mobile: 1234567890
    },
  ];
  limit: number = 10;
  totalItems: number = this.totalData.length;
  data = [];
  constructor() {
    this.setData();
  }

  setData(pageNo = 1) {
    // to be used if have totalData constant otherwise directlty set data received from server
    this.data = this.totalData.filter((ele, index) => { return index >= (this.limit * (pageNo - 1)) && index < (this.limit * pageNo) })
  }

  goToDetails(e) {
    console.log(e);
  }
  onSelect(e) {
    console.log(e);
  }
  selectType(e) {
    console.log(e);
  }
  onPageClick(e) {
    console.log(e);
    this.setData(e.pageNo);
  }

}
