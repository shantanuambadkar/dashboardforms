import JointHolder1Fields from './JointHolder1Fields';
import JntHolder1CommunicationFields from './JntHolder1CommunicationFields';
import JntHolder1KYCFields from './JntHolder1KYCFields';
import JntHolder1DOBEduIncomeFields from './JntHolder1DOBEduIncomeFields';
import JntHolder1DisabilityPolExposureFields from './JntHolder1DisabilityPolExposureFields';
import JntHolder1ReligionFields from './JntHolder1ReligionFields';
import JntHolder1CategoryFields from './JntHolder1CategoryFields';
import JntHolder1OccupationFields from './JntHolder1OccupationFields';
import JntHolder1FatherNameFields from './JntHolder1FatherNameFields';
import JntHolder1MotherNameFields from './JntHolder1MotherNameFields';
import JntHolder1SpouseNameFields from './JntHolder1SpouseNameFields';
import JntHolder1CorrospondenceAddress from './JntHolder1CorrospondenceAddress';
import JntHolder1PermanentAddress from './JntHolder1PermanentAddress';

function AllJH1Fields({ formData, classToBeApplied }) {
  return (
    <div>
      <JointHolder1Fields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder1CommunicationFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />

      <JntHolder1KYCFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />

      <JntHolder1DOBEduIncomeFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />

      <JntHolder1DisabilityPolExposureFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />

      <JntHolder1ReligionFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />

      <JntHolder1CategoryFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />

      <JntHolder1OccupationFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />

      <JntHolder1FatherNameFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />

      <JntHolder1MotherNameFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />

      <JntHolder1SpouseNameFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder1CorrospondenceAddress
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder1PermanentAddress
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
    </div>
  );
}

export default AllJH1Fields;
