import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { setDialogMessage, setShowDialog } from "../../redux/slices/uiSlice";
import { OnboardingCard } from "../OnboardingCard";

function FreeTrialOverDialog() {
  const dispatch = useDispatch();
  const history = useAppSelector((store) => store.session.history);

  useEffect(() => {
    if (history.length === 0) {
      dispatch(setShowDialog(false));
      dispatch(setDialogMessage(undefined));
    }
  }, [history]);

  return (
    <div className="flex-1">
      <OnboardingCard isDialog />
    </div>
  );
}

export default FreeTrialOverDialog;
