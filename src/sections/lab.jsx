import Card from "../components/card";

export default function Lab() {
  return (
    <Card
      title="Innovation Lab"
      description="A sandbox to pilot solutions, test assumptions, and accelerate adoption with real-world feedback loops."
    >
      <div class="aspect-video rounded-xl shadow-lg shadow-dark-500/50 overflow-hidden">
        <img
          src="about:blank"
          alt="Innovation Lab"
          class="w-full h-full rounded-lg border"
        />
      </div>
      <div class="mt-3 flex gap-3">
        <a
          href="#"
          class="font-semibold text-red-700 hover:none mt-3 inline-block"
        >
          Learn More
        </a>
      </div>
    </Card>
  );
}
