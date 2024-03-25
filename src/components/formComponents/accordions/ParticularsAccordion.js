import React, { useState } from 'react';
import '../../../css/Common.css';
import '../../../css/Accordion.css';
import '../../../css/Fields.css';
import '../../../css/Buttons.css';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Button,
} from '@material-ui/core';
import CustomerNameFields from '../fields/CustomerNameFields';
import BranchAndAccNoDropdown from '../fields/BranchAndAccNoDropdown';
import CommunicationFields from '../fields/CommunicationFields';
import PANAadharDisability from '../fields/PANAadharDisability';
import DOBandAge from '../fields/DOBandAge';
import CorrospondenceAddress from '../fields/CorrospondenceAddress';
import PermanentAddress from '../fields/PermanentAddress';
import FatherNameFields from '../fields/FatherNameFields';
import MotherNameFields from '../fields/MotherNameFields';
import SpouseNameFields from '../fields/SpouseNameFields';
import EducationFields from '../fields/EducationFields';
import ReligionFields from '../fields/ReligionFields';
import CategoryFields from '../fields/CategoryFields';
import OccupationFields from '../fields/OccupationFields';
import JointHolderFields from '../fields/JointHolderFields';

function ParticularsAccordion({ accordionSummaryText, formData, formName }) {
  const [showJntHolder, setShowJntHolder] = useState('');
  const [isJntHolderButtonVisible, setIsJntHolderButtonVisible] =
    useState(true);
  const [jntHolderFields, setJntHolderFields] = useState([]);

  // To show Add Joint holder button
  function handleJntHolderValue(value) {
    /* alert(value); */
    setShowJntHolder(value);
    /* console.log(value, 'Dropdown value'); */
    if (value === 'jntholder1removed') {
      setJntHolderFields([]);
    }
  }

  // To show Joint Holder fields
  const handleAdd = () => {
    let jntHolderLength = jntHolderFields.length;
    formData.joint_holder_length = jntHolderLength;

    if (jntHolderLength < 4) {
      setJntHolderFields([...jntHolderFields, {}]);
    }
    if (jntHolderLength === 3) {
      setIsJntHolderButtonVisible(false);
    }
  };

  const handleDelete = (index) => {
    const updatedComponents = [...jntHolderFields];
    updatedComponents.splice(index, 1);

    let jntHolderLength = updatedComponents.length - 1;
    formData.joint_holder_length = jntHolderLength;

    setJntHolderFields(updatedComponents);
    if (jntHolderLength >= 4) {
      setIsJntHolderButtonVisible(false);
    } else {
      setIsJntHolderButtonVisible(true);
    }
  };

  return (
    <Accordion className="accordion-bg-color">
      <AccordionSummary>
        <h4 className="white-text">{accordionSummaryText}</h4>
      </AccordionSummary>
      <AccordionDetails className="white-color-background">
        <BranchAndAccNoDropdown
          formData={formData}
          classToBeApplied="field-width"
          formName={formName}
          onAccountTypeChange={handleJntHolderValue}
        />
        <CustomerNameFields
          formData={formData}
          classToBeApplied="field-width"
        />
        <CommunicationFields
          formData={formData}
          formName={formName}
          classToBeApplied="field-width"
        />
        <PANAadharDisability
          classToBeApplied="field-width"
          formData={formData}
          formName={formName}
        />
        <DOBandAge
          classToBeApplied="field-width"
          formData={formData}
          formName={formName}
        />
        {formName === 'savings' || formName === 'current' ? (
          <EducationFields
            formName={formName}
            formData={formData}
            classToBeApplied="field-width"
          />
        ) : (
          ''
        )}
        {formName === 'savings' || formName === 'current' ? (
          <ReligionFields
            formName={formName}
            formData={formData}
            classToBeApplied="field-width"
          />
        ) : (
          ''
        )}
        {formName === 'savings' || formName === 'current' ? (
          <CategoryFields
            formName={formName}
            formData={formData}
            classToBeApplied="field-width"
          />
        ) : (
          ''
        )}
        {formName === 'savings' || formName === 'current' ? (
          <OccupationFields
            formName={formName}
            formData={formData}
            classToBeApplied="field-width"
          />
        ) : (
          ''
        )}
        {formName === 'savings' || formName === 'current' ? (
          <FatherNameFields
            formName={formName}
            formData={formData}
            classToBeApplied="field-width"
          />
        ) : (
          ''
        )}
        {formName === 'savings' || formName === 'current' ? (
          <MotherNameFields
            formName={formName}
            formData={formData}
            classToBeApplied="field-width"
          />
        ) : (
          ''
        )}
        {formName === 'savings' || formName === 'current' ? (
          <SpouseNameFields
            formName={formName}
            formData={formData}
            classToBeApplied="field-width"
          />
        ) : (
          ''
        )}
        <CorrospondenceAddress
          classToBeApplied="field-width"
          formData={formData}
          formName={formName}
        />
        {formName === 'savings' || formName === 'current' ? (
          <PermanentAddress
            classToBeApplied="field-width"
            formName={formName}
            formData={formData}
          />
        ) : (
          ''
        )}
        {/* <div>{formData.joint_holder_length} Joint Holder Length</div> */}
        {showJntHolder === 'jntholder1added' &&
          jntHolderFields.map((_, index) => (
            <JointHolderFields
              key={index}
              index={index}
              onDelete={handleDelete}
              formData={formData}
              classToBeApplied="field-width"
            />
          ))}
        {showJntHolder === 'jntholder1added' && isJntHolderButtonVisible && (
          <Grid container className="textFieldFromTop">
            <Button
              variant="contained"
              color="primary"
              onClick={handleAdd}
              className="submitFormBtn"
              id="AddJntHolder1Btn"
            >
              Add Joint Holder
            </Button>
          </Grid>
        )}
      </AccordionDetails>
    </Accordion>
  );
}

export default ParticularsAccordion;
