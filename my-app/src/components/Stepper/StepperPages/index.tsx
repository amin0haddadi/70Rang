import { FC } from "react";
import CheckShop from "./CheckShop";

interface IStepperPagesProps {
	activeStep: number;
}
const StepperPages: FC<IStepperPagesProps> = ({ activeStep }) => {
	return (
		<>
			{activeStep === 0 ? (
				<CheckShop />
			) : activeStep === 1 ? (
				<>Code block for step 1</>
			) : activeStep === 2 ? (
				<>Code block for step 2</>
			) : activeStep === 3 ? (
				<>Code block for step 3</>
			) : (
				<>Code block for default case</>
			)}
		</>
	);
};

export default StepperPages;
