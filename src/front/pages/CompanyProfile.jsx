import React from "react";

export const CompanyProfile = () => {

  return (
    <div style={{ backgroundColor: "#FFDDD2", }}>
      <div className="container py-5" >

        <div className="text-center pb-2">
          <img src="https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?w=400&h=400" alt="Logo" className="mb-2 rounded-circle" />
        </div>

        <header className="text-white text-center py-2 rounded" style={{ backgroundColor: "#006D77", }}>
          <h1 className="display-5">Nombre de la Empresa</h1>
        </header>

        <section className="bg-white mt-4 p-3 rounded shadow-sm">
          <h2 style={{ color: "#006D77", }}>
            <i className="fa-solid fa-briefcase-medical me-1" style={{ color: "#006D77", }}></i>Sobre Nosotros</h2>
          <p className="text-muted">Breve descripción de la empresa, su misión y visión.</p>
        </section>

        <section className="bg-white mt-4 p-3 rounded shadow-sm">
          <h2 style={{ color: "#006D77", }}><i className="fa-solid fa-paw me-1" style={{ color: "#006D77", }}></i>Nuestros Servicios</h2>
          <ul className="list-group">
            <li className="list-group-item">Servicio 1</li>
            <li className="list-group-item">Servicio 2</li>
            <li className="list-group-item">Servicio 3</li>
          </ul>
        </section>

        <section className="bg-white mt-4 p-3 rounded shadow-sm">
          <h2 style={{ color: "#006D77", }}>
            <i className="fa-solid fa-clock me-1" style={{ color: "#006D77", }}></i>Horarios</h2>
          <p className="text-muted">Urgencias las 24 horas, etc</p>
        </section>

        <section className="bg-white mt-4 p-3 rounded shadow-sm">
          <h2 style={{ color: "#006D77", }}><i className="fa-solid fa-location-dot me-1" style={{ color: "#006D77", }}></i>Ubicación</h2>
          <p className="text-muted">Montes de Oca 27</p>
        </section>

        <div className="my-3 p-3 bg-body rounded shadow-sm">
          <h2 className="border-bottom pb-2 mb-0" style={{ color: "#006D77", }}><i className="fa-solid fa-calendar-days me-1"></i>Recordatorios para hoy</h2>
          <div className="d-flex text-body-secondary pt-3">
            <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff" /><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
            <p className="pb-3 mb-0 small lh-sm border-bottom">
              <strong className="d-block text-gray-dark">@username</strong>
              Some representative placeholder content, with some information about this user. Imagine this being some sort of status update, perhaps?
            </p>
          </div>
          <div className="d-flex text-body-secondary pt-3">
            <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c" /><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>
            <p className="pb-3 mb-0 small lh-sm border-bottom">
              <strong className="d-block text-gray-dark">@username</strong>
              Some more representative placeholder content, related to this other user. Another status update, perhaps.
            </p>
          </div>
          <div className="d-flex text-body-secondary pt-3">
            <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1" /><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>
            <p className="pb-3 mb-0 small lh-sm border-bottom">
              <strong className="d-block text-gray-dark">@username</strong>
              This user also gets some representative placeholder content. Maybe they did something interesting, and you really want to highlight this in the recent updates.
            </p>
          </div>
          <small className="d-block text-end mt-3">
            <a href="#">All updates</a>
          </small>
        </div>

      </div>
    </div>
  );
};