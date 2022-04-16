import { Component, OnInit, Output, EventEmitter } from '@angular/core';

interface Column {
  value: string;
  viewValue: string;
}

interface Filter {
  value: string;
  column: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  columns: Column[] = [
    {value: 'name', viewValue: 'Name'},
    {value: 'price', viewValue: 'Price'},
    {value: 'rating', viewValue: 'Rating'},
  ];
  filterValue = "";
  selectedColumn = "name"

  @Output() filterEvent = new EventEmitter<Filter>();

  constructor() { }

  ngOnInit(): void {
  }

  changeColumn(value) {
    this.selectedColumn = value;
    this.sendFilter();
  }

  changeFilterValue(value) {
    this.sendFilter();
  }

  sendFilter() {
    this.filterEvent.emit({
      value: this.filterValue,
      column: this.selectedColumn
    })
  }

}
