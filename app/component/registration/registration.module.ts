/**
 * Created by Anushavan on 3/20/17.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {registrationRouting} from "./registration.routes.ts";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ModalModule,
        registrationRouting
    ],
    declarations: [
        
    ],
})

export class RegistrationModule { }