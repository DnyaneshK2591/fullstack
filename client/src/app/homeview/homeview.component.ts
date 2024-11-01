import { Component } from '@angular/core';
import { RestapiService } from '../services/restapi.service';

@Component({
  selector: 'app-homeview',
  templateUrl: './homeview.component.html',
  styleUrls: ['./homeview.component.scss'],
})
export class HomeviewComponent {
  articles: any;
  constructor(private restapiService: RestapiService) {}
  ngOnInit(): void {
    this.getRestApiResponse();
  }
  getRestApiResponse() {
    this.restapiService.fetchTopHeadlines().subscribe(data => {
      this.articles = data;
      console.log(data);
    });
  }
  onDelete(_id: any){
    console.log(_id)
    this.restapiService.deletePost(_id).subscribe((response)=>{
      console.log(response);
    });
  }
}
