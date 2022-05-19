import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter();
  public k=false
  public name:any
  
  constructor() { }

  ngOnInit(): void {
    
  }

  onclickjasw(data:any)
{
    if(data.name=="Sriram" && data.password=="Sriram")
    {
      this.k=true;
      this.name=data.name
      alert("welcome "+data.name) 
    }
    else{
      alert("Wrong Details")
    }
}

}