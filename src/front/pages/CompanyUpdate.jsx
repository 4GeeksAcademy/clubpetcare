
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const CompanyUpdate = () => {
  const { id } = useParams();
  const { store } = useGlobalReducer();
  
  const [business, setBusiness] = useState({
    photo: null,
    phone: "",
    location: "",
    description: "",
  });

  const handleInputChange = (e) => {
    if (e.target.name === "photo") {
      const file = e.target.files[0];
      setBusiness({
        ...business,
        photo: file,
      });
    } else {
      setBusiness({
        ...business,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleClearImage = () => {
    setBusiness({
      ...business,
      photo: null,
    });
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", business.photo);
    formData.append("upload_preset", "ClubPetCare");
    try {
      const cloudName = "dqs8bd3ts";
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        const data = await response.json();
        return data.url;
      } else {
        console.log("Error uploading image");
        alert("There was an error uploading the image ❌");
        return null;
      }
    } catch (error) {
      console.log("Error:", error);
      alert("There was an error uploading the image ❌");
      return null;
    }
  };

  // const updateCompany = async (businessData, id) => {
  //   try {
  //     const photoUrl = businessData.photo ? await uploadImage() : null;

  //     const userDataToUpdate = photoUrl
  //       ? { ...businessData, photo: photoUrl }
  //       : businessData;

  //     const response = await fetch(
  //       `${import.meta.env.VITE_BACKEND_URL}/api/company_profile/${id}`,
  //       {
  //         method: "PUT",
  //         headers: {
  //           "content-type": "application/json",
  //           Authorization: `Bearer ${store.token}`,
  //         },
  //         body: JSON.stringify(userDataToUpdate),
  //       }
  //     );
  //     if (!response.ok) {
  //       throw new Error("Error updating company");
  //     }
  //     const updateCompanyData = await response.json();
  //     console.log("Company updated successfully", updateCompanyData);
  //     alert("Company updated successfully ✅");
  //   } catch (error) {
  //     console.log("update failed:", error);
  //     alert("There was an error updating the company ❌");
  //   }
  // };
  const updateCompany = async (businessData, id) => {
    try {
      const photoUrl = businessData.photo ? await uploadImage() : null;
  
      const userDataToUpdate = photoUrl
        ? { ...businessData, photo: photoUrl }
        : businessData;
  
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/company_profile/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${store.token}`,
          },
          body: JSON.stringify(userDataToUpdate),
        }
      );
      if (!response.ok) {
        throw new Error("Error updating company");
      }
      const updatedCompanyData = await response.json();
      console.log("Company updated successfully", updatedCompanyData);
      
      // Actualiza el estado global con el perfil actualizado.
      dispatch({ type: "update_profile", payload: updatedCompanyData });
      
      alert("Company updated successfully ✅");
    } catch (error) {
      console.log("update failed:", error);
      alert("There was an error updating the company ❌");
    }
  };
  

  const getProfileImage = () => {
    if (store.profile && store.profile.photo) {
      // Agregar un query param para evitar problemas de cache si es necesario.
      return `${store.profile.photo}?timestamp=${new Date().getTime()}`;
    }
    return "https://res.cloudinary.com/dqs8bd3ts/image/upload/v1696345012/ClubPetCare/DefaultProfileImage.png";
  };
  

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 open-sans-body">
        {store.role === "user" ? "User" : "Company"} Information
      </h1>
      <div className="d-flex justify-content-center">
        <div className="col-md-4 text-center mx-2">
          <img
            src={getProfileImage()}
            alt="Imagen de perfil"
            className="profile-img mb-3 col-5"
            style={{ width: 300 }}
          />
          <input
            type="file"
            className="form-control mb-3 open-sans-body"
            id="imageUpload"
            accept="image/*"
            onChange={handleInputChange}
            name="photo"
          />
          <button
            className="btn btn-primary"
            id="clearImageBtn"
            onClick={handleClearImage}
          >
            <span className="camera-text open-sans-body">Clear Image</span>
          </button>
        </div>

        <div className="col-md-8 d-flex justify-content-around align-items-center mx-2">
          <div id="profileForm" className="row g-3">
            <div className="mb-3 col-5">
              <label htmlFor="userName" className="form-label open-sans-body">
                Name
              </label>
              <input
                type="text"
                className="form-control sour-gummy-head"
                id="userName"
                placeholder={store.profile?.name || "Juanito Pérez"}
                disabled
              />
            </div>
            <div className="mb-3 col-5">
              <label htmlFor="companyName" className="form-label open-sans-body">
                Company Name
              </label>
              <input
                type="text"
                className="form-control sour-gummy-head"
                id="companyName"
                placeholder={store.profile?.name_company || "Perritos Felices"}
                disabled
              />
            </div>
            <div className="mb-3 col-5">
              <label htmlFor="userEmail" className="form-label open-sans-body">
                Email
              </label>
              <input
                type="email"
                className="form-control sour-gummy-head"
                id="userEmail"
                placeholder={store.profile?.email || "perritosfelices@gmail.com"}
                disabled
              />
            </div>
            <div className="mb-3 col-5">
              <label htmlFor="location" className="form-label open-sans-body">
                Location
              </label>
              <input
                type="text"
                className="form-control sour-gummy-head"
                id="location"
                placeholder={
                  store.profile?.location ||
                  "P. Sherman, 42 Wallaby Way, Sídney"
                }
                onChange={handleInputChange}
                name="location"
              />
            </div>
            <div className="mb-3 col-5">
              <label htmlFor="phone" className="form-label open-sans-body">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control sour-gummy-head"
                id="phone"
                placeholder={store.profile?.phone || "000-000-0000"}
                onChange={handleInputChange}
                name="phone"
              />
            </div>
            <div className="mb-3 col-5">
              <label
                htmlFor="description"
                className="form-label open-sans-body"
              >
                Description
              </label>
              <textarea
                className="form-control sour-gummy-head"
                id="description"
                placeholder={
                  store.profile?.description || "Hogar dulce hogar"
                }
                onChange={handleInputChange}
                name="description"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary open-sans-body"
              onClick={() => updateCompany(business, id)}
            >
              Update Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyUpdate;
