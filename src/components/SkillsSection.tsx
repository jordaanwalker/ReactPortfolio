import React from 'react';
import styled from 'styled-components';
import { skills } from '../data/skills';

const SkillsSectionContainer = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.background};
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SkillCategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled.div`
  background-color: ${({ theme }) => theme.card};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const CategoryTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillName = styled.span`
  flex: 1;
`;

const SkillLevel = styled.div`
  flex: 2;
  height: 8px;
  background-color: ${({ theme }) => theme.border};
  border-radius: 4px;
  overflow: hidden;
`;

const SkillProgress = styled.div<{ level: number }>`
  height: 100%;
  background-color: ${({ theme }) => theme.primary};
  width: ${({ level }) => `${level}%`};
`;

const SkillsSection: React.FC = () => {
  return (
    <SkillsSectionContainer>
      <SectionTitle>My Skills</SectionTitle>
      <SkillsContainer>
        <SkillCategoriesContainer>
          {Object.entries(skills).map(([category, skillsList]) => (
            <SkillCategory key={category}>
              <CategoryTitle>{category}</CategoryTitle>
              <SkillsList>
                {skillsList.map((skill) => (
                  <SkillItem key={skill.name}>
                    <SkillName>{skill.name}</SkillName>
                    <SkillLevel>
                      <SkillProgress level={skill.level} />
                    </SkillLevel>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillCategoriesContainer>
      </SkillsContainer>
    </SkillsSectionContainer>
  );
};

export default SkillsSection;
