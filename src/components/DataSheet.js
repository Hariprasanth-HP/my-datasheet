import * as React from "react";
import { render } from "react-dom";
import { ReactGrid, Column, Row, Highlight } from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";
import { useEffect } from "react";
import { useState } from "react";
import { useCustomHook } from "./CustomHook";
const getPeople = () => [
  { name: "Thomas", surname: "Goldman" },
  { name: "Susie", surname: "Quattro" },
  { name: "", surname: "" },
];
const myData = [
  {
    name: "hari",
    order: 1,
    published: "2023-01-25T12:00:00Z",
    expiry: "2023-03-27T12:00:00Z",
  },
  {
    name: "yogesh",
    order: 2,
    published: "2023-02-25T12:00:00Z",
    expiry: "2023-04-27T12:00:00Z",
  },
  {
    name: "mani",
    order: 3,
    published: "2023-01-25T12:00:00Z",
    expiry: "2023-01-31T12:00:00Z",
  },
];

const getColumns = () => [
  { columnId: "name", width: 150 },
  { columnId: "surname", width: 150 },
];

const headerRow = {
  rowId: "header",
  cells: [
    { type: "header", text: "Name" },
    { type: "header", text: "Surname" },
  ],
};

const getRows = (people) => [
  headerRow,
  ...people.map((person, idx) => ({
    rowId: idx,
    cells: [
      { type: "text", text: person.name },
      { type: "text", text: person.surname },
    ],
  })),
];

const highlights = [
  { columnId: "name", rowId: 0, borderColor: "#00ff00" },
  { columnId: "surname", rowId: 1, borderColor: "#0000ff" },
  { columnId: "name", rowId: 2, borderColor: "#ff0000" },
];
export function DataSheet() {
  const [people] = React.useState(getPeople());
  const rows = getRows(people);
  const columns = getColumns();
  const [myfil, setMyfil] = useState([]);
  const [data] = useCustomHook("https://jsonplaceholder.typicode.com/todos/1");
  console.log("data", data);
  useEffect(() => {
    const filtered = myData.filter((d) => {
      var publishDate = d.published.slice(0, 10);
      var expiryDate = d.expiry.slice(0, 10);
      var CurrentDate = new Date();
      publishDate = new Date(publishDate);
      expiryDate = new Date(expiryDate);
      return (
        publishDate && CurrentDate > publishDate && CurrentDate < expiryDate
      );
    });
    setMyfil(filtered);
  }, []);
  console.log("myfile", myfil);
  return (
    <div>
      <ReactGrid rows={rows} columns={columns} highlights={highlights} />;
    </div>
  );
}
