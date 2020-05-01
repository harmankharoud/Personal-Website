import React from "react";

import {ISelectCPUInputProps} from "../../../interface/projects/centralProcessingUnit/ISelectCPUInput";

import {RadioGroup, FormControlLabel, Radio} from '@material-ui/core';

export default class SelectCPUInput extends React.Component<ISelectCPUInputProps> {

  private handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    const selectedInput = (event.target as HTMLInputElement).value;
    this.props.selectedInput(selectedInput);
  }

  render () {
    return (
      <div className="select-cpu-processing">
        <RadioGroup 
          className="select-input" 
          aria-label="quiz" 
          name="quiz" 
          onChange={this.handleRadioChange}
          defaultValue="numbers">
          <FormControlLabel value="numbers" control={<Radio />} label="Add Numbers!" />
          <FormControlLabel value="texts" control={<Radio />}   label="Print text!!" />
        </RadioGroup>
      </div>
    )
  }

}