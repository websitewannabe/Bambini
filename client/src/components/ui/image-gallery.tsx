
import React, { useState } from 'react';
import { Card, CardContent } from './card';
import { Dialog, DialogContent, DialogTrigger } from './dialog';
import { Button } from './button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Image {
  url: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: Image[];
  columns?: number;
  className?: string;
}

export function ImageGallery({ images, columns = 3, className }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (images.length === 0) {
    return null;
  }

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    }
  };

  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5',
    6: 'grid-cols-1 md:grid-cols-3 lg:grid-cols-6'
  };

  return (
    <>
      <div className={cn(`grid gap-4 ${gridCols[columns as keyof typeof gridCols]}`, className)}>
        {images.map((image, index) => (
          <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-2">
              <div 
                className="aspect-square relative overflow-hidden rounded-md"
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="object-cover w-full h-full hover:scale-105 transition-transform"
                />
              </div>
              {image.caption && (
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  {image.caption}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent className="max-w-4xl w-full p-0">
          {selectedIndex !== null && (
            <div className="relative">
              <img
                src={images[selectedIndex].url}
                alt={images[selectedIndex].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              {/* Navigation Buttons */}
              {images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </>
              )}

              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white"
                onClick={() => setSelectedIndex(null)}
              >
                <X className="h-4 w-4" />
              </Button>

              {/* Image Counter */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {selectedIndex + 1} / {images.length}
                </div>
              )}

              {/* Caption */}
              {images[selectedIndex].caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                  <p className="text-center">{images[selectedIndex].caption}</p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
