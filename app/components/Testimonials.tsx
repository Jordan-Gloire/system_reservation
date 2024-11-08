"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(1);
  const [count, setCount] = React.useState(0);

  const comments = [
    {
      description: "Un service rapide et efficace. J'ai pu réserver une salle pour mon mariage en quelques clics !",
      nom: "Ruth OBOA"
    },
    {
      description: "Coworking super pratique avec ReserVite, je recommande.",
      nom: "Paul MALONGA"
    },
    {
      description: "Facile à utiliser, les rappels sont très utiles.",
      nom: "Sophie BALOSSA"
    }
  ];

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-xs">
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          {comments.map((comment, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                  <p className="text-lg text-center font-medium">{comment.description}</p>
                  <span className="text-sm text-muted-foreground mt-2">– {comment.nom}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
}
