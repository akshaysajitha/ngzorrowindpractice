import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTypographyModule } from 'ng-zorro-antd/typography';



@NgModule({
  imports: [WelcomeRoutingModule,NzGridModule,NzDividerModule, NzTypographyModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent,]
})
export class WelcomeModule { 
  
    
 
  
  
 
}
