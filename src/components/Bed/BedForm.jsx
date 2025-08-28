import { useDataStore } from "../../store/dataStore";

const BedForm = ({ editData, setEditData }) => {
  const updateBed = useDataStore((state) => state.updateBed);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = Number(value);

    setEditData((prev) => ({ ...prev, [name]: newValue }));
    updateBed(editData.id, { [name]: newValue }); // Update zustand store
  };

  return (
    <div className="flex flex-col gap-2 mt-2">
      <label>
        Total Beds:
        <input
          type="number"
          name="beds"
          value={editData.beds}
          onChange={handleChange}
          className="border rounded p-1 w-full"
        />
      </label>

      <label>
        Beds Available:
        <input
          type="number"
          name="bedsAvailable"
          value={editData.bedsAvailable}
          onChange={handleChange}
          className="border rounded p-1 w-full"
        />
      </label>

      <label>
        Beds Occupied:
        <input
          type="number"
          name="bedsOccupied"
          value={editData.bedsOccupied}
          onChange={handleChange}
          className="border rounded p-1 w-full"
        />
      </label>
    </div>
  );
};

export default BedForm;
