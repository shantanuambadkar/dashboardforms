import {
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';
import UpCase from './UpCase';
import '../../../css/Common.css';
import '../../../css/Fields.css';
import Dropdowns from '../reusableComponents/Dropdowns';
import { useState } from 'react';

function BranchAndAccNoDropdown({
  formData,
  formName,
  classToBeApplied,
  onAccountTypeChange,
}) {
  const branchDDValues = Dropdowns('branch');
  const accTypeDDvalues = Dropdowns('savingsAccType');
  const operatingInstructionsDD = Dropdowns('accOperatingInst');
  const [oprInst, setOprInst] = useState('');
  const [othOprInst, setOthOprInst] = useState('');

  function handleBranchChange(e) {
    formData.branch = UpCase(e.target.value);
  }

  function handleChangeCustSBAccNo(e) {
    formData.sb_account_no = UpCase(e.target.value);
  }

  function handleChangeAccountType(e) {
    formData.account_type = UpCase(e.target.value);
    /* alert(formData.account_type); */
    if (e.target.value === 'JOINT') {
      onAccountTypeChange('jntholder1added');
      formData.joint_holder_flag = true;
      document.getElementById('operatingInstrDiv').classList.remove('hide-me');
    } else {
      onAccountTypeChange('jntholder1removed');
      formData.joint_holder_flag = false;
      document.getElementById('operatingInstrDiv').classList.add('hide-me');
      document
        .getElementById('operatingInstrOtherDiv')
        .classList.add('hide-me');
      setOprInst('');
      formData.transaction_instruction = '';
      setOthOprInst('');
      formData.other_transaction_instruction = '';
    }
  }

  function handleChangeOperatingInstr(e) {
    setOprInst(UpCase(e.target.value));
    formData.transaction_instruction = UpCase(e.target.value);
    if (e.target.value === 'OTHERS') {
      document
        .getElementById('operatingInstrOtherDiv')
        .classList.remove('hide-me');
    } else {
      document
        .getElementById('operatingInstrOtherDiv')
        .classList.add('hide-me');
      setOthOprInst('');
      formData.other_transaction_instruction = '';
    }
  }

  function handleChangeOthOprInst(e) {
    setOthOprInst(UpCase(e.target.value));
    formData.other_transaction_instruction = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <InputLabel id="branchDropdown" htmlFor="branch">
            Branch *
          </InputLabel>
          <Select
            required
            className={classToBeApplied}
            inputProps={{
              name: 'branch',
              id: 'branch',
            }}
            onChange={handleBranchChange}
            /* value={formData.title_account_holder} */
          >
            {branchDDValues.map((value) => {
              return (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        {formName === 'pmsby' ||
        formName === 'pmjjby' ||
        formName === 'fastag' ? (
          <Grid item xs={3}>
            <TextField
              required
              type="number"
              className={classToBeApplied}
              inputProps={{
                name: 'sb_account_no',
                id: 'sb_account_no',
              }}
              label="Saving Bank Account No."
              onChange={handleChangeCustSBAccNo}
            />
          </Grid>
        ) : (
          ''
        )}
        {formName === 'savings' ? (
          <Grid container className="textFieldFormTop">
            <Grid item xs={3}>
              <InputLabel htmlFor="accTypeDD">Account Type *</InputLabel>
              <Select
                required
                className={classToBeApplied}
                onChange={handleChangeAccountType}
                inputProps={{
                  name: 'accTypeDD',
                  id: 'accTypeDD',
                }}
              >
                {accTypeDDvalues.map((value) => {
                  return (
                    <MenuItem key={value} value={value}>
                      {value}
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid>
            <Grid item xs={3}>
              <div id="operatingInstrDiv" className="hide-me">
                <InputLabel htmlFor="operatingInstr">
                  Operating Instructions *
                </InputLabel>
                <Select
                  className={classToBeApplied}
                  onChange={handleChangeOperatingInstr}
                  inputProps={{
                    name: 'operatingInstr',
                    id: 'operatingInstr',
                  }}
                  value={oprInst}
                >
                  {operatingInstructionsDD.map((value) => {
                    return <MenuItem value={value}>{value}</MenuItem>;
                  })}
                </Select>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div id="operatingInstrOtherDiv" className="hide-me">
                <TextField
                  required
                  className={classToBeApplied}
                  inputProps={{
                    name: 'oprInstOth',
                    id: 'oprInstOth',
                  }}
                  label="Other Operating Instructions"
                  onChange={handleChangeOthOprInst}
                  value={othOprInst}
                />
              </div>
            </Grid>
          </Grid>
        ) : (
          ''
        )}
      </Grid>
    </div>
  );
}

export default BranchAndAccNoDropdown;
