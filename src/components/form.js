import React from 'react';
import Button from "@material-ui/core/Button";
import styled from 'styled-components';
import { TextField } from '@material-ui/core';

const StyledTextField = styled(TextField)`
  label.Mui-focused {
    color: green;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: red;
    }
    &:hover fieldset {
      border-color: yellow;
    }
    &.Mui-focused fieldset {
      border-color: green;
    }
  }
`;
export class AppForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            errors: {
                name: '',
                description: ''
            }
        }
    }

    render() {
        return(
            <div className="ff">
                    <StyledTextField
                        onChange={ (e, name ) => {
                            name = e.target.value
                            this.setState({ name})

                        }}
                        label="Name" variant="outlined"  />

                    <StyledTextField
                        onChange={ (e, description ) => {
                            description = e.target.value
                            this.setState({ description})

                        }}

                        label="Description" variant="outlined"  />

                <Button
                    onClick={ this.onAdd.bind(this)

                    }
                    className="button"> Send</Button>
            </div>
        )
    }
    onAdd() {


        this.props.onAdd({
            name: this.state.name,
            description: this.state.description,
            checked: false
        })

        this.setState({name: '', description: ''})
    }

}
