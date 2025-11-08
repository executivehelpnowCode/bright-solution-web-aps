export default function Container({ name, children, ...props }) {
  return (
    <section
      {...props}
      name={name}
      className="w-full border-1 rounded-lg px-3 py-4"
    >
      {children}
    </section>
  );
}
