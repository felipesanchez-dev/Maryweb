"use client"

import * as React from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"

const CarouselContext = React.createContext<{
  orientation: "horizontal" | "vertical"
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  handleKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void
  opts: any // Keeping generic for opts for now
  scrollSnaps: number[]
  selectedIndex: number
  scrollTo: (index: number) => void
} | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

type CarouselApi = {
  canScrollNext: () => boolean
  canScrollPrev: () => boolean
  scrollNext: () => void
  scrollPrev: () => void
  scrollTo: (index: number, jump?: boolean) => void
  selectedScrollSnap: () => number
  scrollSnapList: () => number[]
  // Add other methods and properties from Embla's API if needed
}


interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  opts?: any // Keeping generic for opts for now
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void // Adjusted for a simpler Carousel API type
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Simplified state for demonstration, in a real scenario, you'd use Embla Carousel
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(true)
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    
    // This is a placeholder for Embla's scrollSnaps
    const scrollSnaps = React.useMemo(() => 
      React.Children.toArray(children).filter(child => React.isValidElement(child) && child.type === CarouselContent).flatMap(
        (contentChild:any) => React.Children.toArray(contentChild.props.children).map((_,i) => i)
      ), [children]);


    // Mock functions, replace with actual Embla logic
    const scrollPrev = React.useCallback(() => {
       setSelectedIndex(prev => {
        const newIndex = Math.max(0, prev - 1);
        setCanScrollPrev(newIndex > 0);
        setCanScrollNext(newIndex < scrollSnaps.length -1);
        return newIndex;
       });
    }, [scrollSnaps.length])

    const scrollNext = React.useCallback(() => {
       setSelectedIndex(prev => {
        const newIndex = Math.min(scrollSnaps.length - 1, prev + 1);
        setCanScrollPrev(newIndex > 0);
        setCanScrollNext(newIndex < scrollSnaps.length -1);
        return newIndex;
       });
    }, [scrollSnaps.length])

    const scrollTo = React.useCallback((index: number) => {
        setSelectedIndex(idx => {
            const newIndex = Math.max(0, Math.min(scrollSnaps.length - 1, index));
            setCanScrollPrev(newIndex > 0);
            setCanScrollNext(newIndex < scrollSnaps.length -1);
            return newIndex;
        });
    }, [scrollSnaps.length]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )
    
    // Simulate Embla API for setApi prop
    React.useEffect(() => {
        if (setApi) {
          const mockApi = {
            canScrollNext: () => canScrollNext,
            canScrollPrev: () => canScrollPrev,
            scrollNext,
            scrollPrev,
            scrollTo,
            selectedScrollSnap: () => selectedIndex,
            scrollSnapList: () => scrollSnaps,

          };
          setApi(mockApi as CarouselApi); // Cast as CarouselApi
        }
         // Initial check for scroll buttons
        setCanScrollPrev(selectedIndex > 0);
        setCanScrollNext(selectedIndex < scrollSnaps.length -1 && scrollSnaps.length > 1);

      }, [setApi, scrollPrev, scrollNext, scrollTo, selectedIndex, scrollSnaps, canScrollPrev, canScrollNext]);


    return (
      <CarouselContext.Provider
        value={{
          orientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          handleKeyDown,
          opts,
          scrollSnaps,
          selectedIndex,
          scrollTo,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation, selectedIndex } = useCarousel()
  // Calculate the transform based on the selectedIndex
  // This is a simplified translation; Embla handles this more robustly
  const transformValue = `translateX(-${selectedIndex * 100}%)`; // Assuming each item takes 100% width

  return (
    <div ref={ref} className="overflow-hidden">
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        style={{ transform: transformValue, transition: 'transform 0.5s ease-in-out' }} // Added transition
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
