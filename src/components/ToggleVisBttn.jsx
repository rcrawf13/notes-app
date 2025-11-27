import image1 from "../assets/hideIcon.png";
import image2 from "../assets/showIcon.png";

const ToggleVisBttn = ({isVisible,setIsVisible}) => {

  const imgUrl1 = {backgroundImage:`url(${image1})`};
  const imgUrl2 = {backgroundImage:`url(${image2})`};

  return (
    <div onClick={()=>{setIsVisible(!isVisible)}}  className="showHideContainer">
          <div 
            
            className="showHideIcon"
            style={isVisible?imgUrl2:imgUrl1}
            >
        
          </div>
    </div>
        )
}

export default ToggleVisBttn