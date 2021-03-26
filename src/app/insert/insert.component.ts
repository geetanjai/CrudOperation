import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public myservice:MyserviceService,public route:Router,public activeroute:ActivatedRoute) { 
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required]
    
  });
  }

  ngOnInit(): void {
    this.activeroute.params.subscribe(res=>{
      if(res.id){
        this.myservice.getuserbyId(res.id).subscribe(response=>{
          console.log(response.data);
            this.registerForm.reset(response.data);
          })
      }
    })
  }
  onSubmit() {
     
    if (this.registerForm.invalid) {
        return;
    }

    this.myservice.create(this.registerForm.value).subscribe((res)=>{
      this.route.navigate(['/'])
    })
     

   
   
}

}
