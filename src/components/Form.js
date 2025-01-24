import { useRef } from "react";
import useStore from "../store";

export const Form = () => {
  const ref = useRef();
  const { submit, setInput, input } = useStore();
  const onSubmit = (e) => {
    e.preventDefault();
    if (input) {
      submit({ id: Number(new Date()), task: input, done: false });
    }
    ref.current.value = null; // to access and clear the text input
  };
  return (
    <form onSubmit={onSubmit} className="mb-4 px-4">
      <input
        ref={ref}
        className="form-control mb-4"
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};
