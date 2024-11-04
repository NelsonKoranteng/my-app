import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card-container">
        {contacts.map((contact, index) => (
          <Card
            key={index}
            name={contact.name}
            img={contact.imgURL}
            tel={contact.phone}
            linkedIn={contact.linkedIn}
            email={contact.email}
            
          />
        ))}
      </div>
    </div>
  );
}

export default App;
