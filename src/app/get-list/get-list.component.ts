import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-get-list',
  templateUrl: './get-list.component.html',
  styleUrls: ['./get-list.component.css']
})
export class GetListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'email', 'first_name', 'last_name','avatar','Action'];
  dataSource  = new MatTableDataSource<any>() ;
  constructor(private myservice:MyserviceService,public router:Router) { }

  ngOnInit(): void {

    this.myservice.getData().subscribe(Response=>{
      this.dataSource.data=Response.data;
    })

    
  }
  remove(id: any, i: any) {
    this.myservice.Delete(id).subscribe((res) => {
    this.dataSource.data.splice(i, 1)
    })
    }
    edit(element: any) {
      this.router.navigate(['insert/' + element.id])
      }
}
