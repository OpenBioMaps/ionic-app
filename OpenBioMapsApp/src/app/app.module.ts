import { NgModule, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { DynamicForm } from '../pages/dynamicForm/dynamicForm';
import { FormSelector } from '../pages/formSelector/formSelector';
import { Settings } from '../pages/settings/settings';

import { DynamicFormComponent }         from '../dynamicForm/dynamic-form.component';
import { DynamicFormQuestionComponent } from '../dynamicForm/dynamic-form-question.component';

@NgModule({
  declarations: [
    MyApp,
    DynamicForm,
    FormSelector,
    Settings,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DynamicForm,
    FormSelector,
    Settings
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage
  ]
})
export class AppModule {}
