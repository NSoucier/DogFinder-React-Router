import { all } from "axios";
import { useParams, Navigate } from "react-router-dom";

function Dog({ dogs }) {
  const { name } = useParams();
  const dogDetails = dogs.filter((dog) => dog.name === name);
  const allNames = dogs.map(dog => dog.name);

  if (allNames.indexOf(name) === -1) {
    return <Navigate to='/dogs'/>
  }

  return (
    <>
      <p>My name is {dogDetails[0].name}.</p>
      <p>I am {dogDetails[0].age} year(s) old.</p>
      <p>Fact: {dogDetails[0].facts[1]}</p>
    </>
  );
}

export default Dog;
