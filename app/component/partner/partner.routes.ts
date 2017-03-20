/**
 * Created by Anushavan on 3/20/17.
 */
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {PartnerComponent} from "./details/details.component";

const partnerRoutes: Routes = [
    {
        path: "details",
        component: PartnerComponent
    }
];

export const partnerRouting: ModuleWithProviders = RouterModule.forChild(partnerRoutes);