const DetailItem = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="font-semibold">{label}:</span>
    <span>{value}</span>
  </div>
);

export default DetailItem;
