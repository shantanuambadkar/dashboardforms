import React from 'react';
import '../../../css/Common.css';
import '../../../css/Accordion.css';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import IntroducerFields from '../fields/IntroducerFields';

function IntroducerAccordion({
  accordionSummaryText,
  formData,
  formName,
  showIntroducer,
}) {
  return showIntroducer === 'true' ? (
    <Accordion className="accordion-bg-color">
      <AccordionSummary>
        <h4 className="white-text">{accordionSummaryText}</h4>
      </AccordionSummary>
      <AccordionDetails className="white-color-background">
        <IntroducerFields
          formName={formName}
          formData={formData}
          classToBeApplied="field-width"
        />
      </AccordionDetails>
    </Accordion>
  ) : (
    ''
  );
}

export default IntroducerAccordion;
