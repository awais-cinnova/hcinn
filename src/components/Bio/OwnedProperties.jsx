import PaginationDemo from '../HelpingUI/Pagination';

const OwnedProperties = ({ ownedProperties, currentProperties, currentPage, setCurrentPage, propertiesPerPage }) => {
  return (
    <div className="w-full border border-[#00000033] p-4 rounded-2xl">
      <h1 className="font-semibold text-[18px] pb-5">Owned Properties</h1>
      {currentProperties.length === 0 ? (
        <p>No properties found for this owner.</p>
      ) : (
        <ul className="list-disc min-h-[120px] md:min-h-[260px] list-inside">
          {currentProperties.map(property => (
            <li key={property.id} className="mb-2">
              <strong>{property.name}</strong> — Location: {property.location}
            </li>
          ))}
        </ul>
      )}

      <PaginationDemo
        totalItems={ownedProperties.length}
        rowsPerPage={propertiesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default OwnedProperties;
