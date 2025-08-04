import { useState, useEffect } from 'react';

interface ApiLoadingState {
  isLoading: boolean;
  progress: number;
  currentTask: string;
  error: string | null;
}

interface UseApiLoadingOptions {
  minLoadingTime?: number;
  simulateApiCalls?: boolean;
}

export function useApiLoading(options: UseApiLoadingOptions = {}) {
  const { minLoadingTime = 3000, simulateApiCalls = true } = options;
  
  const [state, setState] = useState<ApiLoadingState>({
    isLoading: true,
    progress: 0,
    currentTask: 'Initializing...',
    error: null
  });

  const apiTasks = [
    { task: 'Connecting to database...', duration: 800 },
    { task: 'Authenticating user...', duration: 600 },
    { task: 'Loading user data...', duration: 700 },
    { task: 'Fetching configurations...', duration: 500 },
    { task: 'Loading dashboard data...', duration: 900 },
    { task: 'Finalizing setup...', duration: 500 }
  ];

  useEffect(() => {
    if (!simulateApiCalls) {
      // If not simulating, just show loading for minimum time
      const timer = setTimeout(() => {
        setState(prev => ({ ...prev, isLoading: false, progress: 100 }));
      }, minLoadingTime);
      
      return () => clearTimeout(timer);
    }

    let currentProgress = 0;
    let taskIndex = 0;
    const totalDuration = apiTasks.reduce((sum, task) => sum + task.duration, 0);
    const startTime = Date.now();

    const runApiSimulation = async () => {
      try {
        for (const { task, duration } of apiTasks) {
          setState(prev => ({ ...prev, currentTask: task }));
          
          // Simulate API call with progress updates
          const steps = 10;
          const stepDuration = duration / steps;
          const progressIncrement = (duration / totalDuration) * 100 / steps;
          
          for (let step = 0; step < steps; step++) {
            await new Promise(resolve => setTimeout(resolve, stepDuration));
            currentProgress += progressIncrement;
            setState(prev => ({ 
              ...prev, 
              progress: Math.min(currentProgress, 100) 
            }));
          }
          
          taskIndex++;
        }

        // Ensure minimum loading time
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime);
        
        if (remainingTime > 0) {
          await new Promise(resolve => setTimeout(resolve, remainingTime));
        }

        setState(prev => ({ 
          ...prev, 
          isLoading: false, 
          progress: 100,
          currentTask: 'Ready!'
        }));

      } catch (error) {
        setState(prev => ({ 
          ...prev, 
          error: 'Failed to load application data',
          isLoading: false
        }));
      }
    };

    runApiSimulation();
  }, [minLoadingTime, simulateApiCalls]);

  return state;
}

// Hook for real API calls
export function useRealApiLoading() {
  const [state, setState] = useState<ApiLoadingState>({
    isLoading: true,
    progress: 0,
    currentTask: 'Loading...',
    error: null
  });

  const loadApiData = async () => {
    try {
      setState(prev => ({ ...prev, currentTask: 'Connecting to server...', progress: 10 }));
      
      // Example: Load user data
      setState(prev => ({ ...prev, currentTask: 'Loading user data...', progress: 30 }));
      // const userData = await fetch('/api/user').then(res => res.json());
      
      setState(prev => ({ ...prev, currentTask: 'Loading dashboard...', progress: 60 }));
      // const dashboardData = await fetch('/api/dashboard').then(res => res.json());
      
      setState(prev => ({ ...prev, currentTask: 'Loading settings...', progress: 80 }));
      // const settings = await fetch('/api/settings').then(res => res.json());
      
      setState(prev => ({ ...prev, currentTask: 'Finalizing...', progress: 100 }));
      
      // Simulate final delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setState(prev => ({ ...prev, isLoading: false }));
      
    } catch (error) {
      setState(prev => ({ 
        ...prev, 
        error: 'Failed to load data from server',
        isLoading: false
      }));
    }
  };

  useEffect(() => {
    loadApiData();
  }, []);

  return { ...state, retry: loadApiData };
}