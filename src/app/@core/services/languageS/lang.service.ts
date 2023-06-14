import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {
   language = new BehaviorSubject<string>('en')
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.language.subscribe(res=>{
      this.translate.use(res);
    })
   
  }
  
  AddLang(newLang:string){
    this.language.next(newLang)
  }
}
