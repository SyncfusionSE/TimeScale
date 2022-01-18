import {    LinearGauge ,IAxisLabelRenderEventArgs  } from '@syncfusion/ej2-lineargauge';
import { NumericTextBox,ChangeEventArgs } from '@syncfusion/ej2-inputs';
  

  let numeric: NumericTextBox = new NumericTextBox({
    min: 0,
    max: 5,
    value: 3,
    step: 1,
    placeholder: 'Pick the current position',
    floatLabelType: 'Always',
    width: '150px',
    change: positionChange,
    format: '#',
  });
  numeric.appendTo('#numeric');
  
  let FinishedPointer: string = '../resources/FinishedTick.JPG';
  let CurrentActionPointer: string = '../resources/CurrentAction.JPG';
  let UnFinishedPointer: string = '../resources/UnfinishedTick.JPG';
  
  let FinishedColor: string = '#f2a92f';
  let UnFinishedColor: string = '#eeeeee';
  let CurrentActionColor: string = '#79564e';
  
  let Stage1: string = '../resources/1baloon.png';
  let Stage2: string = '../resources/2baloon.png';
  let Stage3: string = '../resources/3baloon.png';
  let Stage4: string = '../resources/4baloon.png';
  
  let gauge: LinearGauge = new LinearGauge({
    height: '200px',
    title: 'Stage Progression',
    orientation: 'Horizontal',
    axes: [
        // First axis to show the different stages and progress
      {
        maximum: 150,
        minimum: 0,
        //line , majorTicks, minorTicks are not required in UI, hence providing transparent color and width as 0
        line: { width: 0, color: 'transparent' },
        majorTicks: { interval: 50, width: 0, color: 'transparent' },
        minorTicks: { width: 0, color: 'transparent' },
        // Adding offset to position at the label at desired spot
        labelStyle: { offset: 70 },
        // Pointer to denote the different stages. Different images are used based on current state of the stage (Finished, in-progress, Unfinished).
        pointers: [
          {type: 'Marker', value: 0, offset: -5, markerType: 'Image', imageUrl: FinishedPointer, height: 30, width: 30 },
          {type: 'Marker', value: 50, offset: -5, markerType: 'Image', imageUrl: FinishedPointer, height: 30, width: 30 },
          {type: 'Marker', value: 100, offset: -5, markerType: 'Image', imageUrl: CurrentActionPointer, height: 30, width: 30 },
          {type: 'Marker', value: 150, offset: -5, markerType: 'Image', imageUrl: UnFinishedPointer, height: 30, width: 30 },
        ],
        // Ranges to connect the different stages in the UI.
        // Increased start by 3 and reduced end by 3 to provide space between the pointer image and the range bar
        ranges: [
          { start: 3, end: 47, startWidth: 8, endWidth: 8, color: FinishedColor },
          { start: 53, end: 97, startWidth: 8, endWidth: 8, color: FinishedColor },
          { start: 103, end: 147, startWidth: 8, endWidth: 8, color: UnFinishedColor },
        ],
      },
      //second axis to add images in the UI for each stage.
      {
        minimum: 200,
        maximum: 350,
        //line , majorTicks, minorTicks are not required in UI, hence providing transparent color and width as 0
        line: { color: 'transparent' },
        majorTicks: { interval: 50, width: 0, color: 'transparent' },
        minorTicks: { width: 0, color: 'transparent' },
        //Shows different images for each stage
        pointers: [
          {type: 'Marker', value: 200, markerType: 'Image', imageUrl: Stage1, height: 50, width: 50, offset: -10 },
          {type: 'Marker', value: 250, markerType: 'Image', imageUrl: Stage2, height: 50, width: 50, offset: -10 },
          {type: 'Marker', value: 300, markerType: 'Image', imageUrl: Stage3, height: 50, width: 50, offset: -10 },
          {type: 'Marker', value: 350, markerType: 'Image', imageUrl: Stage4, height: 50, width: 50, offset: -10 },
        ],
      },
    ],
    axisLabelRender: axisLabelRender,
  });
  gauge.appendTo('#linear1');
  
  let gauge2: LinearGauge = new LinearGauge({
    title: 'Stage Progression',
    height: '200px',
    orientation: 'Horizontal',
    axes: [
      {
        maximum: 150,
        minimum: 0,
        //line , majorTicks, minorTicks are not required in UI, hence providing transparent color and width as 0
        line: { width: 0, color: 'transparent' },
        majorTicks: { interval: 50, width: 0, color: 'transparent' },
        minorTicks: { width: 0, color: 'transparent' },
        // Adding offset to position at the label at desired spot
        labelStyle: { offset: 70 },
        //Shows different images for each stage
        pointers: [
          {type: 'Marker', value: 0, markerType: 'Image', imageUrl: Stage1, height: 30, width: 30 },
          {type: 'Marker', value: 50, markerType: 'Image', imageUrl: Stage2, height: 30, width: 30 },
          {type: 'Marker', value: 100, markerType: 'Image', imageUrl: Stage3, height: 30, width: 30 },
          {type: 'Marker', value: 150, markerType: 'Image', imageUrl: Stage4, height: 30, width: 30 },
        ],
        // Ranges to connect the different stages in the UI.
        ranges: [
          { start: 0, end: 50, startWidth: 8, endWidth: 8, color: FinishedColor },
          { start: 50, end: 100, startWidth: 8, endWidth: 8, color: FinishedColor },
          { start: 100, end: 150, startWidth: 8, endWidth: 8, color: UnFinishedColor },
        ],
      },
    ],
    axisLabelRender: axisLabelRender,
  });
  gauge2.appendTo('#linear2');
  
  let gauge3: LinearGauge = new LinearGauge({
    title: 'Stage Progression',
    height: '200px',
    orientation: 'Horizontal',
    axes: [
      {
        maximum: 150,
        minimum: 0,
        //line , majorTicks, minorTicks are not required in UI, hence providing transparent color and width as 0
        line: { width: 0, color: 'transparent' },
        majorTicks: { interval: 50, width: 0, color: 'transparent' },
        minorTicks: { width: 0, color: 'transparent' },
        // Adding offset to position at the label at desired spot
        labelStyle: { offset: 70 },
        // Pointer to denote the different stages. Different colored circles are used based on current state of the stage (Finished, in-progress, Unfinished).
        // Stages can be denoted without pointers also. pointerfor stage 3 (Value:100) is skipped.
        pointers: [
          {type: 'Marker', value: 0, offset: -19, markerType: 'Circle', color: FinishedColor, height: 30, width: 30 },
          {type: 'Marker', value: 50, offset: -19, markerType: 'Circle', color: FinishedColor, height: 30, width: 30 },
          {type: 'Marker', value: 150, offset: -19, markerType: 'Circle', color: UnFinishedColor, height: 30, width: 30},
        ],
        // Ranges to connect the different stages in the UI.
        // Increased start by 3 and reduced end by 3 to provide space between the pointer circle and the range bar
        ranges: [
          { start: 3,end: 47, startWidth: 8, endWidth: 8, color: FinishedColor },
          { start: 53, end: 100, startWidth: 8, endWidth: 8, color: FinishedColor },
          { start: 100, end: 147, startWidth: 8, endWidth: 8, color: UnFinishedColor },
        ],
      },
    ],
    axisLabelRender: axisLabelRender,
  });
  gauge3.appendTo('#linear3');
  
  //Provides label name for each stage
  function axisLabelRender(args: IAxisLabelRenderEventArgs) {
    if (args.value == 0) {
      args.text = 'Stage 1';
    } else if (args.value == 50) {
      args.text = 'Stage 2';
    } else if (args.value == 100) {
      args.text = 'Stage 3';
    } else if (args.value == 150) {
      args.text = 'Stage 4';
    } else {
        //prevents rendering of default label for second axis
      args.cancel = true;
    }
  }
  
  //Pass the image,color for pointers and ranges based on the current position.
  //same image/color for each state is used for all pointers. Different image for each state of each pointer can also be used.
  function positionChange(args: ChangeEventArgs) {
    switch (args.value) {
      case 0:
        updatePointerImage( UnFinishedPointer, UnFinishedPointer, UnFinishedPointer, UnFinishedPointer );
        updatePointerColor( UnFinishedColor, UnFinishedColor, UnFinishedColor, UnFinishedColor );
        updateRangeColor( UnFinishedColor, UnFinishedColor, UnFinishedColor );
        break;
      case 1:
        updatePointerImage( CurrentActionPointer, UnFinishedPointer, UnFinishedPointer, UnFinishedPointer );
        updatePointerColor( CurrentActionColor, UnFinishedColor, UnFinishedColor, UnFinishedColor );
        updateRangeColor(UnFinishedColor, UnFinishedColor, UnFinishedColor);
        break;
      case 2:
        updatePointerImage( FinishedPointer, CurrentActionPointer, UnFinishedPointer, UnFinishedPointer );
        updatePointerColor( FinishedColor, CurrentActionColor, UnFinishedColor, UnFinishedColor );
        updateRangeColor(FinishedColor, UnFinishedColor, UnFinishedColor);
        break;
      case 3:
        updatePointerImage( FinishedPointer, FinishedPointer, CurrentActionPointer, UnFinishedPointer );
        updatePointerColor( FinishedColor, FinishedColor, CurrentActionColor, UnFinishedColor );
        updateRangeColor(FinishedColor, FinishedColor, UnFinishedColor);
        break;
      case 4:
        updatePointerImage(FinishedPointer, FinishedPointer, FinishedPointer, CurrentActionPointer );
        updatePointerColor(FinishedColor, FinishedColor, FinishedColor, CurrentActionColor );
        updateRangeColor(FinishedColor, FinishedColor, FinishedColor);
        break;
      case 5:
        updatePointerImage( FinishedPointer, FinishedPointer, FinishedPointer, FinishedPointer );
        updatePointerColor( FinishedColor, FinishedColor, FinishedColor, FinishedColor );
        updateRangeColor(FinishedColor, FinishedColor, FinishedColor);
        break;
      default:
        break;
    }
  }
  
  //Update the pointer images based on the current position
  function updatePointerImage (img1: string, img2: string, img3: string, img4: string ):void {
    gauge.axes[0].pointers[0].imageUrl = img1;
    gauge.axes[0].pointers[1].imageUrl = img2;
    gauge.axes[0].pointers[2].imageUrl = img3;
    gauge.axes[0].pointers[3].imageUrl = img4;
  }

  //Update the pointer color based on the current position
  function updatePointerColor(color1: string, color2: string, color3: string, color4: string ):void {
    gauge3.axes[0].pointers[0].color = color1;
    gauge3.axes[0].pointers[1].color = color2;
    //pointer 3 is skipped in the gauge, hence the pointer[2] is denoting the ponter 4.    
    gauge3.axes[0].pointers[2].color = color4;
  }

  //Update the range color based on the current position
  function updateRangeColor(color1: string, color2: string, color3: string):void {
    gauge.axes[0].ranges[0].color = color1;
    gauge.axes[0].ranges[1].color = color2;
    gauge.axes[0].ranges[2].color = color3;
  
    gauge2.axes[0].ranges[0].color = color1;
    gauge2.axes[0].ranges[1].color = color2;
    gauge2.axes[0].ranges[2].color = color3;
  
    gauge3.axes[0].ranges[0].color = color1;
    gauge3.axes[0].ranges[1].color = color2;
    gauge3.axes[0].ranges[2].color = color3;
  }
  