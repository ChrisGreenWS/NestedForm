import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseFormComponent } from './base-form/base-form.component';
import { NestedFormComponent } from './nested-form/nested-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseFormComponent,
    NestedFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
