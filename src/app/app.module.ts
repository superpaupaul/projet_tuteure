import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './Pages/accueil/accueil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './Component/Layout/sidebar/sidebar.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import { TopbarComponent } from './Component/Layout/topbar/topbar.component';
import { CreateComponent } from './Component/Accueil/create/create.component';
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import { LayoutComponent } from './Pages/layout/layout.component';
import { InputDialogComponent } from './Component/Accueil/input-dialog/input-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {CreationQCMComponent} from "./Pages/creation-qcm/creation-qcm.component";
import {RouterModule} from "@angular/router";
import { CreationTitleComponent } from './Component/Creation/creation-title/creation-title.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { CreationTabComponent } from './Component/Creation/creation-tab/creation-tab.component';
import { CreationTabTitleComponent } from './Component/Creation/creation-tab-title/creation-tab-title.component';
import { CreationQuestionsComponent } from './Component/Creation/creation-questions/creation-questions.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { CreationQuestionsDefautComponent } from './Component/Creation/creation-questions/components/creation-questions-defaut/creation-questions-defaut.component';
import { CreationQuestionsNumeriqueComponent } from './Component/Creation/creation-questions/components/creation-questions-numerique/creation-questions-numerique.component';
import { CreationQuestionsOuverteComponent } from './Component/Creation/creation-questions/components/creation-questions-ouverte/creation-questions-ouverte.component';
// import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    SidebarComponent,
    TopbarComponent,
    CreateComponent,
    LayoutComponent,
    InputDialogComponent,
    CreationQCMComponent,
    CreationTitleComponent,
    CreationTabComponent,
    CreationTabTitleComponent,
    CreationQuestionsComponent,
    CreationQuestionsDefautComponent,
    CreationQuestionsNumeriqueComponent,
    CreationQuestionsOuverteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    RouterModule,
    MatTabsModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatInputModule,
    // SweetAlert2Module.forChild()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
