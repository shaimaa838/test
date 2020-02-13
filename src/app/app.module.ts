import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularResizedEventModule } from 'angular-resize-event';
import { SplitterModule } from '@syncfusion/ej2-angular-layouts';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule ,
    ScrollingModule,
    CdkTableModule,
    CdkTreeModule,
    FormsModule,
    AngularResizedEventModule,
    SplitterModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
