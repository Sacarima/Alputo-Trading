import { useState } from "react";

const ServiceCard = ({ icon, title, details, className, paragraphClassName }) => {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => { setIsReadMore(!isReadMore) };
  
    const cutoffLength = 110;
    const showLessText = details.length > cutoffLength ? details.substring(0, cutoffLength) + "..." : details;
    const showMoreText = details;
  
  
    return (
      <>
        <div className={`w-full px-4 md:w-1/2 lg:w-1/3 ${className}`} >
          <div className="mb-9 rounded-[20px] bg-[#fff] p-10 shadow-2 hover:shadow-lg dark:bg-light-navy md:px-7 xl:px-10">
            <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
              {icon}
            </div>
            <h4 className="mb-[14px] text-xl font-semibold text-dark dark:text-white">
              {title}
            </h4>
            {/* <p className={`text-body-color  dark:text-dark-6 ${paragraphClassName}`}>{details}</p> */}
            {(details.length > cutoffLength) && (
              <p className={`text-body-color  dark:text-dark-6 ${paragraphClassName}`}>
                {isReadMore ? showLessText : showMoreText}
              </p>
            )}
            {/* <p className="text-body-color  dark:text-dark-6">{isReadMore ? showLessText : showMoreText}</p> */}
            <button onClick={toggleReadMore} className="text-primary font-semibold">
            {isReadMore ? 'Read More' : 'Show Less'}
          </button>
          </div>
        </div>
      </>
    );
  };

export default ServiceCard;
  