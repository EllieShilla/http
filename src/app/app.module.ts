import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }   from '@angular/common/http';
import { GoodsCompComponent } from './goods-comp/goods-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    GoodsCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule, 
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
