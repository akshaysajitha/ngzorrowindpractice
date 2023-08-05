import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import {  registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { MyComponentComponent } from './my-component/my-component.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form'; // Import NzFormModule
import{WelcomeRoutingModule} from './pages/welcome/welcome-routing.module' ;
import { RouterModule, Routes } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';


const routes: Routes = [
  // Other routes if any
];


registerLocaleData(en);

@NgModule({
  
  declarations: [
    AppComponent,
    MyComponentComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    ReactiveFormsModule,
    NzFormModule,
    WelcomeRoutingModule,
    RouterModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    NzInputModule,
    NzButtonModule,
    NzResultModule,
    NzTypographyModule,
    NzDividerModule,
    NzGridModule,
    CommonModule,
    NzTableModule,
    

   
    
    
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
