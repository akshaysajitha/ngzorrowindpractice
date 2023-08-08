import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-my-componenty',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  validateForm!:FormGroup;
  submittedData: { username: string, qualification: string, address: string}[] = [];
  collectedData: [] = [];//for collect json from djago
  collectedDataservice: any[] = [];//for collect json from djago call service
  submitForm(): void {
      const formData = this.validateForm.value;
      this.http.post('http://127.0.0.1:8000/home/', formData).subscribe(
        response => {
          console.log('Data sent successfully:', response);
        });
    
    if (this.validateForm.valid) {
      let delement=false
      const username = this.validateForm.get('userName')?.value;
      const qualification = this.validateForm.get('QualificationData')?.value;
      const address = this.validateForm.get('addressData')?.value;
      for (const item of this.dataSet){
        if (item.username !== username && item.qualification !==qualification && item.address !==address) {
          console.log('notmatch')
          delement=true
          const date = new Date()
          console.log(date);
          
        }else{
          delement=false
          
        }
        console.log(item.address)
      }
      if (delement) {
        this.dataSet.push({username,qualification,address});
      }
          
      
      
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
  constructor(private formBuilder: FormBuilder,private router: Router,private http: HttpClient,private dataService: DataService) {}

  ngOnInit(): void {
   this.http.get<any>('http://127.0.0.1:8000/home/').subscribe(response => {
    this.collectedData = response.data; // Assuming your response contains a "data" property with an array
    console.log('directcompcall'+this.collectedData)
  });

  
    this.validateForm = this.formBuilder.group({
      userName: [null, [Validators.required]],
      QualificationData: [null, [Validators.required]],
      addressData:[null, [Validators.required]],
      remember: [true]
      
    });
    

    this.dataService.getData().subscribe(
      response => {
        this.collectedDataservice = response;
        console.log('check service', this.collectedDataservice);
      });

      // api set to add data in django
      
      


    

    



    
    
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

