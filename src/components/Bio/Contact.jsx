import React from 'react';
import DetailItem from '../HelpingUI/DetailItem';

const Contact = ({ owner }) => {
  return (
    <div className="w-full border border-[#00000033] p-4 rounded-2xl">
      <h1 className="font-semibold text-[18px] pb-5">Contact Information</h1>
      <div className="flex flex gap-10">
        <DetailItem label="Email" value={owner.email} />
        <DetailItem label="Phone" value={owner.phoneNumber} />
      </div>

      <div className="flex gap-3 mt-4">
        <a href={`tel:${owner.phoneNumber}`} className="px-3 py-2 bg-green-500 text-white rounded">📞 Call</a>
        <a href={`https://wa.me/${owner.phoneNumber.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-green-600 text-white rounded">💬 WhatsApp</a>
        <a href={`mailto:${owner.email}`} className="px-3 py-2 bg-blue-500 text-white rounded">✉️ Email</a>
      </div>
    </div>
  );
};

export default Contact;
