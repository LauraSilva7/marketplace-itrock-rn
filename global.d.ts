import "styled-components";
import type { AppTheme } from "./src/styles/theme";

declare module "styled-components/native" {
  export interface DefaultTheme extends AppTheme {}
}
