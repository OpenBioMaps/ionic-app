import { NgModule, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite } from '@ionic-native/sqlite';

import { MyApp } from './app.component';
import { DynamicForm } from '../pages/dynamicForm/dynamicForm';
import { FormSelector } from '../pages/formSelector/formSelector';
import { Settings } from '../pages/settings/settings';
import { NoteList } from '../pages/noteList/noteList';

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
    NoteList,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http],
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DynamicForm,
    FormSelector,
    Settings,
    NoteList
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}