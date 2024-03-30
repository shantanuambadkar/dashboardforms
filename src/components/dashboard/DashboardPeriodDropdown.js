import { useState } from 'react';
import { Grid, Select, MenuItem, InputLabel } from '@material-ui/core';
import UpCase from '../formComponents/fields/UpCase';
import '../../css/Common.css';
import '../../css/Fields.css';
import Dropdowns from '../formComponents/reusableComponents/Dropdowns';

function DashboardPeriodDropdown({ classToBeApplied, setDate }) {
  const periodDDVal = Dropdowns('dbPeriod');
  const [selectedPeriod, setSelectedPeriod] = useState('THIS MONTH');

  function handlePeriodChange(e) {
    setSelectedPeriod(UpCase(e.target.value));
    setDate(UpCase(e.target.value));
  }

  return (
    <Grid container className="textFieldFormTop">
      <Grid item xs={12}>
        <InputLabel id="periodDropdown" htmlFor="period">
          Period *
        </InputLabel>
        <Select
          required
          className={classToBeApplied}
          inputProps={{
            name: 'period',
            id: 'period',
          }}
          value={selectedPeriod}
          onChange={handlePeriodChange}
        >
          {periodDDVal.map((value) => {
            return (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
    </Grid>
  );
}

export default DashboardPeriodDropdown;
