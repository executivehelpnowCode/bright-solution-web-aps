import Card from "../components/card";

export default function Overview({ title, description }) {
  return (
    <Card title={title} description={description}>
      <div className="aspect-video rounded-xl shadow-lg shadow-dark-500/50 overflow-hidden">
        <img
          src="https://via.placeholder.com/1600x900.png?text=Innovation+Maturity+Scale+Visual"
          alt="Innovation Maturity Scale Visual"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <p className="text-sm text-gray-700 mt-3">
        A high-level view of the stages from Foundation to Scale. Use this to
        orient leadership and teams.
      </p>
    </Card>
  );
}
