export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillsData {
  [category: string]: Skill[];
}
