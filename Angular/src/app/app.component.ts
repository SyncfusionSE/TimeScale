import { Component, ViewChild } from '@angular/core';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-inputs';
import { IAxisLabelRenderEventArgs, LabelModel, LinearGaugeComponent, LineModel, TickModel } from '@syncfusion/ej2-angular-lineargauge';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('gauge1')
  public gauge1: LinearGaugeComponent;
  @ViewChild('gauge2')
  public gauge2: LinearGaugeComponent;
  @ViewChild('gauge3')
  
  public gauge3: LinearGaugeComponent;
  public FinishedPointer: string = '../assets/FinishedTick.png';
  public CurrentActionPointer: string = '../assets/CurrentAction.png';
  public UnFinishedPointer: string = '../assets/UnfinishedTick.png';
  
  public FinishedColor: string = '#f2a92f';
  public NotStartedColor: string = '#eeeeee';
  public CurrentActionColor: string = '#79564e';
  
  public Stage1: string = '../assets/1baloon.png';
  public Stage2: string = '../assets/2baloon.png';
  public Stage3: string = '../assets/3baloon.png';
  public Stage4: string = '../assets/4baloon.png';

  //line , majorTicks, minorTicks are not required in UI, hence providing transparent color and width as 0
  public axisline:LineModel={
    width:0,
    color:"transparent"
  }
  public majorTick:TickModel={
      interval:50,
      width:0,
      color:"transparent"
  }
  public minorTick:TickModel={
      interval:50,
      width:0,
      color:"transparent"
  }
  
  // Adding offset to position at the label at desired spot
  public label:LabelModel={
      offset:70
  }
  
  //Provides label name for each stage
  public axisLabelRender(args: IAxisLabelRenderEventArgs):void {
    if (args.value === 0) {
      args.text = 'Stage 1';
    } else if (args.value === 50) {
      args.text = 'Stage 2';
    } else if (args.value === 100) {
      args.text = 'Stage 3';
    } else if (args.value === 150) {
      args.text = 'Stage 4';
    } else {
        //prevents rendering of default label for second axis
      args.cancel = true;
    }
  }
  //Pass the image,color for pointers and ranges based on the current position.
  //same image/color for each state is used for all pointers. Different image for each state of each pointer can also be used.
  public positionChange(args: ChangeEventArgs) {
    switch (args.value) {
      case 0:
        this.updatePointerImage( this.UnFinishedPointer, this.UnFinishedPointer, this.UnFinishedPointer, this.UnFinishedPointer );
        this.updatePointerColor( this.NotStartedColor, this.NotStartedColor, this.NotStartedColor, this.NotStartedColor );
        this.updateRangeColor( this.NotStartedColor, this.NotStartedColor, this.NotStartedColor );
        break;
      case 1:
        this.updatePointerImage( this.CurrentActionPointer, this.UnFinishedPointer, this.UnFinishedPointer, this.UnFinishedPointer );
        this.updatePointerColor( this.CurrentActionColor, this.NotStartedColor, this.NotStartedColor, this.NotStartedColor );
        this.updateRangeColor(this.NotStartedColor, this.NotStartedColor, this.NotStartedColor);
        break;
      case 2:
        this.updatePointerImage( this.FinishedPointer, this.CurrentActionPointer, this.UnFinishedPointer, this.UnFinishedPointer );
        this.updatePointerColor( this.FinishedColor, this.CurrentActionColor, this.NotStartedColor, this.NotStartedColor );
        this.updateRangeColor(this.FinishedColor, this.NotStartedColor, this.NotStartedColor);
        break;
      case 3:
        this.updatePointerImage( this.FinishedPointer, this.FinishedPointer, this.CurrentActionPointer, this.UnFinishedPointer );
        this.updatePointerColor( this.FinishedColor, this.FinishedColor, this.CurrentActionColor, this.NotStartedColor );
        this.updateRangeColor(this.FinishedColor, this.FinishedColor, this.NotStartedColor);
        break;
      case 4:
        this.updatePointerImage(this.FinishedPointer, this.FinishedPointer, this.FinishedPointer, this.CurrentActionPointer );
        this.updatePointerColor(this.FinishedColor, this.FinishedColor, this.FinishedColor, this.CurrentActionColor );
        this.updateRangeColor(this.FinishedColor, this.FinishedColor, this.FinishedColor);
        break;
      case 5:
        this.updatePointerImage( this.FinishedPointer, this.FinishedPointer, this.FinishedPointer, this.FinishedPointer );
        this.updatePointerColor( this.FinishedColor, this.FinishedColor, this.FinishedColor, this.FinishedColor );
        this.updateRangeColor(this.FinishedColor, this.FinishedColor, this.FinishedColor);
        break;
      default:
        break;
    }
  }
  
    //Update the pointer images based on the current position
    public updatePointerImage (img1: string, img2: string, img3: string, img4: string ):void {
     if(this.gauge1.axes[0].pointers) {
        this.gauge1.axes[0].pointers[0].imageUrl = img1;
        this.gauge1.axes[0].pointers[1].imageUrl = img2;
        this.gauge1.axes[0].pointers[2].imageUrl = img3;
        this.gauge1.axes[0].pointers[3].imageUrl = img4;
      }
    }
  
    //Update the pointer color based on the current position
    public updatePointerColor(color1: string, color2: string, color3: string, color4: string ):void {
      if(this.gauge3.axes[0].pointers) {
        this.gauge3.axes[0].pointers[0].color = color1;
        this.gauge3.axes[0].pointers[1].color = color2;
        //pointer 3 is skipped in the gauge, hence the pointer[2] is denoting the ponter 4.    
        this.gauge3.axes[0].pointers[2].color = color4;
      }
    }
  
    //Update the range color based on the current position
    public updateRangeColor(color1: string, color2: string, color3: string):void {
      if(this.gauge1.axes[0].ranges) {
        this.gauge1.axes[0].ranges[0].color = color1;
        this.gauge1.axes[0].ranges[1].color = color2;
        this.gauge1.axes[0].ranges[2].color = color3;
      }
    
      if(this.gauge2.axes[0].ranges) {
        this.gauge2.axes[0].ranges[0].color = color1;
        this.gauge2.axes[0].ranges[1].color = color2;
        this.gauge2.axes[0].ranges[2].color = color3;
      }
    
      if(this.gauge3.axes[0].ranges) {
        this.gauge3.axes[0].ranges[0].color = color1;
        this.gauge3.axes[0].ranges[1].color = color2;
        this.gauge3.axes[0].ranges[2].color = color3;
      }
    }
}
