"use client"
import { useState } from 'react';
import axios from 'axios';

const LocationInput = () => {
  const [location, setLocation] = useState('');

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  const showPosition = async (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
      const { address } = response.data;
      setLocation(formatAddress(address));
    } catch (error) {
      console.error('Error getting location details:', error);
      setLocation('Error fetching location details.');
    }
  };

  const formatAddress = (address) => {
    // You can customize how you want to display the location details here
    const buildingName = address.building || '';
    const buildingNumber = address.building_number || '';
    const area = address.neighbourhood || address.suburb || address.village || '';
    const city = address.city || address.town || '';
    const state = address.state || '';
    const country = address.country || '';
    const postalCode = address.postcode || '';

    let buildingInfo = '';
    if (buildingName) {
      buildingInfo = buildingName;
    } else if (buildingNumber) {
      buildingInfo = `Building ${buildingNumber}`;
    } else {
      buildingInfo = area;
    }

    return `${buildingInfo}, ${city}, ${state}, ${country} ${postalCode}`;
  
  };

  const showError = (error) => {
    console.error('Error getting location:', error);
  };

  return (
    <div>
      <h1>Enter Your Location:</h1>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter your location here"
      />
      <button onClick={getLocation}>Get My Location</button>
    </div>
  );
};

export default LocationInput;
