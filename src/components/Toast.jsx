import { useStateContext } from "../contexts/ContextProvider";
import AlertModal from "./modals/AlertModal";

export default function Toast() {
  const { toast } = useStateContext();

  // Define the color based on the toast type
  let toastColor = 'bg-emerald-500';
  if (toast.type === 'error') {
    toastColor = 'bg-red-500';
  }

  return (
    <>
      {toast.show && (
        <AlertModal toast={ toast }/>
      )}
    </>
  );
}