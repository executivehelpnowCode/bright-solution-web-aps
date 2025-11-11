import Button from "../components/button";
import Card from "../components/card";

export default function Committees() {
  return (
    <Card
      title="Platform Excellence Committees"
      description="Define cross-functional roles and rituals to sustain innovation momentum and governance."
    >
      <div class="aspect-video rounded-xl shadow-lg shadow-dark-500/50 overflow-hidden">
        <img
          src="https://via.placeholder.com/1600x900.png?text=Platform+Excellence+Committees+Slide+Preview"
          alt="Platform Excellence Committees Slide Preview"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="mt-3 flex gap-3">
        <Button onClick={() => console.log("Download PPTX")} color="crimson">
          Download PPTX
        </Button>
      </div>
    </Card>
  );
}
