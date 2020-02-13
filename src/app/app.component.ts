import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, HostListener } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent       {


  title = 'drag';
  connectedGroups = new Array();
  projectFields = [
    {name:"Item Name", width:100},
    {name:"Status", width:200},
    {name:"Assignee", width:300},
    {name:"Estimate", width:100},
    {name:"Progress", width:200}
  ];
  groups = [{ name:'To Do', items : [
    'Task 1',
    'Task 2',
    'Task 3'
  ]},
  {name:"In Progress", items:['Task 4',
  'Task 5',
  'Task 6']},
  {name:"Done", items:['Task 7',
  'Task 8',
  'Task 9']}
]; 
 
changeText = false;
resizing = true;

  dropItem(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  headerDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.projectFields, event.previousIndex, event.currentIndex);
  }
  width: number;
  height: number;
 
clicked(i)
{
  console.log(i);

}
  onResized(event: ResizedEvent,index) {
   
/*     console.log(this.changeText);
console.log(event.newWidth-event.oldWidth)
let oldWidth=event.oldWidth==undefined?0:event.oldWidth;
   if(this.changeText && event.newWidth-oldWidth<100)
     {
        this.projectFields[i].width = event.newWidth; 
       //this.changeText=false;
    }
    */

   for(var i=0; i<=this.groups.length; i++)  {
    
     for(var j=0; j<this.projectFields.length;j++){
     // document.querySelector("#col-"+i+"-"+j).removeEventListener("resized", this.onResized, true);
   
     }
   } 
   
    
   this.projectFields[index].width= event.newWidth;
    
  }
}
  
 
