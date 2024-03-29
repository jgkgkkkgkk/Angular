import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { newPageComponent } from './newpage/newPagecomponent';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AboutComponent,
    newPageComponent
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
