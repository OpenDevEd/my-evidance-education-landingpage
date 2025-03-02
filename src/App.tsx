import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function App() {
  const sites = [
    {
      title: "Education in Malawi",
      description: "A digital library offering a wide array of educational resources including academic articles and lesson plans. The site is user-friendly, and focuses on enhancing education quality in Malawi.",
      image: "/assets/malawi.png",
      link: "https://malawi.eved.io/lib/"
    },
    {
      title: "Evidence library of Open Development & Education",
      description: "This library collects evidence generated and used by Open Development & Education. It contains everything we published, together with everything we read or cite.",
      image: "/assets/openDev.png",
      link: "https://docs.opendeved.net/lib/"
    },
    {
      title: "Technology in Education library",
      description: "This library contains a range of publications, including meta-analysis and literature reviews, on children's learning with technology in England, UK.",
      image: "/assets/TechnologyInEd.png",
      link: "https://tech.eved.io/lib/"
    },
    {
      title: "Programa Potenciar",
      description: "This is the evidence library of Programa Potenciar.",
      image: "/assets/progPot.png",
      link: "https://docs.programapotenciar.com/lib/"
    },
    {
      title: "Climate Change",
      description: "This library collects evidence on climate change and how climate change affects education.",
      image: "/assets/climate.png",
      link: "https://climate.eved.io/lib/"
    }
  ]

  const relatedSites = [
    {
      title: "Evidence library of AdaptDev",
      description: "This is the evidence library of the AdaptDev programme.",
      image: "/assets/malawi.png",
      link: "https://docs.adaptdev.info/"
    },
    {
      title: "Evidence library of the EdTech Hub",
      description: "This is the evidence library of the EdTech Hub.",
      image: "/assets/EdTech.png",
      link: "https://docs.edtechhub.org/lib/"
    },
    {
      title: "African Education Research Database",
      description: "This is the African Education Research Database, maintained by ESSA Africa.",
      image: "/assets/ESSA.png",
      link: "https://essa-africa.org/AERD"
    }
  ]

  return (
    <div className="min-h-screen bg-white relative pb-32 overflow-x-hidden">
      <header className="h-[90px] w-full p-2.5 flex items-center justify-center">
        <a href="#" className="h-[70px]">
          <img src="/assets/logo-dark.png" alt="Logo" className="h-full w-auto" />
        </a>
      </header>

      <main className="flex flex-col items-center relative z-10 overflow-x-hidden">
        <section className="px-5 pt-5 text-center">
          <h1 className="text-5xl text-[#e68124] mb-0">Evidence in Education</h1>
          <h3 className="mb-10 font-medium">An experiment in rapid evidence collation</h3>
        </section>

        <section className="relative w-full px-12">
          <h2 className="text-3xl text-center text-[#e68124] mb-8">Our sites</h2>
          
          <Carousel className="w-full max-w-[1200px] mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {sites.map((site, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-[450px]">
                    <a 
                      href={site.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl shadow-md bg-white transition-transform duration-150 overflow-hidden no-underline hover:scale-105 h-full flex flex-col"
                    >
                      <img 
                        src={site.image} 
                        alt={site.title}
                        className="w-full h-48 object-cover flex-shrink-0"
                      />
                      <div className="flex flex-col flex-grow p-5">
                        <h4 className="text-[#e68124] mb-3 text-xl">{site.title}</h4>
                        <p className="text-[#a7a9be]">{site.description}</p>
                      </div>
                    </a>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </section>

        <section className="relative w-full px-12 mt-12">
          <h2 className="text-3xl text-center text-[#e68124] mb-8">Related sites</h2>
          
          <Carousel className="w-full max-w-[1200px] mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {relatedSites.map((site, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-[450px]">
                    <a 
                      href={site.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl shadow-md bg-white transition-transform duration-150 overflow-hidden no-underline hover:scale-105 h-full flex flex-col"
                    >
                      <img 
                        src={site.image} 
                        alt={site.title}
                        className="w-full h-48 object-cover flex-shrink-0"
                      />
                      <div className="flex flex-col flex-grow p-5">
                        <h4 className="text-[#e68124] mb-3 text-xl">{site.title}</h4>
                        <p className="text-[#a7a9be]">{site.description}</p>
                      </div>
                    </a>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </section>
      </main>

      <footer className="min-h-[300px] absolute bottom-0 left-0 text-center w-full bg-[#e68124] flex flex-col justify-end p-5 text-white z-[1]">
        <small>
          <a href="https://opendeved.net/" target="_blank" rel="noopener noreferrer" className="underline cursor-pointer z-[5]">
            Open Development and Education
          </a>
          {' '}Maintained by Open Development & Education.
        </small>
      </footer>
    </div>
  )
}

export default App
