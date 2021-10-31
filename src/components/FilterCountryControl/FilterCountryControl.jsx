import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


const FilterCountryControl = ({ setCountryName, country }) => {

    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={country}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Country" />}
            getOptionLabel={(country) => `${country.Country}`}
            getOptionSelected={(option, value) => option.Country === value.Country}
            onChange={(event, value) => setCountryName(value.Country)}
        />
    );
}

export default FilterCountryControl;