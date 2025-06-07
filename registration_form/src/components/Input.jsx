export default function Input({ label, invalid, ...props }) {
  let labelClasses = "block mb-2 text-xs font-semibold tracking-wide uppercase";

  let inputClasses =
    "w-full px-4 py-3 leading-6 bg-[#e2e0ff] text-gray-700 border border-transparent rounded shadow-sm";

  if (invalid) {
    labelClasses += " text-[#f87171]";
    inputClasses += " text-[#ef4444] bg-[#fed2d2] border-[#f73f3f]";
  } else {
    labelClasses += " text-[#a7a1ff]";
    inputClasses += " text-[#374151] bg-[#e2e0ff]";
  }

  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input className={inputClasses} {...props} />
    </p>
  );
}
