import { useState } from "react"
import { useDataStore } from "../../store/dataStore"
import BedDetail from "./BedDetail"
import BedForm from "./BedForm"
import Alert from "../Room/Alert"
import EditDialog from "../Room/EditDialog"

const BedCard = ({ bed , hostel }) => {
  const deleteBed = useDataStore((state) => state.deleteBed)
  const updateBed = useDataStore((state) => state.updateBed)

  const [isEditing, setIsEditing] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [editData, setEditData] = useState({
    beds: bed.beds,
    bedsAvailable: bed.bedsAvailable,
    bedsOccupied: bed.bedsOccupied,
  })
  const [error, setError] = useState("")

  // -------- Validation --------
  const validateData = () => {
    if (editData.beds < 0) {
      return "Total beds cannot be negative."
    }
    if (editData.beds < editData.bedsOccupied) {
      return "Occupied beds cannot exceed total beds."
    }
    if (editData.beds < editData.bedsAvailable) {
      return "Available beds cannot exceed total beds."
    }
    if (editData.beds < editData.bedsAvailable + editData.bedsOccupied) {
      return "Available + Occupied beds cannot exceed total beds."
    }
    if (editData.bedsAvailable < 0 || editData.bedsOccupied < 0) {
      return "Beds cannot be negative."
    }
    if (editData.beds != editData.bedsAvailable + editData.bedsOccupied) {
      console.log(editData.beds)
      console.log(editData.bedsAvailable)
      console.log(editData.bedsOccupied)
    return "Available + Occupied rooms must equal total rooms."
  }
    return ""
  }

  const handleSave = () => {
    const validationError = validateData()
    if (validationError) {
      setError(validationError)
      return
    }
    updateBed(bed.id, editData)
    setIsEditing(false)
    setError("")
  }

  const handleDelete = () => {
    deleteBed(bed.id)
    setShowDeleteConfirm(false)
  }
  const handleCancel = () => {
    setIsEditing(false)
    setError("")   // reset error when closing
    setEditData({
      rooms: room.rooms,
      roomsAvailable: room.roomsAvailable,
      roomsOccupied: room.roomsOccupied,
    }) 
  }
  
  const title = "Edit Bed"
  const descrip = "Update the details of the beds below. All fields are required."

  return (
    <div className="border p-4 rounded-lg shadow bg-[#E8F0FE]">
      {/* Bed details view */}
      <BedDetail bed={bed} hostel={hostel} onEdit={() => setIsEditing(true)} onDelete={() => setShowDeleteConfirm(true)} />

      {/* ---------- Edit Dialog ---------- */}
      <EditDialog open={isEditing} onOpenChange={setIsEditing} title={title} 
          description={descrip}  error={error} onCancel={handleCancel}  onSave={handleSave}
      >
           <BedForm editData={editData} setEditData={setEditData} hostel={hostel} />
      </EditDialog>

      {/* ---------- Delete Confirmation ---------- */}
      <Alert open={showDeleteConfirm}  onOpenChange={setShowDeleteConfirm}  onConfirm={handleDelete} type="bed"/>
    </div>
  )
}

export default BedCard
