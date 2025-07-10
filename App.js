import React from "react";
import { createRoot } from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
 React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { id: "head1", key: "h1-child1" }, "Hello 1"),
    React.createElement("h2", { id: "head2", key: "h2-child1" }, "Hello 2"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { id: "head1", key: "h1-child2" }, "hai 1"),
    React.createElement("h2", { id: "head2", key: "h2-child2" }, "hai 2"),
  ]),
]);

const root = createRoot(document.getElementById("root"));


root.render(parent);
