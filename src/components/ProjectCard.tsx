import React from "react";
import styled from "styled-components";
import { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

const Card = styled.div`
  background-color: ${({ theme }) => theme.card};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const ProjectCategory = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primary};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1rem;
  flex: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const ProjectButton = styled.a<{ primary?: boolean }>`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  flex: 1;
  transition: all 0.2s ease;

  background-color: ${({ theme, primary }) =>
    primary ? theme.primary : "transparent"};
  color: ${({ theme, primary }) => (primary ? "#fff" : theme.text)};
  border: 1px solid
    ${({ theme, primary }) => (primary ? theme.primary : theme.border)};

  &:hover {
    text-decoration: none;
    background-color: ${({ theme, primary }) =>
      primary ? theme.primary : theme.border};
  }
`;

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card>
      <ProjectImage src={project.image} alt={project.title} />
      <CardContent>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectCategory>{project.category}</ProjectCategory>
        <ProjectDescription>{project.description}</ProjectDescription>

        <TechStack>
          {project.technologies.map((tech, index) => (
            <TechTag key={index}>{tech}</TechTag>
          ))}
        </TechStack>

        <ButtonGroup>
          {project.demoUrl && (
            <ProjectButton
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              primary
            >
              Live Demo
            </ProjectButton>
          )}
          {project.codeUrl && (
            <ProjectButton
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </ProjectButton>
          )}
        </ButtonGroup>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
