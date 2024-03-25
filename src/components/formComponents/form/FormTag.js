import React from 'react';
import '../../../css/Common.css';
import '../../../css/Forms.css';
import { FormControl } from '@material-ui/core';
import ParticularsAccordion from '../accordions/ParticularsAccordion';
import NominationAccordion from '../accordions/NominationAccordion';
import IntroducerAccordion from '../accordions/IntroducerAccordion';
import AccountSavingsAccordion from '../accordions/AccountSavingsAccordion';

function FormTag({
  formID,
  autoComplete,
  classToBeApplied,
  showIntroducer,
  showNomination,
  showAccount,
  formData,
  formName,
  failedFields,
}) {
  return (
    <FormControl
      id={formID}
      autoComplete={autoComplete}
      className={classToBeApplied}
      formName={formName}
    >
      <ParticularsAccordion
        accordionSummaryText="Particulars"
        formData={formData}
        formName={formName}
      />
      <AccountSavingsAccordion
        accordionSummaryText="Account"
        formData={formData}
        formName={formName}
        showAccount={showAccount}
      />
      <NominationAccordion
        accordionSummaryText="Nomination"
        formData={formData}
        formName={formName}
        showNomination={showNomination}
        /* failedFields={failedFields ? failedFields?.validatedNominee : {}} */
      />
      <IntroducerAccordion
        accordionSummaryText="Introducer"
        formData={formData}
        formName={formName}
        showIntroducer={showIntroducer}
      />
    </FormControl>
  );
}

export default FormTag;
