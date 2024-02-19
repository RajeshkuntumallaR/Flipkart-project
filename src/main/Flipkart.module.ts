import { CommonModule } from "@angular/common";
import { Inject, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ClarityModule } from "clarity-angular";
import { Store } from "@ngrx/store";
import { EXTENSION_ROUTE, ExtensionNavRegistration } from "@vcd/sdk/common";
import { VcdApiClient, VcdSdkModule } from "@vcd/sdk";
import { PluginModule } from "@vcd/sdk/core";
import { TranslateService } from "@vcd/sdk/i18n";
import { 7776Component } from "./Flipkart.component";
import { SampleService } from "./services/sample.service";

const ROUTES: Routes = [
    {
        path: "",
        component: 7776Component
    }
];

@NgModule({
    imports: [
        ClarityModule,
        CommonModule,
        HttpModule,
        FormsModule,
        HttpClientModule,
        VcdSdkModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        7776Component,
    ],
    bootstrap: [7776Component],
    exports: [],
    providers: [
        VcdApiClient,
        SampleService
    ],
})
export class 7776Module extends PluginModule {
    constructor(appStore: Store<any>, @Inject(EXTENSION_ROUTE) extensionRoute: string, translate: TranslateService) {
        super(appStore, translate);

        let registrations: ExtensionNavRegistration[] = [
            {
                path: `${extensionRoute}`,
                nameCode: "Flipkart.nav.label",
                descriptionCode: "Flipkart.nav.description"
            }
        ];

        registrations.forEach(registration => this.registerExtension(registration));
    }
}
