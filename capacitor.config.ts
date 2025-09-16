import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.9ec3ca94b0ac4563bd66a59cbcac2d29',
  appName: 'Black Screen',
  webDir: 'dist',
  server: {
    url: 'https://9ec3ca94-b0ac-4563-bd66-a59cbcac2d29.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
      backgroundColor: '#000000',
      showSpinner: false
    }
  }
};

export default config;