import React, { useEffect, useState } from 'react'
import { callEmployeesList } from '../Api/api';
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box} from '@mui/material'

function AutocompleteEmployList({setEmpID}) {
    const [employeesList, setEmployeesList] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
      await  callEmployeesList().then((res) => {  setEmployeesList(res); });
    };
    
  return (
    <div>
        <Autocomplete
            id="country-select-demo"
            fullWidth
            aria-required
            options={employeesList}
            autoHighlight
            onChange={(event, newValue) => {
              setEmpID(newValue._id);
            }}
            getOptionLabel={(option) => option.Name}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <img
                  loading="lazy"
                  width="20"
                  src={`https://ui-avatars.com/api/?name=${option.Name}`}
                  srcSet={`https://ui-avatars.com/api/?name=${option.Name}`}
                  alt=""
                />
                {option.Name} ({option.Email})
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose a Emplpyee"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
              />
            )}
          />
    </div>
  )
}

export default AutocompleteEmployList