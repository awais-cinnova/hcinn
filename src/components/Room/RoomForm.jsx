const RoomForm = ({ editData, setEditData, hostel }) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    setEditData((prev) => ({ ...prev, [name]: Number(value) }))
  }

  return (
    <div className="flex flex-col gap-2 mt-2">
      <label>
        Total Rooms:
        <input type="number" name="rooms" value={editData.rooms} onChange={handleChange} className="border rounded p-1 w-full" />
      </label>


          <label> Rooms Available:
                <input type="number" name="roomsAvailable" value={editData.roomsAvailable} onChange={handleChange}
                  className="border rounded p-1 w-full"
                />   
          </label>
          <label> Rooms Occupied:
              <input type="number" name="roomsOccupied" value={editData.roomsOccupied} onChange={handleChange} 
              className="border rounded p-1 w-full"/>
          </label>
    </div>
  )
}

export default RoomForm
