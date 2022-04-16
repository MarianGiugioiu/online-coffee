import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface Column {
  value: string;
  viewValue: string;
}

interface Sort {
  column: string;
  order: string;
}

@Component({
  selector: 'app-sorting-options',
  templateUrl: './sorting-options.component.html',
  styleUrls: ['./sorting-options.component.css']
})
export class SortingOptionsComponent implements OnInit {
  columns: Column[] = [
    {value: '--', viewValue: 'Select field'},
    {value: 'name', viewValue: 'Name'},
    {value: 'price', viewValue: 'Price'},
    {value: 'rating', viewValue: 'Rating'},
  ];
  selectedColumn = "--";
  order = "";
  checked = false;

  @Output() sortEvent = new EventEmitter<Sort>();

  constructor() { }

  ngOnInit(): void {
    this.order = "ASC";
  }

  changeColumn(value) {
    this.selectedColumn = value;
    this.sendSortOptions();
  }

  changeOrder() {
    if (this.checked) {
      this.order = "DESC";
    } else {
      this.order = "ASC";
    }
    this.sendSortOptions();
  }

  sendSortOptions() {
    this.sortEvent.emit({
      order: this.order,
      column: this.selectedColumn
    })
  }

}
