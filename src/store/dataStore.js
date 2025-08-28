import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useDataStore = create(
  persist(
    (set, get) => ({
      owners: [
        { id:"1", name:"Emilsy Johnson", email:"emily.johnson@cityhostels.com", password:"ej1234", role:"owner", phoneNumber:"+1 (415) 555-0198", age:32, dob:"1992-06-14", gender:"Female", passportNumber:"X1234567", nationality:"American", maritalStatus:"Single" },
        { id:"2", name:"Michael Smith",  email:"michael.smith@coasthostel.com", password:"ms1234", role:"owner", phoneNumber:"+1 (212) 555-2345", age:40, dob:"1985-03-02", gender:"Male",   passportNumber:"Y9876543", nationality:"American", maritalStatus:"Married" },
        { id:"3", name:"Samantha Lee",   email:"samantha.lee@urbanstay.com",   password:"sl1234", role:"owner", phoneNumber:"+1 (310) 555-8721", age:29, dob:"1996-08-22", gender:"Female", passportNumber:"Z5432198", nationality:"Canadian", maritalStatus:"Single" },
        { id:"4", name:"David Thompson", email:"david.thompson@midwesthostel.com", password:"dt1234", role:"owner", phoneNumber:"+1 (619) 555-0147", age:35, dob:"1988-04-15", gender:"Male", passportNumber:"W4567890", nationality:"American", maritalStatus:"Married" },
        { id:"5", name:"Natalie Rivera", email:"natalie.rivera@sunhostel.com", password:"nr1234", role:"owner", phoneNumber:"+1 (718) 555-0269", age:27, dob:"1996-10-30", gender:"Female", passportNumber:"V2345678", nationality:"American", maritalStatus:"Single" },
        { id:"6", name:"Chris Brown",    email:"chris.brown@mountainlodge.com", password:"cb1234", role:"owner", phoneNumber:"+1 (503) 555-0392", age:42, dob:"1981-01-20", gender:"Male", passportNumber:"U3456789", nationality:"American", maritalStatus:"Married" },
        { id:"7", name:"Charles Dan",    email:"charles.dan@mountaintravelling.com", password:"cd1234", role:"owner", phoneNumber:"+1 (212) 555-0765", age:38, dob:"1985-11-05", gender:"Male", passportNumber:"T8765432", nationality:"American", maritalStatus:"Married" },
        { id:"8", name:"Harry Smith",    email:"harry.smith@motel.com", password:"hs1234", role:"owner", phoneNumber:"+1 (312) 555-0890", age:31, dob:"1992-07-18", gender:"Male", passportNumber:"S0987654", nationality:"American", maritalStatus:"Single" },
       ],
      admin:[
         { id:"0398", name:"Awais Arif",  email:"awais.arif@gmail.com", password:"aa1234", role:"admin" }
      ],
      hostels: [
        { id:"h1", ownerId:"1", name:"Downtown City Hostel",     location:"New York",        totalRooms:25, protocol:"Bed",     image:"/hh.png" },
        { id:"h2", ownerId:"1", name:"City View Flat",           location:"New York",        totalRooms:15, protocol:"Room",    image:"/hh.png" },
        { id:"h3", ownerId:"2", name:"Coastline Backpackers",    location:"California Beach",totalRooms:14, protocol:"Bed/Room", image:"/hh.png" },
        { id:"h4", ownerId:"1", name:"Burj al byt",              location:"Dubai",           totalRooms:22, protocol:"Room",    image:"/hh.png" },
        { id:"h5", ownerId:"3", name:"UrbanStay Hostel",         location:"Los Angeles",     totalRooms:10, protocol:"Bed/Room",image:"/hh.png" }
      ],

      rooms: [
        { id:"r5", hostelId:"h2", typeId:"t1",    rooms:6,   roomsAvailable:4, roomsOccupied:2 },
        { id:"r6", hostelId:"h2", typeId:"t2",    rooms:3,   roomsAvailable:2, roomsOccupied:1 },
        { id:"r7", hostelId:"h2", typeId:"t3",    rooms:2,   roomsAvailable:1, roomsOccupied:1 },
        { id:"r8", hostelId:"h2", typeId:"t4",    rooms:4,   roomsAvailable:3, roomsOccupied:1 },
        { id:"r9", hostelId:"h3", typeId:"t1",    rooms:5,   roomsAvailable:2, roomsOccupied:3 },
        { id:"r10",hostelId:"h3", typeId:"t2",    rooms:4,   roomsAvailable:1, roomsOccupied:3 },
        { id:"r11",hostelId:"h3", typeId:"t3",    rooms:3,   roomsAvailable:1, roomsOccupied:2 },
        { id:"r12",hostelId:"h3", typeId:"t4",    rooms:2,   roomsAvailable:0, roomsOccupied:2 },
        { id:"r13",hostelId:"h4", typeId:"t1",    rooms:3,   roomsAvailable:2, roomsOccupied:1 },
        { id:"r14",hostelId:"h4", typeId:"t2",    rooms:4,   roomsAvailable:1, roomsOccupied:3 },
        { id:"r15",hostelId:"h4", typeId:"t3",    rooms:7,   roomsAvailable:3, roomsOccupied:4 },
        { id:"r16",hostelId:"h4", typeId:"t4",    rooms:8,   roomsAvailable:6, roomsOccupied:2 },
        { id:"r17",hostelId:"h5", typeId:"t1",    rooms:3,   roomsAvailable:1, roomsOccupied:2 },
        { id:"r18",hostelId:"h5", typeId:"t2",    rooms:2,   roomsAvailable:0, roomsOccupied:2 },
        { id:"r19",hostelId:"h5", typeId:"t3",    rooms:3,   roomsAvailable:1, roomsOccupied:2 },
        { id:"r20",hostelId:"h5", typeId:"t4",    rooms:2,   roomsAvailable:0, roomsOccupied:2 }
      ],
      beds: [
        { id: "b1", hostelId:"h1", beds:10, bedsAvailable:6,  bedsOccupied:4 },
        { id: "b3", hostelId:"h3", beds:5,  bedsAvailable:2,  bedsOccupied:3 },
        { id: "b5", hostelId:"h5", beds:3,  bedsAvailable:1,  bedsOccupied:2 },
      ],

      roomTypes: [
        { id:"t1", name:"Single Bed Room" },
        { id:"t2", name:"Double Bed Room" },
        { id:"t3", name:"Triple Bed Room" },
        { id:"t4", name:"Quadruple Room" }
      ],

      // ==== OWNERS ====
      addOwner: (owner) => set({ owners: [...get().owners, owner] }),
      updateOwner: (id, patch) =>
        set({ owners: get().owners.map(o => o.id === id ? { ...o, ...patch } : o) }),
      deleteOwner: (id) =>
        set({ owners: get().owners.filter(o => o.id !== id) }),

      // ==== HOSTELS ====
      addHostel: (hostel) => set({ hostels: [...get().hostels, hostel] }),
      updateHostel: (id, patch) =>
        set({ hostels: get().hostels.map(h => h.id === id ? { ...h, ...patch } : h) }),
      deleteHostel: (id) => {
        set({
          hostels: get().hostels.filter(h => h.id !== id),
          rooms: get().rooms.filter(r => r.hostelId !== id),
        });
      },

      // ==== ROOMS ====
      addRoom: (room) => set({ rooms: [...get().rooms, room] }),
      updateRoom: (id, patch) =>
        set({ rooms: get().rooms.map(r => r.id === id ? { ...r, ...patch } : r) }),
      deleteRoom: (id) =>
        set({ rooms: get().rooms.filter(r => r.id !== id) }),



      addBed: (bed) => set({ beds: [...get().beds, bed] }),
      updateBed: (id, patch) =>
        set({ beds: get().beds.map(b => b.id === id ? { ...b, ...patch } : b) }),
      deleteBed: (id) =>
        set({ beds: get().beds.filter(b => b.id !== id) }),

    }),
    { name: 'data-storage' }
  )
);