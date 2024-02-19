import { useState } from "react";

interface coordinates {
  lat: number | null;
  lng: number | null;
}

interface hookReturnObj {
  position: coordinates;
  isLoading: boolean;
  error: string | undefined;
  getLocation: () => void;
}

export function useGeolocation(): hookReturnObj {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState<coordinates>({
    lat: null,
    lng: null,
  });
  const [error, setError] = useState<string>();

  if (!navigator.geolocation) {
    setError("Your browser does not support geolocation");
  }

  const getLocation = () => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      },
      {
        enableHighAccuracy: true,
      },
    );
  };

  return { isLoading, position, error, getLocation };
}
