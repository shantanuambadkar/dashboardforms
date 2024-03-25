import JointHolder4Fields from './JointHolder4Fields';
import JntHolder4CommunicationFields from './JntHolder4CommunicationFields';
import JntHolder4KYCFields from './JntHolder4KYCFields';
import JntHolder4DOBEduIncomeFields from './JntHolder4DOBEduIncomeFields';
import JntHolder4DisabilityPolExposureFields from './JntHolder4DisabilityPolExposureFields';
import JntHolder4ReligionFields from './JntHolder4ReligionFields';
import JntHolder4CategoryFields from './JntHolder4CategoryFields';
import JntHolder4OccupationFields from './JntHolder4OccupationFields';
import JntHolder4FatherNameFields from './JntHolder4FatherNameFields';
import JntHolder4MotherNameFields from './JntHolder4MotherNameFields';
import JntHolder4SpouseNameFields from './JntHolder4SpouseNameFields';
import JntHolder4CorrospondenceAddress from './JntHolder4CorrospondenceAddress';
import JntHolder4PermanentAddress from './JntHolder4PermanentAddress';

function AllJH4Fields({ formData, classToBeApplied }) {
  return (
    <div>
      <JointHolder4Fields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder4CommunicationFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder4KYCFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder4DOBEduIncomeFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder4DisabilityPolExposureFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder4ReligionFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder4CategoryFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder4OccupationFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder4FatherNameFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder4MotherNameFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder4SpouseNameFields
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder4CorrospondenceAddress
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
      <JntHolder4PermanentAddress
        formData={formData}
        classToBeApplied={classToBeApplied}
      />
    </div>
  );
}

export default AllJH4Fields;
