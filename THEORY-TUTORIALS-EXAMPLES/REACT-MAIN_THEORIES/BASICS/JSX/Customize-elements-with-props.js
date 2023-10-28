const CustomizeElement = () => {
  const inputType = "number";
  const minValue = 5;
  return <input type={inputType} min={minValue} />;
};

//props doesn;t have to be defined as variables
const AppCustom = () => {
  const message = "Enter age";
  return (
    <input
      type="number"
      min={5}
      max={10}
      list={[1, 2, 3]}
      style={{ color: "red" }}
      alt={message}
    />
  );
};
