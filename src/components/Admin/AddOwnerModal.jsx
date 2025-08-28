import { useState } from "react";
import { useDataStore } from "../../store/dataStore";
import { Button } from "../ui/button";

const AddOwnerModal = ({ isOpen, onClose }) => {
const addOwner = useDataStore((state) => state.addOwner);

const [formData, setFormData] = useState({
name: "",
email: "",
password: "",
role: "owner",
phoneNumber: "",
age: "",
dob: "",
gender: "Male",
passportNumber: "",
nationality: "",
maritalStatus: "Single",
});

if (!isOpen) return null;

const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
e.preventDefault();
addOwner({ ...formData, id: Date.now().toString() });
onClose(); // close modal after adding
};

return (
<div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
<div className="bg-white rounded-xl p-6 w-[450px] shadow-lg max-h-[90vh] overflow-y-auto">
<h2 className="text-xl font-semibold mb-4">Add New Owner</h2>

<form onSubmit={handleSubmit} className="flex flex-col gap-3">
<input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="border p-2 rounded" required />
<input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border p-2 rounded" required />
 <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} autoComplete="new-password" className="border p-2 rounded" required />
<input name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} className="border p-2 rounded" required />
<input name="age" type="number" placeholder="Age" value={formData.age} onChange={handleChange} className="border p-2 rounded" />
<input name="dob" type="date" value={formData.dob} onChange={handleChange} className="border p-2 rounded" />
<select name="gender" value={formData.gender} onChange={handleChange} className="border p-2 rounded">
<option>Male</option>
<option>Female</option>
</select>
<input name="passportNumber" placeholder="Passport Number" value={formData.passportNumber} onChange={handleChange} className="border p-2 rounded" />
<input name="nationality" placeholder="Nationality" value={formData.nationality} onChange={handleChange} className="border p-2 rounded" />
<select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} className="border p-2 rounded">
<option>Single</option>
<option>Married</option>
</select>

<div className="flex justify-end gap-3 mt-4">
<Button type="button" className="bg-gray-300 text-black" onClick={onClose}>Cancel</Button>
<Button type="submit" className="bg-[var(--primary-color)] text-white">Add Owner</Button>
</div>
</form>
</div>
</div>
);
};

export default AddOwnerModal;

