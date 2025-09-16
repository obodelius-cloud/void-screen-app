import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Keep screen always on (prevent device from sleeping)
    if ('wakeLock' in navigator) {
      navigator.wakeLock.request('screen').catch(() => {
        // Handle wake lock failure silently
      });
    }
  }, []);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background overflow-hidden">
      {/* Pure black screen - nothing else needed */}
    </div>
  );
};

export default Index;
