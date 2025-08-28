import DetailItem from '../HelpingUI/DetailItem';

const Personal = ({ owner }) => {
  return (
    <div className="w-full border border-[#00000033] p-4 rounded-2xl">
      <h1 className="font-semibold text-[18px] pb-5">Personal Information</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
        <DetailItem label="Age" value={owner.age} />
        <DetailItem label="Date of Birth" value={owner.dob} />
        <DetailItem label="Gender" value={owner.gender} />
        <DetailItem label="Passport Number" value={owner.passportNumber} />
        <DetailItem label="Nationality" value={owner.nationality} />
        <DetailItem label="Marital Status" value={owner.maritalStatus} />
      </div>
    </div>
  );
};

export default Personal;
