<template>
  <div id="app">
    <div class="sample-container">
      <div class="textbox-container">
        <ejs-numerictextbox id="numeric" :value="value" :step="step" :min="min" :max="max" placeholder="Pick the current position"
          floatLabelType="Always" format="#" width="150" :change="positionChange"></ejs-numerictextbox>
      </div>
      <div class="gauge-container">
        <ejs-lineargauge id="linear1" ref="gauge1" height="200px" title="Stage Progression" orientation="Horizontal" :axisLabelRender="axisLabelRender">
          <e-axes>
            <e-axis minimum="0" maximum="150" :line="axisline" :minorTicks="minorTick" :majorTicks="majorTick" :labelStyle="label">
              <e-pointers>
                <e-pointer type="Marker" markerType="Image" value="0" offset="-5" :imageUrl="FinishedPointer" height="30" width="30"></e-pointer>
                <e-pointer type="Marker" markerType="Image" value="50" offset="-5" :imageUrl="FinishedPointer" height="30" width="30"></e-pointer>
                <e-pointer type="Marker" markerType="Image" value="100" offset="-5" :imageUrl="CurrentActionPointer" height="30" width="30"></e-pointer>
                <e-pointer type="Marker" markerType="Image" value="150" offset="-5" :imageUrl="NotStartedPointer" height="30" width="30"></e-pointer>
              </e-pointers>
              <e-ranges>
                <e-range start="3" end="47" startWidth="8" endWidth="8" :color="FinishedColor"></e-range>
                <e-range start="53" end="97" startWidth="8" endWidth="8" :color="FinishedColor"></e-range>
                <e-range start="103" end="147" startWidth="8" endWidth="8" :color="NotStartedColor"></e-range>
              </e-ranges>
            </e-axis>
            <e-axis minimum="200" maximum="350" :line="axisline" :minorTicks="minorTick" :majorTicks="majorTick">
              <e-pointers>
                <e-pointer type="Marker" markerType="Image" value="200" offset="-10" :imageUrl="Stage1" height="50" width="50"></e-pointer>
                <e-pointer type="Marker" markerType="Image" value="250" offset="-10" :imageUrl="Stage2" height="50" width="50"></e-pointer>
                <e-pointer type="Marker" markerType="Image" value="300" offset="-10" :imageUrl="Stage3" height="50" width="50"></e-pointer>
                <e-pointer type="Marker" markerType="Image" value="350" offset="-10" :imageUrl="Stage4" height="50" width="50"></e-pointer>
              </e-pointers>
            </e-axis>
          </e-axes>
        </ejs-lineargauge>
      </div>
      <div class="gauge-container">
        <ejs-lineargauge id="linear2" ref="gauge2" height="200px" title="Stage Progression" orientation="Horizontal" :axisLabelRender="axisLabelRender">
          <e-axes>
            <e-axis minimum="0" maximum="150" :line="axisline" :minorTicks="minorTick" :majorTicks="majorTick" :labelStyle="label">
              <e-pointers>
                <e-pointer type="Marker" markerType="Image" value="0" offset="-5" :imageUrl="Stage1" height="30" width="30"></e-pointer>
                <e-pointer type="Marker" markerType="Image" value="50" offset="-5" :imageUrl="Stage2" height="30" width="30"></e-pointer>
                <e-pointer type="Marker" markerType="Image" value="100" offset="-5" :imageUrl="Stage3" height="30" width="30"></e-pointer>
                <e-pointer type="Marker" markerType="Image" value="150" offset="-5" :imageUrl="Stage4" height="30" width="30"></e-pointer>
              </e-pointers>
              <e-ranges>
                <e-range start="0" end="50" startWidth="8" endWidth="8" :color="FinishedColor"></e-range>
                <e-range start="50" end="100" startWidth="8" endWidth="8" :color="FinishedColor"></e-range>
                <e-range start="100" end="150" startWidth="8" endWidth="8" :color="NotStartedColor"></e-range>
              </e-ranges>
            </e-axis>
          </e-axes>
        </ejs-lineargauge>
      </div>
      <div class="gauge-container">
        <ejs-lineargauge id="linear3" ref="gauge3" height="200px" title="Stage Progression" orientation="Horizontal" :axisLabelRender="axisLabelRender">
          <e-axes>
            <e-axis minimum="0" maximum="150" :line="axisline" :minorTicks="minorTick" :majorTicks="majorTick" :labelStyle="label">
              <e-pointers>
                <e-pointer type="Marker" markerType="Circle" value="0" offset="-14" :color="FinishedColor"></e-pointer>
                <e-pointer type="Marker" markerType="Circle" value="50" offset="-14" :color="FinishedColor"></e-pointer>
                <e-pointer type="Marker" markerType="Circle" value="150" offset="-14" :color="NotStartedColor"></e-pointer>
              </e-pointers>
              <e-ranges>
                <e-range start="3" end="47" startWidth="8" endWidth="8" :color="FinishedColor"></e-range>
                <e-range start="53" end="100" startWidth="8" endWidth="8" :color="FinishedColor"></e-range>
                <e-range start="100" end="147" startWidth="8" endWidth="8" :color="NotStartedColor"></e-range>
              </e-ranges>
            </e-axis>
          </e-axes>
        </ejs-lineargauge>
      </div>
    </div>
  </div>
