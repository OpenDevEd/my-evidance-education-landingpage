import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";

interface SiteCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function SiteCard({ title, description, image, link }: SiteCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150; // approximately 4-5 lines of text
  const shouldTruncate = description.length > maxLength;
  const truncatedText =
    shouldTruncate && !isExpanded
      ? `${description.slice(0, maxLength)}...`
      : description;

  const handleExpandClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent the card link from activating
    setIsExpanded(!isExpanded);
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full transition-transform duration-150 hover:scale-[1.01] mx-2"
    >
      <Card className="bg-white rounded-2xl overflow-hidden">
        <CardHeader className="p-0">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover flex-shrink-0 rounded-t-lg"
          />
        </CardHeader>
        <CardContent className="p-5">
          <h4 className="text-orange mb-3 text-xl">{title}</h4>
          <p className="text-brand-gray">{truncatedText}</p>
          {shouldTruncate && (
            <button
              onClick={handleExpandClick}
              className="text-orange hover:text-orange-600 mt-2 text-sm font-medium"
            >
              {isExpanded ? "Show less" : "Read more"}
            </button>
          )}
        </CardContent>
      </Card>
    </a>
  );
}
