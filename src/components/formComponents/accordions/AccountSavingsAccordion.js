import React from 'react';
import '../../../css/Common.css';
import '../../../css/Accordion.css';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import AccountSavingsFields from '../fields/AccountSavingsFields';

function AccountSavingsAccordion({
  accordionSummaryText,
  formData,
  formName,
  showAccount,
}) {
  return showAccount === 'true' ? (
    <Accordion className="accordion-bg-color">
      <AccordionSummary>
        <h4 className="white-text">{accordionSummaryText}</h4>
      </AccordionSummary>
      <AccordionDetails className="white-color-background">
        <AccountSavingsFields
          classToBeApplied="field-width"
          formData={formData}
          formName={formName}
        />
      </AccordionDetails>
    </Accordion>
  ) : (
    ''
  );
}

export default AccountSavingsAccordion;
