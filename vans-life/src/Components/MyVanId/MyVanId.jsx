import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import "./MyVanId.css";

export default function MyVanId() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, [id]);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} alt={currentVan.name} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>

        {/* Navigation for Nested Routes */}
        <header style={navLayoutStyle}>
          <nav>
            <NavLink to="detail" style={navLinkStyle} activeStyle={activeLinkStyle}>
              Detail
            </NavLink>
            <NavLink to="pricing" style={navLinkStyle} activeStyle={activeLinkStyle}>
              Pricing
            </NavLink>
            <NavLink to="photos" style={navLinkStyle} activeStyle={activeLinkStyle}>
              Photos
            </NavLink>
          </nav>
        </header>

        {/* Nested Route Content */}
        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
}
const navLayoutStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#FFF5E1',
  borderBottom: '1px solid #ddd',
};

const navLinkStyle = {
  marginLeft: '20px',
  textDecoration: 'none',
  color: '#333',
  fontWeight: '500',
};

const activeLinkStyle = {
  color: '#FF6347',
  fontWeight: 'bold',
};