import { create } from 'zustand'

export const useGameStore = create((set) => ({
  progress: {
    currentArena: 0,
    completedLessons: [],
    collectedTokens: [],
    score: 0,
    lives: 3
  },
  
  unlockedArenas: [0],
  completedCourses: [],
  
  collectToken: (arenaId, tokenId) => set((state) => ({
    progress: {
      ...state.progress,
      collectedTokens: [...state.progress.collectedTokens, tokenId],
      score: state.progress.score + 10
    }
  })),
  
  completeLesson: (arenaId, lessonId) => set((state) => ({
    progress: {
      ...state.progress,
      completedLessons: [...state.progress.completedLessons, lessonId]
    },
    unlockedArenas: state.unlockedArenas.includes(arenaId + 1) 
      ? state.unlockedArenas 
      : [...state.unlockedArenas, arenaId + 1]
  })),
  
  completeCourse: (courseId) => set((state) => ({
    completedCourses: state.completedCourses.includes(courseId)
      ? state.completedCourses
      : [...state.completedCourses, courseId]
  })),
  
  resetProgress: () => set((state) => ({
    progress: {
      currentArena: 0,
      completedLessons: [],
      collectedTokens: [],
      score: 0,
      lives: 3
    },
    unlockedArenas: [0],
    completedCourses: [],
    currentLesson: null
  })),
  
  loseLife: () => set((state) => ({
    progress: {
      ...state.progress,
      lives: Math.max(0, state.progress.lives - 1)
    }
  })),
  
  respawn: () => set((state) => ({
    progress: {
      ...state.progress,
      currentArena: 0
    }
  })),
  
  setCurrentArena: (arenaId) => set((state) => ({
    progress: {
      ...state.progress,
      currentArena: arenaId
    },
    currentLesson: arenaId
  })),
  
  currentLesson: null,
}))