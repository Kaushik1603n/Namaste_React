const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "head1" }, "Hello 1"),
    React.createElement("h2", { id: "head2" }, "Hello 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "head1" }, "hai 1"),
    React.createElement("h2", { id: "head2" }, "hai 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
