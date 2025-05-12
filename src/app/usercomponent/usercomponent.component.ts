import { Component } from '@angular/core';
import { ActivatedRoute, CanActivateChildFn } from '@angular/router';

@Component({
  selector: 'app-usercomponent',
  imports: [],
  templateUrl: './usercomponent.component.html',
  styleUrl: './usercomponent.component.css'
})
export class UsercomponentComponent {
  name:null|string='';
constructor(private route:ActivatedRoute){

}
ngOnInit(){
  this.route.params.subscribe((params)=>{
  
    this.name=params['name'];

  })
}
}
