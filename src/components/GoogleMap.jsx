"use client";

import React from 'react';

const GoogleMap = ({ 
  address = "Sector 16, Noida, Uttar Pradesh 201301",
  height = "400px",
  width = "100%"
}) => {
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.824857037!2d77.3149005!3d28.5776795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45b7e24b733%3A0xb8dd905f45fbfcd5!2sSector%2016%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin`;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={mapEmbedUrl}
        width={width}
        height={height}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full rounded-lg"
        title={`${address} - Location Map`}
      />
    </div>
  );
};

export default GoogleMap;
