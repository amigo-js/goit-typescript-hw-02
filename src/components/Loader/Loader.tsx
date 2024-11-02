import RiseLoader from "react-spinners/RiseLoader";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loader}>
      <RiseLoader color="#adff2f" />
    </div>
  );
}
