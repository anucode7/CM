import { Component,NgModule, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Ng4LoadingSpinnerService} from 'ng4-loading-spinner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor (private httpService: HttpClient, private spinner : Ng4LoadingSpinnerService,private renderer: Renderer2) { }
  arrJson: any;
  stackdata=[];
  loading: any;
  ngOnInit () {
    this.loading = true;

  }

  public LoadList() : void
  {
    this.startLoadingSpinner()
  //  this.stackdata = [];
    this.httpService.get('./assets/test.json',{responseType: "json"}).subscribe(
      data => {
        this.arrJson = data;
        console.log(this.arrJson.cb[0]);
        for(let index in this.arrJson.cb)
        {
           this.stackdata.push(this.arrJson.cb[index]);
        }
         console.log(this.stackdata);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

  public HideList() : void{
     this.stackdata = [];
  }

  startLoadingSpinner() {
    this.spinner.show();

    setTimeout(function() {
      this.spinner.hide();
    }.bind(this), 1000);
  }

   public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
        this.renderer.addClass(target, visible ? 'active' : 'inactive');
        this.renderer.removeClass(target, visible ? 'inactive' : 'active');
    }
}