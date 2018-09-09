import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import common http dulu bro di sini
import { HttpClientModule } from "@angular/common/http";
// import dp provider lo todo. jadi dp fungsi lo service itu kayak model dia
import {TodoService } from './todo.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //tambah di import dp httpclientmodule
  ],
  providers: [
  	// Tambah todoservice di provider
  	TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
