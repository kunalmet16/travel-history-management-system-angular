import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TravelService } from '../services/travel.service';
import { Country } from '../shared/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  country:Country[]=[];
  error:Error=new Error();
   cname!: String;
  constructor(private route: ActivatedRoute, 
    private router: Router,private travelService: TravelService,
    ) {
   
   }

  ngOnInit(): void {
     this.cname=this.route.snapshot.params['cname'];
    this.travelService.getCountry(this.cname).subscribe(
      (response)=>{
        this.country=response;
        
      },
      (error)=>{
        console.log(error);
      }
   );    
  }
  


}

