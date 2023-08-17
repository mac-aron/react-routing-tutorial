import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found! 404 Error</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, odio
        perspiciatis provident sit error nemo deserunt, iusto libero velit dicta
        commodi expedita delectus deleniti molestiae magni porro saepe et?
        Repudiandae harum veritatis fuga iusto officiis assumenda vel eum,
        minima, possimus debitis laudantium, alias rerum beatae tempore qui
        accusamus doloremque consectetur.
      </p>
      <p>
        Go to the <Link to="/">Homepage</Link>.
      </p>
    </div>
  );
}
