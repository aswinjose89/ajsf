import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AceEditorDirective } from './ace-editor.directive';
import { DemoComponent } from './components/demo/demo.component';
import { DemoRootComponent } from './demo-root.component';
import { routes } from './demo.routes';
import { JsonSchemaFormModule } from '@ajsf/core';
import { Bootstrap4FrameworkModule } from '@ajsf/bootstrap4';
import { Bootstrap3FrameworkModule } from '@ajsf/bootstrap3';
import { MaterialDesignFrameworkModule } from '@ajsf/material';
import { SubmitFormComponent, DialogOverviewExampleDialog } from './components/submit-form/submit-form.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

let materialComponent = [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ]
@NgModule({
  declarations: [AceEditorDirective, DemoComponent, DemoRootComponent, SubmitFormComponent,DialogOverviewExampleDialog],
  imports: [
    BrowserModule, BrowserAnimationsModule, FlexLayoutModule, FormsModule,
    HttpClientModule,
    ...materialComponent,
    RouterModule.forRoot(routes),
    Bootstrap4FrameworkModule,
    Bootstrap3FrameworkModule,
    MaterialDesignFrameworkModule,
    JsonSchemaFormModule
  ],
  entryComponents: [
    DialogOverviewExampleDialog
  ],
  bootstrap: [DemoRootComponent]
})

export class DemoModule { }
