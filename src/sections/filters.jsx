import Button from "../components/button";

export default function Filters() {
  return (
    <div className="h-28 bg-gray-50 w-full flex gap-3 items-center justify-center">
      <Button onClick={() => console.log("clicked")} color="crimson">
        Start with AI Readiness
      </Button>
      <Button onClick={() => console.log("clicked")} color="crimson">
        Start with AI Readiness
      </Button>
      <Button onClick={() => console.log("clicked")} color="crimson">
        Start with AI Readiness
      </Button>
      <Button onClick={() => console.log("clicked")} color="crimson">
        Start with AI Readiness
      </Button>
      <Button onClick={() => console.log("clicked")} color="crimson">
        Reset
      </Button>
    </div>
  );
}
