import React from "react";
import PropTypes from "prop-types";

const foodArr = [
  { id: 1, name: "malon", des: "green!!", "rating": 5 },
  { id: 2, name: "apple", des: "red!!", "rating": 3.5 },
  { id: 3, name: "raman", des: "white!!", "rating": 4.6 },
  { id: 4, name: "taco", des: "been!!", "rating": 4.8 },
];

function Testing({ name, des, rating }) {
  return (
    <div>
      <h3>
      I like {name} {des}!!
    </h3>
    <h4>{rating} / 5.0</h4>
    </div>
  );
}

Testing.propTypes = {
  name: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return foodArr.map((item) => (
    <Testing key={item.id} name={item.name} des={item.des} rating={item.rating} />
  ));
}

export default App;
