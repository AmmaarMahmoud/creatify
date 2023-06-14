import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from '../../services/languageS/lang.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
     message = '';

  constructor(private _langService: LangService){
      // تعيين اللغة الافتراضية

      // // ترجمة النص
      // this.translate.get('GREETING', { name: 'John' }).subscribe((res: string) => {
      //   this.message = res;
      // });
  }
  ngOnInit() {
     
  }
  changeLang(event:any){
    this._langService.AddLang(event.target.value)
    localStorage.setItem('lang',event.target.value)
  }
}