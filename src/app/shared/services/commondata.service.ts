import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class CommondataService {
  
  constructor(
    private httpService:HttpService
  ) { }
  // postfile(fileToUpload:file){
  //   const endpoint="https://www.bitconia.com/uploads/settings/admin@bitcoinio.com";
  //   const formData:FormData =new FormData();
  //   formData.append('Image',fileToUpload,fileToUpload.name);
  //   return this.httpService.post(endpoint, formData);
  // }
 
}
