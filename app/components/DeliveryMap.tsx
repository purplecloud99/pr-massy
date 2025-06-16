'use client';

import {
  initMap, showCities, closeCityPanel
} from '@/app/lib/deliveryMap';

import { useEffect } from 'react';

export default function DeliveryMap() {
  useEffect(() => {
    initMap();
    return () => {
      closeCityPanel();
    };
  }, []);
  return (
    <section id='delivery-area' className="bg-white">
      <div className="text-center p-4 bg-[var(--info3)] rounded-xl mb-5 flex flex-col">
        <div className='flex justify-center mb-2'>
          <h1 className="text-2xl text-[var(--primary)] bg-[var(--orange)] p-2 px-4 rounded-xl mb-3 mx-auto">
            🚚 Check If We Deliver to Your Area
          </h1>
        </div>
        <div className="text-lg md:w-[50%] mx-auto">
          Click on your county below to watch the truck drive to your region! Once
          selected, you&apos;ll see a list of all the cities we deliver to in that county.
          It&apos;s a fun and easy way to explore our service areas — just tap your county
          to get started!
        </div>
      </div>
      <div className="delivery-map-container" id="delivery-map-container">
        <img
          loading="lazy"
          src="/images/map-image2.png"
          alt="Delivery Area Map"
          className="delivery-map-bg"
        />
        {/* Truck Icon */}
        <img
          loading="lazy"
          id="truck"
          className="delivery-truck"
          src="/images/truck-image.png"
          alt="Truck"
        />
        {/* (Static smoke element remains for reference, but we generate smoke dynamically) */}
        <div id="smoke" className="smoke-puff" style={{ opacity: 0 }} />
        {/* Optional truckPath element (unused here) */}
        <div id="truckPath" style={{ display: "none" }} />
        {/* Clickable County Zones */}
        <div className="county-zone oc" onClick={(e) => showCities(e.currentTarget as HTMLElement, 'orange')}>
          <span className="long-label">Orange County</span>
          <span className="short-label">OC</span>
          <span className="pulse-ring" />
        </div>
        <div className="county-zone la" onClick={(e) => showCities(e.currentTarget as HTMLElement, 'la')}>
          <span className="long-label">Los Angeles County</span>
          <span className="short-label">LA</span>
          <span className="pulse-ring" />
        </div>
        <div className="county-zone sb" onClick={(e) => showCities(e.currentTarget as HTMLElement, 'sb')}>
          <span className="long-label">San Bernardino County</span>
          <span className="short-label">SB</span>
          <span className="pulse-ring" />
        </div>
        <div className="county-zone rv" onClick={(e) => showCities(e.currentTarget as HTMLElement, 'rv')}>
          <span className="long-label">Riverside County</span>
          <span className="short-label">RV</span>
          <span className="pulse-ring" />
        </div>
      </div>
      {/* closes delivery-map-container */}
      {/* City list panel */}
      <div className="city-list-panel" id="cityListPanel">
        <button className="close-panel-btn" onClick={() => closeCityPanel()}>
          ✖
        </button>
        <h3 id="cityPanelTitle">Select a County</h3>
        <ul id="cityList">
          <li>Click a region to see cities!</li>
        </ul>
      </div>
    </section>

  )
}