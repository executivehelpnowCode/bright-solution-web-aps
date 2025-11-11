import Card from "../components/card";
import Button from "../components/button";

export default function Playbook() {
  return (
    <Card
      title="Data Strategy Playbook"
      description="A practical roadmap for data governance, quality, and interoperability to enable AI at scale."
    >
      <Button
        onClick={() => console.log("Open  View on Separate Page")}
        color="crimson"
      >
        View on Separate Page
      </Button>
    </Card>
  );
}
