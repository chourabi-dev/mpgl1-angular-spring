import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-types',
  templateUrl: './new-types.component.html',
  styleUrls: ['./new-types.component.css']
})
export class NewTypesComponent implements OnInit {



  constructor() { }

  ngOnInit(): void { 

   /* this.getMyDocsFromPostOffice().then((data)=>{

      console.log(data);
      
    }).catch((error)=>{
      console.log(error);
      

    });*/


   // this.initCalls();


   // watch my postion

   this.watchMyComputerPostion().subscribe((res)=>{
     console.log(res);
     
   })

  }

/*
  async initCalls(){
    let docs = await this.getMyDocsFromPostOffice();


    console.log(docs);

    
  }*/


/*

  getMyDocsFromPostOffice(){
    const promise = new Promise( (succ,err)=>{
        //...
        setTimeout(()=>{
            err( { success : false, message: "docs are not ready" } );
        },2000)
    } );


    return promise;
  }*/







  watchMyComputerPostion(){
    


    
      
      let observable  = new Observable((observer)=>{
          navigator.geolocation.watchPosition((postion)=>{
                observer.next(postion);
          })
      })
      
    return(observable);


  }

}