</template>
<script>
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import {  LinearGaugeComponent,  AxesDirective,  AxisDirective,  RangesDirective,  RangeDirective,  PointersDirective,  PointerDirective} from "@syncfusion/ej2-vue-lineargauge";
export default {
  name: "App",
  components: {
    "ejs-numerictextbox": NumericTextBoxComponent,
    "ejs-lineargauge": LinearGaugeComponent,
    "e-axes": AxesDirective,
    "e-axis": AxisDirective,
    "e-ranges": RangesDirective,
    "e-range": RangeDirective,
    "e-pointers": PointersDirective,
    "e-pointer": PointerDirective,
  },
  data() {
    return {
      min: 0,
      max: 5,
      value: 3,
      step: 1,

      FinishedPointer: require("./assets/FinishedTick.png"),
      CurrentActionPointer: require("./assets/CurrentAction.png"),
      NotStartedPointer: require("./assets/UnfinishedTick.png"),

      Stage1: require("./assets/1baloon.png"),
      Stage2: require("./assets/2baloon.png"),
      Stage3: require("./assets/3baloon.png"),
      Stage4: require("./assets/4baloon.png"),

      FinishedColor: "#f2a92f",
      NotStartedColor: "#eeeeee",
      CurrentActionColor: "#79564e",

  //line , majorTicks, minorTicks are not required in UI, hence providing transparent color and width as 0
      axisline: { width: 0, color: "transparent" },
      majorTick: { interval: 50, width: 0, color: "transparent" },
      minorTick: { interval: 50, width: 0, color: "transparent" },
  // Adding offset to position at the label at desired spot
      label: { offset: 70 },
    };
  },
  methods: {
  //Provides label name for each stage
    axisLabelRender: function (args) {
      if (args.value === 0) {
        args.text = "Stage 1";
      } else if (args.value === 50) {
        args.text = "Stage 2";
      } else if (args.value === 100) {
        args.text = "Stage 3";
      } else if (args.value === 150) {
        args.text = "Stage 4";
      } else {
  //Provides label name for each stage
        args.cancel = true;
      }
    },
  //Pass the image,color for pointers and ranges based on the current position.
  //same image/color for each state is used for all pointers. Different image for each state of each pointer can also be used.
    positionChange: function (args) {
      switch (args.value) {
        case 0:
          this.updatePointerImage( this.NotStartedPointer, this.NotStartedPointer, this.NotStartedPointer, this.NotStartedPointer );
          this.updatePointerColor( this.NotStartedColor, this.NotStartedColor, this.NotStartedColor, this.NotStartedColor );
          this.updateRangeColor( this.NotStartedColor, this.NotStartedColor, this.NotStartedColor );
          break; 
        case 1:
          this.updatePointerImage( this.CurrentActionPointer, this.NotStartedPointer, this.NotStartedPointer, this.NotStartedPointer );
          this.updatePointerColor( this.CurrentActionColor, this.NotStartedColor, this.NotStartedColor, this.NotStartedColor );
          this.updateRangeColor( this.NotStartedColor, this.NotStartedColor, this.NotStartedColor );
          break;
        case 2:
          this.updatePointerImage( this.FinishedPointer, this.CurrentActionPointer, this.NotStartedPointer, this.NotStartedPointer );
          this.updatePointerColor( this.FinishedColor, this.CurrentActionColor, this.NotStartedColor, this.NotStartedColor );
          this.updateRangeColor( this.FinishedColor, this.NotStartedColor, this.NotStartedColor );
          break;
        case 3:
          this.updatePointerImage( this.FinishedPointer, this.FinishedPointer, this.CurrentActionPointer, this.NotStartedPointer );
          this.updatePointerColor( this.FinishedColor, this.FinishedColor, this.CurrentActionColor, this.NotStartedColor );
          this.updateRangeColor( this.FinishedColor, this.FinishedColor, this.NotStartedColor );
          break;
        case 4:
          this.updatePointerImage( this.FinishedPointer, this.FinishedPointer, this.FinishedPointer, this.CurrentActionPointer );
          this.updatePointerColor( this.FinishedColor, this.FinishedColor, this.FinishedColor, this.CurrentActionColor );
          this.updateRangeColor( this.FinishedColor, this.FinishedColor, this.FinishedColor );
          break;
        case 5:
          this.updatePointerImage( this.FinishedPointer, this.FinishedPointer, this.FinishedPointer, this.FinishedPointer );
          this.updatePointerColor( this.FinishedColor, this.FinishedColor, this.FinishedColor, this.FinishedColor );
          this.updateRangeColor( this.FinishedColor, this.FinishedColor, this.FinishedColor );
          break;
        default:
          break;
      }
    },
    //Update the pointer images based on the current position
    updatePointerImage: function (img1, img2, img3, img4) {
      this.$refs.gauge1.ej2Instances.axes[0].pointers[0].imageUrl = img1;
      this.$refs.gauge1.ej2Instances.axes[0].pointers[1].imageUrl = img2;
      this.$refs.gauge1.ej2Instances.axes[0].pointers[2].imageUrl = img3;
      this.$refs.gauge1.ej2Instances.axes[0].pointers[3].imageUrl = img4;
    },
    //Update the pointer color based on the current position
    updatePointerColor: function (color1, color2, color3, color4) {
      this.$refs.gauge3.ej2Instances.axes[0].pointers[0].color = color1;
      this.$refs.gauge3.ej2Instances.axes[0].pointers[1].color = color2;
        //pointer 3 is skipped in the gauge, hence the pointer[2] is denoting the ponter 4.   
      this.$refs.gauge3.ej2Instances.axes[0].pointers[2].color = color4;
    },
    //Update the range color based on the current position
    updateRangeColor: function (color1, color2, color3) {
      this.$refs.gauge1.ej2Instances.axes[0].ranges[0].color = color1;
      this.$refs.gauge1.ej2Instances.axes[0].ranges[1].color = color2;
      this.$refs.gauge1.ej2Instances.axes[0].ranges[2].color = color3;
      this.$refs.gauge2.ej2Instances.axes[0].ranges[0].color = color1;
      this.$refs.gauge2.ej2Instances.axes[0].ranges[1].color = color2;
      this.$refs.gauge2.ej2Instances.axes[0].ranges[2].color = color3;
      this.$refs.gauge3.ej2Instances.axes[0].ranges[0].color = color1;
      this.$refs.gauge3.ej2Instances.axes[0].ranges[1].color = color2;
      this.$refs.gauge3.ej2Instances.axes[0].ranges[2].color = color3;
    },
  },
};
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
  .sample-container {
    box-shadow: 0 0 10px;
    margin: 10px;
    border-radius: 5px;
  }
  .gauge-container,
  .textbox-container {
    box-shadow: 0 0 10px inset;
    padding: 15px;
    text-align: center;
  }
</style>