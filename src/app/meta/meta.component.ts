import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meta',
  templateUrl: './meta.component.html',
  styleUrls: ['./meta.component.scss']
})
export class MetaComponent implements OnInit {

  metaData:any = [{label:"Trasit Time",data:"12"},{label:"Trasit Time",data:"12"},{label:"Trasit Time",data:"12"},{label:"Trasit Time",data:"12"},{label:"Trasit Time",data:"12"},{label:"Trasit Time",data:"12"}];
  constructor() { }

  ngOnInit(): void {
  }

}
