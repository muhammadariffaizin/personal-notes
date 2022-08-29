export default function Input({ id, label, type, placeholder }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-corn-900"
      >
        {label}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        className="bg-corn-50 text-corn-900 text-sm rounded-lg focus:ring-corn-400 focus:border-corn-400 block w-full p-2.5 hover:bg-corn-100 hover:shadow"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
