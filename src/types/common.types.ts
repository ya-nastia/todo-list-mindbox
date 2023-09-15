export interface ITodo {
    id: string,
    text: string,
    completed: boolean,
  }
  
export type TDisplayStatus = 'all' | 'active' | 'completed';