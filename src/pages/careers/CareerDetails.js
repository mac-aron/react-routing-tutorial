import { useParams, useLoaderData } from "react-router-dom";

export default function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career details for {career.title}</h2>
      <p>Starting salary: £{career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
          dolore aperiam laborum velit in odio nobis doloremque vero temporibus
          ab quidem nulla reprehenderit repellendus nam. Voluptatem numquam,
          cumque reiciendis debitis iste optio nesciunt, eum, eos quo ex facilis
          veritatis commodi sapiente consequatur sequi quae odit. Nam modi ipsum
          non repudiandae.
        </p>
      </div>
    </div>
  );
}

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:4000/careers/" + id);

  if (!res.ok) {
    throw Error("Could not ifnd that career");
  }
  return res.json();
};
