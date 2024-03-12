import { useParams } from "react-router-dom";

function Movie() {
  const { title } = useParams();
  //   console.log(value);

  return <h1>Some move {title}</h1>;
}

export { Movie };
