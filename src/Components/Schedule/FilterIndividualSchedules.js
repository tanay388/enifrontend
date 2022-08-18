import { Button, Checkbox, Grid } from '@mui/material'
import React from 'react'
import AutocompleteEmployList from '../AutocompleteEmployList'

function FilterIndividualSchedules({setEmpID}) {
  return (
    <div>
        <Grid container spacing={2}>
            <Grid item sm={6} >
                <AutocompleteEmployList setEmpID={setEmpID}/>
            </Grid>
            <Grid item sm={6} style={{textAlign: "end"}}>
                <Button variant="contained">Generate Pdf</Button>
            </Grid>
        </Grid>
        
    </div>
  )
}

export default FilterIndividualSchedules