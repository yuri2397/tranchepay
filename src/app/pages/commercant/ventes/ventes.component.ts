import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventes',
  templateUrl: './ventes.component.html',
  styleUrls: ['./ventes.component.scss']
})
export class VentesComponent implements OnInit {

  visible = false;
  listOfDisplayData: any[] = [];
  listOfData: any[] = [];
  searchValue = '';
  constructor() { }

  ngOnInit(): void {
  }


  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: any) => item.name.indexOf(this.searchValue) !== -1);
  }
}
