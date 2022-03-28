import logo from './logo.svg';
import './App.css';
import writers from './writers';
import ProfileCard from './components/ProfileCard';
import { useState } from 'react';
import ProfileForm from './components/ProfileForm';

  function App() {
    const [allProfile, setAllProfile] = useState([
  {
  firstName: "Hannah",
  lastName: "Montana",
  email: "hannah.montana@gmail.com",
  phone: "+233 500 2218 58",
  },
]);

  return (
    <div>
      <h1> Writer Profiles </h1>
      <div className="container">
        <ProfileForm />
          {allProfile.map((writer) => (
            <ProfileCard key={writer.id} writer={writer} />
        ))}
      </div>
    </div>
  );
  }

export default App;
