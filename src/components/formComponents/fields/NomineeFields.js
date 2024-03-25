import React, { useState } from 'react';
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
import DateFormat from '../../actions/DateFormat';
import DOBValidations from '../../actions/DOBValidations';
import Dropdowns from '../reusableComponents/Dropdowns';

function NomineeFields({ classToBeApplied, formName, formData }) {
  const salutationDDValues = Dropdowns('title');
  const relationshipDDValues = Dropdowns('nomineeRelationship');
  const yesNoDDValues = Dropdowns('yesNo');
  const genderDDValues = Dropdowns('gender');
  const nomCountry = 'INDIA';

  const [isNomineeMinor, setIsNomineeMinor] = useState('');

  function handleChangeNomSalutation(e) {
    formData.title_nominee = UpCase(e.target.value);
  }
  function handleChangeNomineeFirstName(e) {
    formData.fname_nominee = UpCase(e.target.value);
  }
  function handleChangeNomineeMiddleName(e) {
    formData.mname_nominee = UpCase(e.target.value);
  }
  function handleChangeNomineeLastName(e) {
    formData.lname_nominee = UpCase(e.target.value);
  }
  function handleChangeNomineeMobile(e) {
    formData.mobile_nominee = e.target.value;
  }
  function handleChangeNomineeEmail(e) {
    formData.email_nominee = UpCase(e.target.value);
  }
  function handleNomineeRelation(e) {
    formData.relationship_nominee = UpCase(e.target.value);
    if (formData.relationship_nominee === 'OTHER') {
      document.getElementById('nomOthRelationDiv').classList.remove('hide-me');
    } else {
      document.getElementById('nomOthRelationDiv').classList.add('hide-me');
    }
  }
  function handleChangeNomineeOthRelation(e) {
    formData.other_relationship_nominee = UpCase(e.target.value);
  }
  function handleNomineeAddr(e) {
    formData.nominee_addr_diff_as_acc_holder = UpCase(e.target.value);
    if (e.target.value === 'NO') {
      document.getElementById('nomineeAddrDiv').classList.add('hide-me');
    } else {
      document.getElementById('nomineeAddrDiv').classList.remove('hide-me');
      formData.address_nominee = '';
      formData.city_nominee = '';
      formData.district_nominee = '';
      formData.pin_nominee = '';
      formData.state_nominee = '';
      formData.country_nominee = nomCountry;
    }
  }
  function handleChangeNomAddr(e) {
    formData.address_nominee = UpCase(e.target.value);
  }
  function handleChangeNomCity(e) {
    formData.city_nominee = UpCase(e.target.value);
  }
  function handleChangeNomDistrict(e) {
    formData.district_nominee = UpCase(e.target.value);
  }
  function handleChangeNomPin(e) {
    formData.pin_nominee = e.target.value;
  }
  function handleChangeNomState(e) {
    formData.state_nominee = UpCase(e.target.value);
  }
  function handleNomDOBChange(e) {
    formData.dob_nominee = UpCase(e.target.value);
    formData.age_nominee = DOBValidations(
      formData.dob_nominee,
      formName,
      'sendAge'
    );
    if (formData.age_nominee < 18) {
      document.getElementById('guardianDiv').classList.remove('hide-me');
      setIsNomineeMinor('YES');
      formData.minor_nominee = 'YES';
    } else {
      document.getElementById('guardianDiv').classList.add('hide-me');
      setIsNomineeMinor('NO');
      formData.minor_nominee = 'NO';
    }
  }
  function handleChangeNomineeGender(e) {
    formData.gender_nominee = UpCase(e.target.value);
  }
  function handleChangeNomineeAadhar(e) {
    formData.gender_aadhar = UpCase(e.target.value);
  }

  function handleChangeGuardianSalutation(e) {
    formData.title_guardian = UpCase(e.target.value);
  }
  function handleChangeGuardianFirstName(e) {
    formData.fname_guardian = UpCase(e.target.value);
  }
  function handleChangeGuardianMiddleName(e) {
    formData.mname_guardian = UpCase(e.target.value);
  }
  function handleChangeGuardianLastName(e) {
    formData.lname_guardian = UpCase(e.target.value);
  }
  function handleChangeGuardianMobile(e) {
    formData.mobile_guardian = UpCase(e.target.value);
  }
  function handleChangeGuardianRela(e) {
    formData.relationship_guardian = UpCase(e.target.value);
    if (formData.relationship_guardian === 'OTHER') {
      document.getElementById('guardianOthRelaDiv').classList.remove('hide-me');
    } else {
      document.getElementById('guardianOthRelaDiv').classList.add('hide-me');
      formData.other_relationship_guardian = '';
    }
  }
  function handleChangeGuardianRelaOth(e) {
    formData.other_relationship_guardian = UpCase(e.target.value);
  }
  function handleChangeGuardianDOB(e) {
    formData.dob_guardian = UpCase(e.target.value);
  }
  function handleChangeGuardianAddr(e) {
    formData.address_guardian = UpCase(e.target.value);
  }
  function handleChangeGuardianCity(e) {
    formData.city_guardian = UpCase(e.target.value);
  }
  function handleChangeGuardianDistrict(e) {
    formData.district_guardian = UpCase(e.target.value);
  }
  function handleChangeGuardianPin(e) {
    formData.pin_guardian = UpCase(e.target.value);
  }
  function handleChangeGuardianState(e) {
    formData.state_guardian = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="nomSalutation">Title *</InputLabel>
          <Select
            className={classToBeApplied}
            onChange={handleChangeNomSalutation}
            inputProps={{
              name: 'nomSalutation',
              id: 'nomSalutation',
            }}
          >
            {salutationDDValues.map((value, index) => {
              return (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'nomFirstName',
              id: 'nomFirstName',
              maxLength: 30,
            }}
            label="First Name"
            onChange={handleChangeNomineeFirstName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'nomMiddleName',
              id: 'nomMiddleName',
              maxLength: 30,
            }}
            label="Middle Name"
            onChange={handleChangeNomineeMiddleName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'nomLastName',
              id: 'nomLastName',
              maxLength: 30,
            }}
            label="Last Name"
            onChange={handleChangeNomineeLastName}
          />
        </Grid>
      </Grid>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <TextField
            type="number"
            className={classToBeApplied}
            inputProps={{
              name: 'nomineeMobile',
              id: 'nomineeMobile',
              maxLength: 10,
            }}
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 10);
            }}
            label="Mobile No."
            onChange={handleChangeNomineeMobile}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'nomineeEmail',
              id: 'nomineeEmail',
            }}
            label="Email ID"
            onChange={handleChangeNomineeEmail}
          />
        </Grid>
        <Grid item xs={3}>
          <InputLabel htmlFor="nomineeRela">Relationship *</InputLabel>
          <Select
            required
            className={classToBeApplied}
            onChange={handleNomineeRelation}
            inputProps={{
              name: 'nomineeRela',
              id: 'nomineeRela',
            }}
          >
            {relationshipDDValues.map((value, index) => {
              return (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid item xs={3}>
          <div id="nomOthRelationDiv" className="hide-me">
            <TextField
              required
              className={classToBeApplied}
              id="nomOthRelation"
              name="nomOthRelation"
              label="Other"
              onChange={handleChangeNomineeOthRelation}
            />
          </div>
        </Grid>
      </Grid>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            id="nomDob"
            label="DOB"
            type="date"
            onChange={handleNomDOBChange}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              max: DateFormat(new Date()),
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            value={isNomineeMinor}
            inputProps={{
              name: 'nomineeMinor',
              id: 'nomineeMinor',
              readOnly: true,
            }}
            label="Is Nominee a Minor?"
          />
        </Grid>
        <Grid item xs={3}>
          <InputLabel htmlFor="nomGender">Gender *</InputLabel>
          <Select
            className={classToBeApplied}
            onChange={handleChangeNomineeGender}
            inputProps={{
              name: 'nomGender',
              id: 'nomGender',
            }}
          >
            {genderDDValues.map((value, index) => {
              return (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            id="nomAadhar"
            label="Aadhar Number"
            type="number"
            onChange={handleChangeNomineeAadhar}
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 16);
            }}
          />
        </Grid>
      </Grid>
      <Grid container className="textFieldFormTop">
        <Grid item xs={5}>
          <InputLabel htmlFor="isNomAddrSame">
            Is Nominee's Address different than Account Holder's Address? *
          </InputLabel>
          <Select
            className={classToBeApplied}
            onChange={handleNomineeAddr}
            inputProps={{
              name: 'isNomAddrSame',
              id: 'isNomAddrSame',
            }}
          >
            {yesNoDDValues.map((value, index) => {
              return (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
      </Grid>
      <div id="nomineeAddrDiv" className="hide-me">
        <Grid container className="textFieldFormTop">
          <Grid container className="textFieldFormTop">
            <h5>Nominee Address</h5>
          </Grid>
          <Grid container className="textFieldFormTop">
            <Grid item xs={6}>
              <TextField
                required
                className={classToBeApplied}
                inputProps={{
                  name: 'nomAddr',
                  id: 'nomAddr',
                }}
                label="Address"
                onChange={handleChangeNomAddr}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                className={classToBeApplied}
                inputProps={{
                  name: 'nomCity',
                  id: 'nomCity',
                }}
                label="City"
                onChange={handleChangeNomCity}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                className={classToBeApplied}
                inputProps={{
                  name: 'nomDist',
                  id: 'nomDist',
                }}
                label="District"
                onChange={handleChangeNomDistrict}
              />
            </Grid>
          </Grid>
          <Grid container className="textFieldFormTop">
            <Grid item xs={3}>
              <TextField
                required
                className={classToBeApplied}
                type="number"
                inputProps={{
                  name: 'nomPin',
                  id: 'nomPin',
                  maxLength: 6,
                }}
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 6);
                }}
                label="Pin Code"
                onChange={handleChangeNomPin}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                required
                className={classToBeApplied}
                inputProps={{
                  name: 'nomState',
                  id: 'nomState',
                }}
                label="State"
                onChange={handleChangeNomState}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                required
                className={classToBeApplied}
                inputProps={{
                  name: 'nomCountry',
                  id: 'nomCountry',
                  readOnly: true,
                }}
                value={nomCountry}
                label="Country"
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div id="guardianDiv" className="hide-me">
        <Grid container className="textFieldFormTop">
          <h5>Guardian</h5>
        </Grid>
        <Grid container className="textFieldFormTop">
          <Grid item xs={3}>
            <InputLabel htmlFor="guardianSalutation">Title *</InputLabel>
            <Select
              required
              className={classToBeApplied}
              onChange={handleChangeGuardianSalutation}
              inputProps={{
                name: 'guardianSalutation',
                id: 'guardianSalutation',
              }}
            >
              {salutationDDValues.map((value, index) => {
                return (
                  <MenuItem key={value} value={value}>
                    {value}
                  </MenuItem>
                );
              })}
            </Select>
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              className={classToBeApplied}
              inputProps={{
                name: 'guardianFirstName',
                id: 'guardianFirstName',
                maxLength: 30,
              }}
              label="First Name"
              onChange={handleChangeGuardianFirstName}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              className={classToBeApplied}
              inputProps={{
                name: 'guardianMiddleName',
                id: 'guardianMiddleName',
                maxLength: 30,
              }}
              label="Middle Name"
              onChange={handleChangeGuardianMiddleName}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              className={classToBeApplied}
              inputProps={{
                name: 'guardianLastName',
                id: 'guardianLastName',
                maxLength: 30,
              }}
              label="Last Name"
              onChange={handleChangeGuardianLastName}
            />
          </Grid>
        </Grid>
        <Grid container className="textFieldFormTop">
          <Grid item xs={3}>
            <TextField
              required
              type="number"
              className={classToBeApplied}
              inputProps={{
                name: 'guardianMobile',
                id: 'guardianMobile',
                maxLength: 10,
              }}
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 10);
              }}
              label="Mobile No."
              onChange={handleChangeGuardianMobile}
            />
          </Grid>
          <Grid item xs={3}>
            <InputLabel htmlFor="guardianRela">Relationship *</InputLabel>
            <Select
              required
              className={classToBeApplied}
              onChange={handleChangeGuardianRela}
              inputProps={{
                name: 'guardianRela',
                id: 'guardianRela',
              }}
            >
              {relationshipDDValues.map((value, index) => {
                return (
                  <MenuItem key={value} value={value}>
                    {value}
                  </MenuItem>
                );
              })}
            </Select>
          </Grid>
          <Grid item xs={3}>
            <div id="guardianOthRelaDiv" className="hide-me">
              <TextField
                required
                className={classToBeApplied}
                inputProps={{
                  name: 'guardianRelaOth',
                  id: 'guardianRelaOth',
                }}
                label="Other"
                onChange={handleChangeGuardianRelaOth}
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              type="date"
              className={classToBeApplied}
              inputProps={{
                name: 'guardianDOB',
                id: 'guardianDOB',
                max: DateFormat(new Date()),
              }}
              label="DOB"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChangeGuardianDOB}
            />
          </Grid>
        </Grid>
        <Grid container className="textFieldFormTop">
          <h5>Guardian Address</h5>
        </Grid>
        <Grid container className="textFieldFormTop">
          <Grid item xs={6}>
            <TextField
              required
              className={classToBeApplied}
              inputProps={{
                name: 'guardianAddr',
                id: 'guardianAddr',
              }}
              label="Address"
              onChange={handleChangeGuardianAddr}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              className={classToBeApplied}
              inputProps={{
                name: 'guardianCity',
                id: 'guardianCity',
              }}
              label="City"
              onChange={handleChangeGuardianCity}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              className={classToBeApplied}
              inputProps={{
                name: 'guardianDist',
                id: 'guardianDist',
              }}
              label="District"
              onChange={handleChangeGuardianDistrict}
            />
          </Grid>
        </Grid>
        <Grid container className="textFieldFormTop">
          <Grid item xs={3}>
            <TextField
              required
              className={classToBeApplied}
              type="number"
              inputProps={{
                name: 'guardianPin',
                id: 'guardianPin',
                maxLength: 6,
              }}
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 6);
              }}
              label="Pin Code"
              onChange={handleChangeGuardianPin}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              className={classToBeApplied}
              inputProps={{
                name: 'guardianState',
                id: 'guardianState',
              }}
              label="State"
              onChange={handleChangeGuardianState}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              className={classToBeApplied}
              inputProps={{
                name: 'guardianCountry',
                id: 'guardianCountry',
                readOnly: true,
              }}
              value={nomCountry}
              label="Country"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default NomineeFields;
