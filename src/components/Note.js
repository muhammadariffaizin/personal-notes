export default function Note({ id, title, body, createdAt }) {
  return (
    <div
      id={id}
      className="flex flex-col p-4 bg-white rounded-lg border border-corn-200 relative overflow-hidden sm:p-6"
    >
      <h2 className="mb-3 text-base font-semibold text-corn-900 md:text-xl">
        {title}
      </h2>
      <p className="text-sm font-normal text-corn-600">{createdAt}</p>
      <p>{body}</p>
    </div>
  );
}
