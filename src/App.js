import Profession from "./components/Profession";
import Interest from "./components/Interest";
import Learning from "./components/Learning";
import Math from "./components/Math";
import Review from "./components/Review";
import Right from "./components/Right";
import Path from "./components/Path";
import { useGlobalContext } from "./Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function App() {
  const { load, step, setStep, setLoad } = useGlobalContext();

  const renderStepComponent = () => {
    switch (step) {
      case 1:
        return <Profession />;
      case 2:
        return <Interest />;
      case 3:
        return <Learning />;
      case 4:
        return <Math />;
      case 5:
        return <Review />;
      case 6:
        return <Right />;
      case 7:
        return <Path />;
      default:
        return null;
    }
  };

  const calculateWidth = (percentage) => {
    return `${percentage}%`;
  };

  const handleClick = () => {
    if (step !== 1) setStep(step - 1);
    setLoad(load - 20);
  }

  
  return (
    <div className={`${load <= 100 ? 'mt-10' : 'mt-0'} flex flex-col items-center justify-center`}>
      <div className="flex justify-center w-4/5 h-1.5 items-center">
      {load > 20 && load <= 100 &&(
        <div className="mr-4" onClick={handleClick}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
      )}

      {load <= 100 && (
        <div className="w-5/6 bg-[#e6e6e6] rounded-full h-1.5 ">
          <div
            className="bg-[#179f7f] h-1.5 rounded-l-full transition-width duration-300 ease-in-out"
            style={{ width: calculateWidth(load) }}
          ></div>
        </div>
      )}
      </div>

      {renderStepComponent()} 
    </div>
  );
}

export default App;
