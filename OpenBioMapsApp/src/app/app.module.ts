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

import { Http } from '@angular/http';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate/ng2-translate';

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
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
    provide: TranslateLoader,
    useFactory: (createTranslateLoader),
    deps: [Http]
  })
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


export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}