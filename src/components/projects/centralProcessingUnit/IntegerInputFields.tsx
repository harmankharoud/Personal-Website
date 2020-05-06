import React from "react";

import { 
  IIntegerInputFieldProps,
  IIntegerInputFieldState
} from "../../../interface/projects/centralProcessingUnit/IIntegerInputFields";

import TextField from '@material-ui/core/TextField';

export default class IntegerInputFields extends React.Component<IIntegerInputFieldProps, IIntegerInputFieldState> {  

  // private 

  constructor(props: IIntegerInputFieldProps) {
    super(props);
    this.setState({
        inputProperties: {
          maxLength: 1
      }
    })
  }

  render() {
    return (
      <div className="numbers">
        <TextField 
          variant="outlined"
          className="num-1" 
          placeholder="X"
          color="secondary"
          defaultValue="9"
          // inputProps={this.state.inputProperties}
          error={false}
          label="Integers only"></TextField>
        <span>+</span>
        <TextField 
          variant="outlined"
          className="num-2" 
          placeholder="X" 
          color="secondary"
          defaultValue="9"
          // inputProps={this.state.inputProperties}
          error={false}
          label="Integers Only"></TextField>
      </div>
    )    
  }
}