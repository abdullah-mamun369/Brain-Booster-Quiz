// import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import './Options.css'

const Options = ({ options, resultHandler, correctAnswer }) => {

    return (
        <div className='col-lg-12 col-md-12 col-sm-12'>
            <div>
                {/* <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="" control={<Radio />} label={options} />
                    </RadioGroup>
                </FormControl> */}
                <button className='btn btn-outline-success fw-semibold w-100  rounded py-3 options' onClick={() => { resultHandler(options, correctAnswer) }}> {options}</button>
            </div>
        </div>
    );
};

export default Options;