import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => (
          <BlogCard key={i}>
            <Img src={p.image} />
            <div style={{
              padding: '2rem 1.5rem',
            }}>
              <TitleContent>
                <HeaderThree title>{p.title}</HeaderThree>
              </TitleContent>
              <CardInfo className="card-info">{p.description}</CardInfo>
            </div>
            {/* <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div> */}
            {/* <UtilityList>
              <ExternalLinks href={p.visit}>Code</ExternalLinks>
              <ExternalLinks href={p.source}>Source</ExternalLinks>
            </UtilityList> */}
          </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;