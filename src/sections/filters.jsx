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

  useEffect(() => {
    console.clear();
    console.table(filterForm);
  }, [filterForm]);

  const handleResetFilters = () => {
    setFilterForm({
      search: "",
      pillars: "",
      types: "",
      levels: "",
    });
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 w-full">
      <div className="lg:w-8/12 w-full px-6 flex py-12 mt-6 gap-x-3 gap-y-10 lg:flex-row flex-col">
        <Input
          name="search"
          type="text"
          label="Search"
          placeholder={"Search resources"}
          value={filterForm.search || ""}
          onInputChange={(value) =>
            setFilterForm((prev) => ({ ...prev, search: value }))
          }
          onInputClear={handleResetFilters}
        />
        <Input
          name="pillars"
          type="combobox"
          label="Pillars"
          placeholder={"All pillars"}
          options={options || []}
          value={filterForm.pillars || ""}
          onOptionSelect={(option) =>
            setFilterForm((prev) => ({
              ...prev,
              pillars: option.name, // set the selected option name or id
            }))
          }
          onInputClear={handleResetFilters}
        />
        <Input
          name="types"
          type="combobox"
          label="Types"
          options={options || []}
          placeholder={"All types"}
          value={filterForm.types || ""}
          onOptionSelect={(option) =>
            setFilterForm((prev) => ({
              ...prev,
              types: option.name,
            }))
          }
          onInputClear={handleResetFilters}
        />
        <Input
          name="levels"
          type="combobox"
          label="Levels"
          options={options || []}
          placeholder={"All levels"}
          value={filterForm.levels || ""}
          onOptionSelect={(option) =>
            setFilterForm((prev) => ({
              ...prev,
              levels: option.name,
            }))
          }
          onInputClear={handleResetFilters}
        />
        <Button
          className="h-11 text-white"
          onClick={() => {
            // reset the filter state
            setFilterForm((prev) => ({
              ...prev,
              pillars: "", // reset this input
              // reset other filters if needed
            }));

            // optionally call any other side effect, like refetching data
            handleResetFilters();
          }}
          color="crimson"
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
