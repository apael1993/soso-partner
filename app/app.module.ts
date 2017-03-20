/**
 * Created by Anushavan on 3/17/17.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {AppComponent}  from './app.component';
import {routing, appRoutingProviders} from "./app.routes";
import {DataServiceImpl} from "./shared/impl/data.service.impl";
import {SerializationService} from "./shared/impl/serialization.service";
import {RegistrationModule} from "./registration/registration.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RegistrationModule,
        HttpModule,
        routing,
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        appRoutingProviders,
        DataServiceImpl,
        SerializationService
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }