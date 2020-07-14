import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [
        NavbarComponent,
        SlidebarComponent,
        FooterComponent
      ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    SlidebarComponent,
    FooterComponent
  ]
})
export class TemplateModule { }
