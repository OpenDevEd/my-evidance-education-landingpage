import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { SiteCard } from "./SiteCard";

interface Site {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface SiteCarouselProps {
  title: string;
  sites: Site[];
}

export function SiteCarousel({ title, sites }: SiteCarouselProps) {
  return (
    <section className="relative w-full">
      <h2 className="text-3xl font-bold text-center text-orange mb-4">
        {title}
      </h2>

      <Carousel className="w-full mx-auto">
        <CarouselContent className="p-2">
          {sites.map((site, index) => (
            <CarouselItem
              key={index}
              className={`md:pl-4 md:basis-1/2 lg:basis-1/3`}
            >
              <SiteCard {...site} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
}
