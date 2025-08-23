import { useState, useEffect } from "react";
import fetchBio from "./bio";

export default function App() {
  const [person, setPerson] = useState("sujal");
  const [bio, setBio] = useState(null);

  useEffect(() => {
    let ignore = false;
    setBio(null);
    fetchBio(person).then( (result) => {
      if (!ignore) {
        return setBio(result);
      }
    });

    return () => {
      ignore = true;
    }
  }, [person]);
  
  return(
    <>
    <select 
    value={person}
    onChange={(e) => { return setPerson(e.target.value)}}>
      <option value="sujal">sujal</option>
      <option value="pravin">pravin</option>
      <option value="harshal">harshal</option>
    </select>

    <hr />

    <p><i>{bio ?? "Loading..."}</i></p>

    </>
  )
}