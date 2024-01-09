import { CDN_URL } from '../utils/constants';
import { FiClock } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    locality,
    areaName,
    aggregatedDiscountInfoV3,
  } = resData?.info;
console.log(resData.info);
  // Display up to 3 cuisine keywords
  const displayedCuisines = cuisines.slice(0, 3).join(", ");


  return (
    <div className="m-4 p-4 w-[250px] h-[410px] bg-gray-100 rounded-lg hover:shadow-md hover:bg-gray-200 transition-all  ">
    
      <div>
        <div className="absolute mt-32 ml-5 font-extrabold text-stone-50 bg-gradient-to-t from-black">{aggregatedDiscountInfoV3.header} {aggregatedDiscountInfoV3.subHeader}</div>
        <img
          className="w-[250px] h-[150px] rounded-lg"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          
        />
      </div>
      

      <div>
        <h3 className="py-4 text-lg font-bold">{name}</h3>
        <hr />
        <h4>
        <em>
        
       {displayedCuisines}
       {cuisines.length > 3 && '... '}

        </em>
        </h4>
        <div className="flex align-middle">
      
          
          <h4> <AiOutlineStar />{avgRating} stars</h4>
        </div>

        

        <h4 className="align-middle">
          <h2><FiClock />{sla.deliveryTime} minutes</h2>
          
        </h4>
        
        <h4>{areaName}</h4>
       
      </div>
    </div>
  );
};
// return (
//   <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>

//     <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt={name} />
    
//     <h3>{name}</h3>
//     <h4>
//       {displayedCuisines}
//       {cuisines.length > 3 && '... '}
//     </h4>
//     <h4>{locality}</h4>
//     <h4>{avgRating} star rating</h4>
//     <h4>{costForTwo}</h4>
//     <div className="orderBox">
//       <h4>Order Now</h4>
//     </div>
//   </div>
// );
// };

// * Higher Order Component

// * input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute p-2 mb-6 ml-4 text-white bg-black rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
