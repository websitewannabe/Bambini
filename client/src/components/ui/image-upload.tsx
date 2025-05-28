
import React, { useRef, useState } from 'react';
import { Button } from './button';
import { Card, CardContent } from './card';
import { X, Upload, Image as ImageIcon } from 'lucide-react';
import { useImageUpload, type UploadedImage } from '@/hooks/use-image-upload';
import { cn } from '@/lib/utils';

interface ImageUploadProps {
  onImageUpload?: (image: UploadedImage) => void;
  onImageRemove?: (filename: string) => void;
  maxImages?: number;
  existingImages?: UploadedImage[];
  className?: string;
}

export function ImageUpload({ 
  onImageUpload, 
  onImageRemove, 
  maxImages = 5,
  existingImages = [],
  className 
}: ImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<UploadedImage[]>(existingImages);
  const { uploadImage, deleteImage, uploading, error, clearError } = useImageUpload();

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    
    for (const file of files) {
      if (images.length >= maxImages) {
        break;
      }

      // Validate file type
      if (!file.type.startsWith('image/')) {
        continue;
      }

      const result = await uploadImage(file);
      if (result) {
        const newImages = [...images, result];
        setImages(newImages);
        onImageUpload?.(result);
      }
    }

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleRemoveImage = async (image: UploadedImage) => {
    const success = await deleteImage(image.filename);
    if (success) {
      const newImages = images.filter(img => img.filename !== image.filename);
      setImages(newImages);
      onImageRemove?.(image.filename);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    
    for (const file of files) {
      if (images.length >= maxImages) {
        break;
      }

      if (file.type.startsWith('image/')) {
        const result = await uploadImage(file);
        if (result) {
          const newImages = [...images, result];
          setImages(newImages);
          onImageUpload?.(result);
        }
      }
    }
  };

  return (
    <div className={cn("space-y-4", className)}>
      {/* Upload Area */}
      <Card 
        className="border-dashed border-2 cursor-pointer hover:border-primary/50 transition-colors"
        onClick={() => fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <CardContent className="p-6 text-center">
          <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
          <p className="text-sm text-muted-foreground mb-2">
            {uploading ? 'Uploading...' : 'Click to upload or drag and drop images'}
          </p>
          <p className="text-xs text-muted-foreground">
            PNG, JPG, GIF up to 5MB ({images.length}/{maxImages})
          </p>
        </CardContent>
      </Card>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Error Display */}
      {error && (
        <div className="bg-destructive/15 border border-destructive/20 rounded-md p-3">
          <p className="text-sm text-destructive">{error}</p>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={clearError}
            className="h-auto p-0 text-destructive hover:text-destructive/80"
          >
            Dismiss
          </Button>
        </div>
      )}

      {/* Image Grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <Card key={image.filename} className="relative group">
              <CardContent className="p-2">
                <div className="aspect-square relative overflow-hidden rounded-md">
                  <img
                    src={image.url}
                    alt={image.originalName}
                    className="object-cover w-full h-full"
                  />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-1 right-1 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveImage(image);
                    }}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-1 truncate">
                  {image.originalName}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
