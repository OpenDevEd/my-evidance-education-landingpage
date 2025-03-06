import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

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
  const [descriptionLines, setDescriptionLines] = useState(0);

  const titleRef = useRef<HTMLHeadingElement>(null);

  const handleExpandClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent the card link from activating
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    // If the title is more than 2 lines, truncate the description to 2 lines
    if (titleRef.current) {
      const titleHeight = titleRef.current.offsetHeight;
      if (titleHeight > 40) {
        setDescriptionLines(2);
      } else {
        setDescriptionLines(3);
      }
    }
  }, [title]);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full transition-transform duration-150 hover:scale-[1.01] mx-2"
    >
      <Card
        className={cn(
          "bg-white rounded-2xl overflow-hidden flex flex-col",
          !isExpanded && "min-h-[370px]"
        )}
      >
        <CardHeader className="p-0">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover flex-shrink-0 rounded-t-lg"
          />
        </CardHeader>
        <CardContent className="p-5 flex flex-col h-full">
          <h4
            ref={titleRef}
            title={title}
            className="text-orange text-xl line-clamp-2 min-h-[2rem] mb-2"
          >
            {title}
          </h4>
          <div
            className={cn(
              "text-brand-gray",
              !isExpanded && `line-clamp-${descriptionLines}`
            )}
          >
            <p>{description}</p>
          </div>
          {shouldTruncate && (
            <button
              onClick={handleExpandClick}
              className="text-orange hover:text-orange-600 mt-2 text-sm font-medium self-start"
            >
              {isExpanded ? "Show less" : "Read more"}
            </button>
          )}
        </CardContent>
      </Card>
    </a>
  );
}
