let trackingInterval: ReturnType<typeof setInterval> | null = null;

export const startTruckSimulation = (moveTruck: () => void) => {
  if (trackingInterval) {
    return;
  }

  trackingInterval = setInterval(() => {
    moveTruck();
  }, 2000);
};

export const stopTruckSimulation = () => {
  if (!trackingInterval) {
    return;
  }

  clearInterval(trackingInterval);

  trackingInterval = null;
};
