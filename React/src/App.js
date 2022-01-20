import FinishedPointer from './Images/FinishedTick.png';
import CurrentActionPointer from './Images/CurrentAction.png';
import UnFinishedPointer from './Images/UnfinishedTick.png';
import Stage1 from './Images/1baloon.png';
import Stage2 from './Images/2baloon.png';
import Stage3 from './Images/3baloon.png';
import Stage4 from './Images/4baloon.png';
import './App.css';
import { LinearGaugeComponent, AxesDirective, AxisDirective,RangesDirective,RangeDirective, PointersDirective, PointerDirective } from '@syncfusion/ej2-react-lineargauge';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { useRef } from 'react';

function App() {
const gauge1 = useRef(null);
const gauge2 = useRef(null);
const gauge3 = useRef(null);

//Provides label name for each stage
function axisLabelRender(args) {
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
  function positionChange(args) {
    switch (args.value) {
        case 0:
            updatePointerImage(UnFinishedPointer, UnFinishedPointer, UnFinishedPointer, UnFinishedPointer);
            updatePointerColor(UnFinishedColor, UnFinishedColor, UnFinishedColor, UnFinishedColor);
            updateRangeColor(UnFinishedColor, UnFinishedColor, UnFinishedColor);
            break;
        case 1:
            updatePointerImage(CurrentActionPointer, UnFinishedPointer, UnFinishedPointer, UnFinishedPointer);
            updatePointerColor(CurrentActionColor, UnFinishedColor, UnFinishedColor, UnFinishedColor);
            updateRangeColor(UnFinishedColor, UnFinishedColor, UnFinishedColor);
            break;
        case 2:
            updatePointerImage(FinishedPointer, CurrentActionPointer, UnFinishedPointer, UnFinishedPointer);
            updatePointerColor(FinishedColor, CurrentActionColor, UnFinishedColor, UnFinishedColor);
            updateRangeColor(FinishedColor, UnFinishedColor, UnFinishedColor);
            break;
        case 3:
            updatePointerImage(FinishedPointer, FinishedPointer, CurrentActionPointer, UnFinishedPointer);
            updatePointerColor(FinishedColor, FinishedColor, CurrentActionColor, UnFinishedColor);
            updateRangeColor(FinishedColor, FinishedColor, UnFinishedColor);
            break;
        case 4:
            updatePointerImage(FinishedPointer, FinishedPointer, FinishedPointer, CurrentActionPointer);
            updatePointerColor(FinishedColor, FinishedColor, FinishedColor, CurrentActionColor);
            updateRangeColor(FinishedColor, FinishedColor, FinishedColor);
            break;
        case 5:
            updatePointerImage(FinishedPointer, FinishedPointer, FinishedPointer, FinishedPointer);
            updatePointerColor(FinishedColor, FinishedColor, FinishedColor, FinishedColor);
            updateRangeColor(FinishedColor, FinishedColor, FinishedColor);
            break;
        default:
            break;
    }
}
//Update the pointer images based on the current position
function updatePointerImage(img1, img2, img3, img4) {
    gauge1.current.axes[0].pointers[0].imageUrl = img1;
    gauge1.current.axes[0].pointers[1].imageUrl = img2;
    gauge1.current.axes[0].pointers[2].imageUrl = img3;
    gauge1.current.axes[0].pointers[3].imageUrl = img4;
}
//Update the pointer color based on the current position
function updatePointerColor(color1, color2, color3, color4) {
    gauge3.current.axes[0].pointers[0].color = color1;
    gauge3.current.axes[0].pointers[1].color = color2; 
    //pointer 3 is skipped in the gauge, hence the pointer[2] is denoting the ponter 4. 
    gauge3.current.axes[0].pointers[2].color = color4;
}
//Update the pointer color based on the current position
function updateRangeColor(color1, color2, color3) {
    gauge1.current.axes[0].ranges[0].color = color1;
    gauge1.current.axes[0].ranges[1].color = color2;
    gauge1.current.axes[0].ranges[2].color = color3;
    gauge2.current.axes[0].ranges[0].color = color1;
    gauge2.current.axes[0].ranges[1].color = color2;
    gauge2.current.axes[0].ranges[2].color = color3;
    gauge3.current.axes[0].ranges[0].color = color1;
    gauge3.current.axes[0].ranges[1].color = color2;
    gauge3.current.axes[0].ranges[2].color = color3;
}

let FinishedColor = '#f2a92f';
let UnFinishedColor = '#eeeeee';
let CurrentActionColor = '#79564e';

//line , majorTicks, minorTicks are not required in UI, hence providing transparent color and width as 0
let axisline={ width:0,color:"transparent"}
let majorTick={ interval:50,width:0, color:"transparent"}
let minorTick={ interval:50,width:0, color:"transparent"}

// Adding offset to position at the label at desired spot
let label={offset:70}

return (
    <div className='control-pane'>
        <div className='control-section'>
            <div className="sample-container">
                <div className="textbox-container">
                    <NumericTextBoxComponent id="numeric" change={positionChange} format='#' value={3} min={0} max={5} placeholder="Pick the current position" strp={1} width="150px" floatLabelType="Always"/>
                </div>
                <div className="gauge-container">
                    <LinearGaugeComponent  id='linear1' ref={gauge1} axisLabelRender={axisLabelRender}  height="200px" title="Stage Progression" orientation="Horizontal">
                        <AxesDirective>
                         {/* First axis to show the different stages and progress */}
                            <AxisDirective line={axisline} minorTicks={minorTick} majorTicks={majorTick} labelStyle={label} minimum={0} maximum={150}>
                                <PointersDirective>
                                    <PointerDirective type="Marker" markerType="Image" value="0" offset="-5" imageUrl={FinishedPointer} height= {30} width= {30}></PointerDirective>
                                    <PointerDirective type="Marker" markerType="Image" value="50" offset="-5" imageUrl={FinishedPointer} height= {30} width= {30}></PointerDirective>
                                    <PointerDirective type="Marker" markerType="Image" value="100" offset="-5" imageUrl={CurrentActionPointer} height= {30} width= {30}></PointerDirective>
                                    <PointerDirective type="Marker" markerType="Image" value="150" offset="-5" imageUrl={UnFinishedPointer} height= {30} width= {30}></PointerDirective>
                                </PointersDirective>
                                {/* Ranges to connect the different stages in the UI.
                                Increased start by 3 and reduced end by 3 to provide space between the pointer image and the range bar */}
                                <RangesDirective>
                                    <RangeDirective start={3} end={47} startWidth={8} endWidth={8} color={FinishedColor}>
                                    </RangeDirective>
                                    <RangeDirective start={53} end={97} startWidth={8} endWidth={8} color={FinishedColor}>
                                    </RangeDirective>
                                    <RangeDirective start={103} end={147} startWidth={8} endWidth={8} color={UnFinishedColor}>
                                    </RangeDirective>
                                </RangesDirective>
                            </AxisDirective>
                            {/* second axis to add images in the UI for each stage. */}
                            <AxisDirective line={axisline} minorTicks={minorTick} majorTicks={majorTick} labelStyle={label} minimum={200} maximum={350}>
                                {/* Shows different images for each stage */}
                                <PointersDirective>
                                    <PointerDirective type="Marker" markerType="Image" value="200" offset="-10" imageUrl={Stage1} height={50} width={50}></PointerDirective>
                                    <PointerDirective type="Marker" markerType="Image" value="250" offset="-10" imageUrl={Stage2} height={50} width={50}></PointerDirective>
                                    <PointerDirective type="Marker" markerType="Image" value="300" offset="-10" imageUrl={Stage3} height={50} width={50}></PointerDirective>
                                    <PointerDirective type="Marker" markerType="Image" value="350" offset="-10" imageUrl={Stage4} height={50} width={50}></PointerDirective>
                                </PointersDirective>
                            </AxisDirective>
                        </AxesDirective>
                    </LinearGaugeComponent>
                </div>
                <div className="gauge-container">
                    <LinearGaugeComponent  id='linear2' ref={gauge2} axisLabelRender={axisLabelRender}  height="200px" title="Stage Progression" orientation="Horizontal">
                        <AxesDirective>
                            <AxisDirective line={axisline} minorTicks={minorTick} majorTicks={majorTick} labelStyle={label} minimum={0} maximum={150}>
                                {/* Shows different images for each stage */}
                                <PointersDirective>
                                    <PointerDirective type="Marker" markerType="Image" value="0" imageUrl={Stage1} height= {30} width= {30}></PointerDirective>
                                    <PointerDirective type="Marker" markerType="Image" value="50" imageUrl={Stage2} height= {30} width= {30}></PointerDirective>
                                    <PointerDirective type="Marker" markerType="Image" value="100" imageUrl={Stage3} height= {30} width= {30}></PointerDirective>
                                    <PointerDirective type="Marker" markerType="Image" value="150" imageUrl={Stage4} height= {30} width= {30}></PointerDirective>
                                </PointersDirective>
                                {/* Ranges to connect the different stages in the UI.*/}
                                <RangesDirective>
                                    <RangeDirective start={0} end={50} startWidth={8} endWidth={8} color={FinishedColor}>
                                    </RangeDirective>
                                    <RangeDirective start={50} end={100} startWidth={8} endWidth={8} color={FinishedColor}>
                                    </RangeDirective>
                                    <RangeDirective start={100} end={150} startWidth={8} endWidth={8} color={UnFinishedColor}>
                                    </RangeDirective>
                                </RangesDirective>
                            </AxisDirective>
                        </AxesDirective>
                    </LinearGaugeComponent>
                </div>
                <div className="gauge-container">
                    <LinearGaugeComponent  id='linear3' ref={gauge3} axisLabelRender={axisLabelRender}  height="200px" title="Stage Progression" orientation="Horizontal">
                        <AxesDirective>
                            <AxisDirective line={axisline} minorTicks={minorTick} majorTicks={majorTick} labelStyle={label} minimum={0} maximum={150}>
                                {/* Pointer to denote the different stages. Different colored circles are used based on current state of the stage (Finished, in-progress, Unfinished).
                                Stages can be denoted without pointers also. pointerfor stage 3 (Value:100) is skipped. */}
                                <PointersDirective>
                                    <PointerDirective type="Marker" offset="-19" markerType="Circle" value="0" color={FinishedColor} height= {30} width= {30}></PointerDirective>
                                    <PointerDirective type="Marker" offset="-19" markerType="Circle" value="50" color={FinishedColor} height= {30} width= {30}></PointerDirective>
                                    <PointerDirective type="Marker" offset="-19" markerType="Circle" value="150" color={UnFinishedColor} height= {30} width= {30}></PointerDirective>
                                </PointersDirective>
                                {/* Ranges to connect the different stages in the UI.
                                Increased start by 3 and reduced end by 3 to provide space between the pointer image and the range bar */}
                                <RangesDirective>
                                    <RangeDirective start={3} end={47} startWidth={8} endWidth={8} color={FinishedColor}>
                                    </RangeDirective>
                                    <RangeDirective start={53} end={100} startWidth={8} endWidth={8} color={FinishedColor}>
                                    </RangeDirective>
                                    <RangeDirective start={100} end={147} startWidth={8} endWidth={8} color={UnFinishedColor}>
                                    </RangeDirective>
                                </RangesDirective>
                            </AxisDirective>
                        </AxesDirective>
                    </LinearGaugeComponent>
                </div>
            </div>
        </div>
    </div>);
}

export default App;
