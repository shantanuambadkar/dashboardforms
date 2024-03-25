import React from 'react';
import '../../../css/Common.css';
import '../../../css/Accordion.css';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import NomineeFields from '../fields/NomineeFields';

function NominationAccordion({
  accordionSummaryText,
  formData,
  formName,
  showNomination,
  /* failedFields, */
}) {
  /* if (Object.keys(failedFields).length > 0) {
    console.log('failedFields.validatedNominee', failedFields);
  } */

  return showNomination === 'true' ? (
    <Accordion className="accordion-bg-color">
      <AccordionSummary>
        <h4
          /* className={
            failedFields && Object.keys(failedFields).length > 0
              ? 'danger-text'
              : 'white-text'
          } */
          className="white-text"
        >
          {accordionSummaryText}
        </h4>
      </AccordionSummary>
      <AccordionDetails className="white-color-background">
        <NomineeFields
          classToBeApplied="field-width"
          formName={formName}
          formData={formData}
        />
      </AccordionDetails>
    </Accordion>
  ) : (
    ''
  );
}

export default NominationAccordion;
