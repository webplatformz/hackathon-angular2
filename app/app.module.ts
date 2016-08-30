import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {LocationService} from "./service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {LocationDetailComponent} from "./locationDetail";

@NgModule({
    imports:      [ BrowserModule, HttpModule, FormsModule ],
    declarations: [ AppComponent, LocationDetailComponent ],
    bootstrap:    [ AppComponent ],
    providers: [LocationService]
})
export class AppModule { }
