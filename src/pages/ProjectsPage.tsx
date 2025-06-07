import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import { allProjects } from '../data/projects';
import { ProjectCategory } from '../types/project';

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const PageDescription = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 2rem;
  color: ${({ theme }) => theme.secondary};
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: ${({ theme, active }) => active ? theme.primary : 'transparent'};
  color: ${({ theme, active }) => active ? '#fff' : theme.text};
  border: 1px solid ${({ theme, active }) => active ? theme.primary : theme.border};
  font-weight: ${({ active }) => active ? '600' : '400'};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ theme, active }) => active ? theme.primary : theme.border};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const NoProjects = styled.p`
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.secondary};
  font-style: italic;
`;

const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');
  
  const categories: (ProjectCategory | 'all')[] = ['all', ...new Set(allProjects.map(project => project.category))];
  
  const filteredProjects = activeCategory === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);
  
  return (
    <ProjectsContainer>
      <PageTitle>My Projects</PageTitle>
      <PageDescription>
        A collection of my work, including web applications, mobile apps, and other software projects.
      </PageDescription>
      
      <FilterContainer>
        {categories.map(category => (
          <FilterButton 
            key={category} 
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </FilterButton>
        ))}
      </FilterContainer>
      
      <ProjectsGrid>
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <NoProjects>No projects found in this category.</NoProjects>
        )}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default ProjectsPage;
