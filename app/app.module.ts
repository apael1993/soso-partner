/**
 * Created by Anushavan on 3/20/17.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {AppComponent}  from './app.component';
import {routing, appRoutingProviders} from "./app.routes";
import {DataServiceImpl} from "./shared/impl/data.service.impl";
import {SerializationService} from "./shared/impl/serialization.service";
import {RegistrationModule} from "component/registration/registration.module";
import {PartnerModule} from "./component/partner/partner.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RegistrationModule,
        PartnerModule,
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