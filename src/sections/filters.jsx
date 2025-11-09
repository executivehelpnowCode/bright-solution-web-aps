import Input from "../components/input";
import Button from "../components/button";
import { useEffect, useState } from "react";

export default function Filters() {
  const [filterForm, setFilterForm] = useState({
    search: "",
    pillar: "",
    type: "",
    level: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilterForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
          type="combobox"
          label="Pillar"
          placeholder={"All pillars"}
          value={""}
        />
        <Input
          type="combobox"
          label="Type"
          placeholder={"All types"}
          value={""}
        />
        <Input
          name="level"
          type="combobox"
          label="Level"
          placeholder={"All levels"}
          value={filterForm.level}
          onOptionSelect={(option) => console.log(option)}
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
