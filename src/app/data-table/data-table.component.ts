import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges {
  @Input() public columns = [];
  @Input() public data = [];
  @Input() public limit: number;
  @Input() public totalItems: number;
  @Output() selected = new EventEmitter();
  @Output() rowClick = new EventEmitter();
  @Output() selectType = new EventEmitter();
  @Output() pagination = new EventEmitter();
  isSelectAll: boolean;
  selectedItems: any;
  pageNo: number;
  offset: number;
  paginationTabs: any[];

  constructor() {
    this.selectedItems = {};
    this.isSelectAll = false;
    this.paginationTabs = [
      {
        label: '1',
        key: '1'
      },
      {
        label: '2',
        key: '2'
      },
      {
        label: '3',
        key: '3'
      },
      {
        label: '4',
        key: '4'
      },
      {
        label: '5',
        key: '5'
      },
    ];
    this.pageNo = 1;
    this.offset = 0;
  }

  ngOnChanges() {
    this.reset();
  }

  reset() {
    this.isSelectAll = false;
    this.selectedItems = {};
  }


  ngOnInit() {
    for (let i = 0; i < this.data.length; i++) {
      this.selectedItems[this.data[i].id] = false;
    }
  }

  getTotalPageCount() {
    const item = Math.ceil(this.totalItems / 10);
    return item;
  }

  selectAll(event) {
    for (let i = 0; i < this.data.length; i++) {
      this.selectedItems[this.data[i].id] = false;
    }
    if (event) {
      this.isSelectAll = true;
      for (const key in this.selectedItems) {
        if (this.selectedItems.hasOwnProperty(key)) {
          this.selectedItems[key] = true;
        }
      }
      this.selectType.emit({ multi: true });
    } else {
      this.isSelectAll = false;
      for (const key in this.selectedItems) {
        if (this.selectedItems.hasOwnProperty(key)) {
          this.selectedItems[key] = false;
        }
      }
      this.selectType.emit({ multi: false });
    }
    this.selected.emit(this.selectedItems);
  }


  selectRow(event, id) {
    this.selectedItems[id] = event;
    let count = 0;
    let singleSelectId = null;
    for (const key in this.selectedItems) {
      if (this.selectedItems[key] === true) {
        count++;
      }
    }
    if (count === 1) {
      for (const key in this.selectedItems) {
        if (this.selectedItems[key] === true) {
          singleSelectId = parseInt(key, 10);
        }
      }
      this.selectType.emit({ single: true, id: singleSelectId });
    } else if (count > 1) {
      this.selectType.emit({ multi: true });
    } else {
      this.selectType.emit({ single: false, multi: false });
    }

    this.isSelectAll = count === this.data.length ? true : false;
    this.selected.emit(this.selectedItems);
  }

  click(event) {
    this.rowClick.emit(event);
  }

  goToPage(e) {
    console.log(e);
    
    if (e === 'pre' && this.pageNo > 1) {
      this.pageNo--;
      this.sendPaginationData();
      if (this.pageNo.toString() === this.paginationTabs[0].key && this.pageNo > 1) {
        this.setPageTabs();
      }
    } else if (e === 'next' && this.data.length === this.limit) {
      this.pageNo++;
      if (this.pageNo.toString() === parseInt(this.paginationTabs[4].key, 10) + 1 + '') {
        this.setPageTabs();
      }
      this.sendPaginationData();
    } else if (e !== 'pre' || e === 'next') {
      this.pageNo = parseInt(e, 10);
      this.sendPaginationData();
      if (e === this.paginationTabs[4].key || (e === this.paginationTabs[0].key && e > 1 + '')) {
        this.setPageTabs();
      }
    }
  }

  setPageTabs() {
    this.paginationTabs = [];
    this.paginationTabs[0] = { label: this.pageNo - 2 + '', key: this.pageNo - 2 + '' };
    this.paginationTabs[1] = { label: this.pageNo - 1 + '', key: this.pageNo - 1 + '' };
    this.paginationTabs[2] = { label: this.pageNo + '', key: this.pageNo + '' };
    this.paginationTabs[3] = { label: this.pageNo + 1 + '', key: this.pageNo + 1 + '' };
    this.paginationTabs[4] = { label: this.pageNo + 2 + '', key: this.pageNo + 2 + '' };
  }

  sendPaginationData() {
    this.offset = this.pageNo === 1 ? 0 : (this.pageNo * this.limit - this.limit);
    const pagination = {
      'offset': this.offset,
      'pageNo': this.pageNo
    };
    this.pagination.emit(pagination);
  }

}
