import Card from "../components/card";

export default function Engine() {
  return (
    <Card
      title="Innovation Engine"
      description="Bright Solutions’ methodology for moving from pilots to scalable, measurable outcomes across sites."
    >
      <div class="aspect-video rounded-xl shadow-lg shadow-dark-500/50 overflow-hidden">
        <img
          src="about:blank"
          alt="Innovation Engine"
          class="w-full h-full rounded-lg border"
        />
      </div>
      <div class="mt-3 flex gap-3">
        <a
          href="#"
          class="font-semibold text-red-700 hover:none mt-3 inline-block"
        >
          Visit Subpage
        </a>
      </div>
    </Card>
  );
}
