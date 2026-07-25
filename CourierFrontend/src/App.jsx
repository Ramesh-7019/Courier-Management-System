import { useEffect, useState } from "react";
import CourierForm from "./CourierForm";
import CourierTable from "./CourierTable";
import "./App.css";

function App() {

  const API = "https://courier-backend-production-b07c.up.railway.app";

  const [couriers,setCouriers]=useState([]);
  const [editCourier,setEditCourier]=useState(null);

  const getCouriers=()=>{
      fetch(API)
      .then(res=>res.json())
      .then(data=>setCouriers(data));
  }

  useEffect(()=>{
      getCouriers();
  },[]);

  const saveCourier=(courier)=>{

      if(editCourier){

          fetch(`${API}/${editCourier.id}`,{
              method:"PUT",
              headers:{
                  "Content-Type":"application/json"
              },
              body:JSON.stringify(courier)
          })
          .then(()=>{
              getCouriers();
              setEditCourier(null);
          });

      }
      else{

          fetch(API,{
              method:"POST",
              headers:{
                  "Content-Type":"application/json"
              },
              body:JSON.stringify(courier)
          })
          .then(()=>getCouriers());

      }

  }

  const deleteCourier=(id)=>{

      fetch(`${API}/${id}`,{
          method:"DELETE"
      })
      .then(()=>getCouriers());

  }

  return(

    <div className="container">

      <h1>Courier Booking System</h1>

      <CourierForm
      saveCourier={saveCourier}
      editCourier={editCourier}
      />

      <CourierTable
      couriers={couriers}
      onEdit={setEditCourier}
      onDelete={deleteCourier}
      />

    </div>

  )

}

export default App;