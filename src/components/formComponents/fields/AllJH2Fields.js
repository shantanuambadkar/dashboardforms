import JointHolder2Fields from './JointHolder2Fields';
import JntHolder2CommunicationFields from './JntHolder2CommunicationFields';
import JntHolder2KYCFields from './JntHolder2KYCFields';
import JntHolder2DOBEduIncomeFields from './JntHolder2DOBEduIncomeFields';
import JntHolder2DisabilityPolExposureFields from './JntHolder2DisabilityPolExposureFields';
import JntHolder2ReligionFields from './JntHolder2ReligionFields';
import JntHolder2CategoryFields from './JntHolder2CategoryFields';
import JntHolder2OccupationFields from './JntHolder2OccupationFields';
import JntHolder2FatherNameFields from './JntHolder2FatherNameFields';
import JntHolder2MotherNameFields from './JntHolder2MotherNameFields';
import JntHolder2SpouseNameFields from './JntHolder2SpouseNameFields';
import JntHolder2CorrospondenceAddress from './JntHolder2CorrospondenceAddress';
import JntHolder2PermanentAddress from './JntHolder2PermanentAddress';

function AllJH2Fields({ formData, classToBeApplied }) {
  return (
    <div>
      <JointHolder2Fields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder2CommunicationFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder2KYCFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder2DOBEduIncomeFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder2DisabilityPolExposureFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder2ReligionFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder2CategoryFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder2OccupationFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder2FatherNameFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder2MotherNameFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder2SpouseNameFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder2CorrospondenceAddress
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder2PermanentAddress
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
    </div>
  );
}

export default AllJH2Fields;
