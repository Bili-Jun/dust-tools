import { useRoutes, Route } from "@solidjs/router";
import { IRouterProps } from "./types"

export default function Routes(props: IRouterProps) {
  const { config } = props
  const Routes = useRoutes(config);
  return (<Routes />)
}
