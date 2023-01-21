import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2196f3;
  padding: 50px;
  border-radius: 10px;
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
  color: #fff;
`;

const Select = styled(motion.select)`
  padding: 10px;
  font-size: 18px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 2px solid #fff;
  outline: none;
  color: #fff;
  background-color: transparent;
  appearance: none;
  &:hover {
    border-color: #fff;
    cursor: pointer;
  }
`;

const Option = styled(motion.option)`
  font-size: 18px;
  background-color: #2196f3;
  color: #fff;
`;

const FormTitle = styled(motion.h2)`
  color: #fff;
  margin-bottom: 30px;
`;

const FormSubTitle = styled(motion.p)`
  color: #fff;
  margin-bottom: 30px;
`;

function App() {
  const [category, setCategory] = useState("");
  const [items, setItems] = useState([]);
  const foodItems = ["Eba", "Mega pot lover", "Hollandia yogurt", "Beans"];
  const drinkItems = ["Monster energy drink"];

  function handleCategoryChange(e) {
    setCategory(e.target.value);
    if (e.target.value === "food") {
      setItems(foodItems);
    } else if (e.target.value === "drink") {
      setItems(drinkItems);
    }
  }

  return (
    <FormWrapper>
      <FormTitle
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Select Your Item
      </FormTitle>
      <FormSubTitle
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        Please select category and Item
      </FormSubTitle>
      <Label>
        Category:
        <Select
          value={category}
          onChange={handleCategoryChange}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <Option value="">Please select a category</Option>
          <Option value="food">Food</Option>
          <Option value="drink">Drink</Option>
        </Select>
      </Label>
      <AnimatePresence>
        {category && (
          <Label>
            Items:
            <Select
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            >
              {items.map((item) => (
                <Option key={item} value={item}>
                  {item}
                </Option>
              ))}
            </Select>
          </Label>
        )}
      </AnimatePresence>
    </FormWrapper>
  );
}

export default App;
