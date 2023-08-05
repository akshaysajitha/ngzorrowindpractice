import { Component, OnInit } from '@angular/core';

import { FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-componenty',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  validateForm!:FormGroup;
  submittedData: { username: string, qualification: string, address: string}[] = [];

  submitForm(): void {
    
    if (this.validateForm.valid) {
      const username = this.validateForm.get('userName')?.value;
      const qualification = this.validateForm.get('QualificationData')?.value;
      const address = this.validateForm.get('addressData')?.value;
      this.dataSet.push({username,qualification,address});
      console.log(this.submittedData)
      console.log('submit', this.validateForm.value);
      console.log(this.dataSet)
      
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  constructor(private formBuilder: FormBuilder,private router: Router) {}

  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      userName: [null, [Validators.required]],
      QualificationData: [null, [Validators.required]],
      addressData:[null, [Validators.required]],
      remember: [true]
      
    });
    
  }

  dataSet = [
    {
      username: 'John Brown',
      qualification: 'degree',
      address: 'New York No. 1 Lake Park'
    },
    {
      username: 'Jim Green',
      qualification: 'pg',
      address: 'London No. 1 Lake Park'
    },
    {
      username: 'Joe Black',
      qualification: 'bsc electronics',
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  
}

