import { ReactNode } from "react";
import css from "./index.module.css";
type Props = {
  id: string;
  children: ReactNode;
};
export default function Section(props: Props) {
  return (
    <div id={props.id} className={css.section}>
      <div className={css.childSection}>{props.children}</div>
    </div>
  );
}
