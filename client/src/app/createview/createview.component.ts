import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { RestapiService } from '../services/restapi.service';

@Component({
  selector: 'app-createview',
  templateUrl: './createview.component.html',
  styleUrls: ['./createview.component.scss'],
})
export class CreateviewComponent implements OnInit{

  createPost: FormGroup;
  constructor(private restapiService: RestapiService){}

  ngOnInit(): void {
    this.createPost = new FormGroup({
      heading: new FormControl(),
      subheading: new FormControl(),
      description: new FormControl(),
      image: new FormControl(),
      author: new FormControl(),
    });
  }

 
 
  onSubmit() {
    console.log(this.createPost.value);
    this.restapiService.createPost(this.createPost.value).subscribe((response)=>{
      console.log(response);
    });
  }
}
