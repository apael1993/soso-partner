/**
 * Created by Anushavan on 3/20/17.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {partnerRouting} from "./partner.routes";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ModalModule,
        partnerRouting
    ],
    declarations: [
        
    ],
})

export class PartnerModule { }