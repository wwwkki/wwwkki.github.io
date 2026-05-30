interface SectionHeadingProps {
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">{description}</p>
      )}
      <div
        className={`mt-4 h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
