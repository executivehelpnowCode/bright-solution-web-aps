import Input from "../components/input";
import Button from "../components/button";
import { useEffect, useState } from "react";
import { options } from "../ constants";

export default function Filters() {
  const [filterForm, setFilterForm] = useState({
    search: "",
    pillars: "",
    types: "",
    levels: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilterForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleOptionSelect = (value) => {
  //   const name = e.target.name;
  //   setFilterForm((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // useEffect(() => {
  //   console.clear();
  //   console.table(filterForm);
  // }, [filterForm]);

  return (
    <div className="flex items-center justify-center bg-gray-100 w-full">
      <div className="lg:w-8/12 w-full px-6 flex py-12 mt-6 gap-x-3 gap-y-10 lg:flex-row flex-col">
        <Input
          name="search"
          type="text"
          label="Search"
          placeholder={"Search resources..."}
          value={filterForm.search}
          onChange={handleInputChange}
        />
        <Input
          name="pillars"
          type="combobox"
          label="Pillars"
          options={options}
          placeholder={"All pillars"}
          value={filterForm.pillars}
          onChange={handleInputChange}
        />
        <Input
          name="types"
          type="combobox"
          label="Types"
          placeholder={"All types"}
          value={filterForm.types}
          onChange={handleInputChange}
        />
        <Input
          name="levels"
          type="combobox"
          label="Levels"
          placeholder={"All levels"}
          value={filterForm.levels}
          onChange={handleInputChange}
        />
        <Button
          className="h-11 text-white"
          onClick={() => console.log("clicked")}
          color="crimson"
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
