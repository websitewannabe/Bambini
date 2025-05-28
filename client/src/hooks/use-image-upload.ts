
import { useState } from 'react';
import { apiRequest } from '@/lib/queryClient';

export interface UploadedImage {
  filename: string;
  url: string;
  originalName: string;
  size: number;
}

export function useImageUpload() {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadImage = async (file: File): Promise<UploadedImage | null> => {
    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('/api/upload/image', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const result = await response.json();
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Upload failed';
      setError(errorMessage);
      return null;
    } finally {
      setUploading(false);
    }
  };

  const deleteImage = async (filename: string): Promise<boolean> => {
    try {
      await apiRequest('DELETE', `/api/images/${filename}`);
      return true;
    } catch (err) {
      setError('Failed to delete image');
      return false;
    }
  };

  return {
    uploadImage,
    deleteImage,
    uploading,
    error,
    clearError: () => setError(null)
  };
}
