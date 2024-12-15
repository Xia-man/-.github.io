import React from 'react';
import FoodTown from './components/FoodTown';
import VirtualCooking from './components/VirtualCooking';
import FoodKitchen from './components/FoodKitchen';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="nav-menu">
        <div className="nav-item">
          <img src="/icons/town-icon.png" alt="食语小镇" />
          <span>食语小镇</span>
        </div>
        <div className="nav-item">
          <img src="/icons/cooking-icon.png" alt="虚拟烹饪" />
          <span>虚拟烹饪</span>
        </div>
        <div className="nav-item">
          <img src="/icons/kitchen-icon.png" alt="食语厨房" />
          <span>食语厨房</span>
        </div>
      </nav>

      <div className="main-content">
        <section className="module">
          <FoodTown />
        </section>
        
        <section className="module">
          <VirtualCooking />
        </section>
        
        <section className="module">
          <FoodKitchen />
        </section>
      </div>
    </div>
  );
}

export default App; 