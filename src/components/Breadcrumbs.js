import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Breadcrumbs() {
  const location = useLocation();

  let currentLink = "";
  const crumbs = location.pathname
    .split("/") // split the path into an array of segments
    .filter((crumb) => crumb !== "") // remove empty segments
    .map((crumb) => {
      currentLink += `/${crumb}`; // build the current link
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return <div className="breadcrumbs">
    {crumbs}
  </div>;
}
