import JointHolder3Fields from './JointHolder3Fields';
import JntHolder3CommunicationFields from './JntHolder3CommunicationFields';
import JntHolder3KYCFields from './JntHolder3KYCFields';
import JntHolder3DOBEduIncomeFields from './JntHolder3DOBEduIncomeFields';
import JntHolder3DisabilityPolExposureFields from './JntHolder3DisabilityPolExposureFields';
import JntHolder3ReligionFields from './JntHolder3ReligionFields';
import JntHolder3CategoryFields from './JntHolder3CategoryFields';
import JntHolder3OccupationFields from './JntHolder3OccupationFields';
import JntHolder3FatherNameFields from './JntHolder3FatherNameFields';
import JntHolder3MotherNameFields from './JntHolder3MotherNameFields';
import JntHolder3SpouseNameFields from './JntHolder3SpouseNameFields';
import JntHolder3CorrospondenceAddress from './JntHolder3CorrospondenceAddress';
import JntHolder3PermanentAddress from './JntHolder3PermanentAddress';

function AllJH3Fields({ formData, classToBeApplied }) {
  return (
    <div>
      <JointHolder3Fields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder3CommunicationFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder3KYCFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder3DOBEduIncomeFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder3DisabilityPolExposureFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder3ReligionFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder3CategoryFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder3OccupationFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder3FatherNameFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder3MotherNameFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder3SpouseNameFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder3CorrospondenceAddress
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder3PermanentAddress
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
    </div>
  );
}

export default AllJH3Fields;
