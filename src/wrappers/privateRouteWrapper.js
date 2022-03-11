import { Route } from "react-router-dom"

export default function PrivateRouteWrapper({name, element}) {
  return <Route path={name} element={element} />;
}