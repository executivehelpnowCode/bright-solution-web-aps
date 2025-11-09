import Input from "../components/input";
import Button from "../components/button";

export default function Filters() {
  return (
    <div className="flex items-center justify-center bg-gray-100 w-full">
      <div className="w-8/12 flex flex-row py-12 gap-3">
        <Input
          type="text"
          label="Search"
          placeholder={"Search resources..."}
          value={""}
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
          type="combobox"
          label="Level"
          placeholder={"All levels"}
          value={""}
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
