import Button from "../components/button";
import Card from "../components/card";

export default function Assessment() {
  return (
    <Card
      title="AI Readiness & Data Maturity Self-Assessment"
      description="Gauge your current maturity to unlock a tailored Level 1–5 pathway report."
    >
      <Button onClick={() => console.log("Open Assessment")} color="crimson" className="p-[10px]">
        Open Assessment 
      </Button>
    </Card>
  );
}
