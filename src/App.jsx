import React, { useState } from "react";
import "./App.css";

function App() {
  const [foodItems, setFoodItems] = useState([]);
  const [drinkItems, setDrinkItems] = useState([]);

  const handleCheckboxChange = (event, section) => {
    const { value, checked } = event.target;
    if (checked) {
      if (section === "food") {
        setFoodItems([...foodItems, value]);
      } else if (section === "drink") {
        setDrinkItems([...drinkItems, value]);
      }
    } else {
      if (section === "food") {
        setFoodItems(foodItems.filter((item) => item !== value));
      } else if (section === "drink") {
        setDrinkItems(drinkItems.filter((item) => item !== value));
      }
    }
  };

  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeButtonClick = (size) => {
    setSelectedSize(size);
  };

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionsList, setSelectedOptionsList] = useState([]);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setSelectedOptionsList([selectedValue]);
  };
 
 
  const handleLogButtonClick = () => {
    console.log(selectedOptionsList.join(" + "));
    console.log(foodItems.join(" + "));
    console.log(drinkItems.join(" + "));
  };

  return (
    <div className="App">
      <h1 className="main__Text">Pitsa Buyurtma Qilish</h1>
      <div className="container">
        <div className="box">
          <div className="part__1">
            <h2>Noni Qanday Bolsin?</h2>
            <select className="option__tag" onChange={handleSelectChange}>
              <option value="Qalin">Qalin</option>
              <option value="O'rtacha">O'rtacha</option>
              <option value="Yupqa">Yupqa</option>
            </select>
            <h2 className="title__2">Kattaligi</h2>
            <div className="btn__box">
              <button
                className="btn__1"
                onClick={() => handleSizeButtonClick("25cm")}
              >
                25cm
              </button>
              <button
                className="btn__2"
                onClick={() => handleSizeButtonClick("30cm")}
              >
                30cm
              </button>
              <button
                className="btn__3"
                onClick={() => handleSizeButtonClick("35cm")}
              >
                35cm
              </button>
            </div>
            <h2 className="title__3">Ustiga Nima Solaylik?</h2>

            <div className="check__dad">
              <div className="check__box">
                <div className="check__con">
                  <input
                    type="checkbox"
                    id="pomidor"
                    className="click"
                    value="Pomidor"
                    onChange={(e) => handleCheckboxChange(e, "food")}
                  />
                  <label for="pomidor">Pomidor</label>
                </div>

                <div className="check__con">
                  <input
                    type="checkbox"
                    id="kurka"
                    className="click"
                    value="Kurka"
                    onChange={(e) => handleCheckboxChange(e, "food")}
                  />
                  <label for="kurka">Kurka go'shti</label>
                </div>

                <div className="check__con">
                  <input
                    type="checkbox"
                    id="zaytun"
                    className="click"
                    value="zaytun"
                    onChange={(e) => handleCheckboxChange(e, "food")}
                  />
                  <label for="zaytun">Zaytun</label>
                </div>
              </div>

              <div className="check__box__2">
                <div className="check__con">
                  <input
                    type="checkbox"
                    id="bodring"
                    className="click"
                    value="bodring"
                    onChange={(e) => handleCheckboxChange(e, "food")}
                  />

                  <label for="bodring">Tuzlangan bodring</label>
                </div>

                <div className="check__con">
                  <input
                    type="checkbox"
                    id="qo'ziqorin"
                    className="click"
                    value="qo'ziqorin"
                    onChange={(e) => handleCheckboxChange(e, "food")}
                  />
                  <label for="qo'ziqorin">Qo'ziqorin</label>
                </div>

                <div className="check__con">
                  <input
                    type="checkbox"
                    id="qazi"
                    className="click"
                    value="qazi"
                    onChange={(e) => handleCheckboxChange(e, "food")}
                  />
                  <label for="qazi">Qazi</label>
                </div>
              </div>
            </div>

            <h3 className="title__4">Qo'shimchalar</h3>
            <div className="addon__box">
              <div className="check__con">
                <input
                  type="checkbox"
                  id="achiq"
                  className="click"
                  value="achiq"
                  onChange={(e) => handleCheckboxChange(e, "drink")}
                />
                <label for="achiq">Achiq</label>
              </div>

              <div className="check__con add__div">
                <input
                  type="checkbox"
                  id="pishloq"
                  className="click"
                  value="pishloq"
                  onChange={(e) => handleCheckboxChange(e, "drink")}
                />
                <label for="pishloq">Pishloq</label>
              </div>
            </div>
          </div>
          <div className="part__2">
            <div className="separate">
              <h3>Non:</h3>
              <ul>
                {selectedOptionsList.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
            </div>
            <div className="separate">
              <h3>Kattaligi:</h3>
              <li>{selectedSize}</li>
            </div>

            <div className="separate">
              <h3>Ustida</h3>
              <ul>
                {foodItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="separate">
              <h3>Qo'shimcha</h3>
              <ul>
                {drinkItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <button onClick={handleLogButtonClick} className="upload__btn">
              Buyurtma berish
            </button>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default App;
