const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "About Me!"),
    React.createElement(Pet, {
      animal: "dog",
      name: "logan",
      breed: "ACS",
    }),
    React.createElement(Pet, {
      animal: "Rabbit",
      name: "lola",
      breed: "dwarf",
    }),
    React.createElement(Pet, {
      animal: "tuttle",
      name: "noni",
      breed: "redear",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
