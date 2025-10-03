export interface FolderFile {
  id: string;
  name: string;
  type: 'pdf' | 'md' | 'txt';
  content: string;
}

export interface FolderData {
  id: string;
  name: string;
  files: FolderFile[];
}

export const projectFolderData: FolderData = {
  id: 'project_1',
  name: 'Project_1',
  files: [
    {
      id: 'research',
      name: 'research.pdf',
      type: 'pdf',
      content: `# User Research Report

## Executive Summary
This document outlines the comprehensive user research conducted for the design systems project at Dell Technologies.

## Research Methodology
- User interviews with 15 product teams
- Usability testing sessions across 3 product lines
- Analytics analysis of component usage patterns
- Competitive analysis of industry design systems

## Key Findings

### Pain Points Identified
- Inconsistent component implementations across teams
- Lack of clear documentation and usage guidelines
- Difficulty in maintaining design-development parity
- Time-consuming handoff processes

### User Needs
- Centralized component library with live code examples
- Clear accessibility guidelines and standards
- Token-based design system for consistent theming
- Automated testing and validation tools

## Recommendations
1. Implement comprehensive design tokens system
2. Create interactive documentation with code examples
3. Establish governance model for system maintenance
4. Develop automated validation tools for consistency

## Impact Metrics
- 40% reduction in design-to-development handoff time
- 60% improvement in cross-product consistency scores
- 25% faster feature delivery across participating teams`
    },
    {
      id: 'design',
      name: 'design.pdf',
      type: 'pdf',
      content: `# Design System Architecture

## Foundation Layer

### Design Tokens
- Color palette with semantic naming
- Typography scale and hierarchy
- Spacing and layout grid system
- Border radius and shadow definitions

### Brand Guidelines
- Logo usage and clear space requirements
- Photography and illustration styles
- Voice and tone documentation
- Accessibility standards (WCAG 2.1 AA)

## Component Layer

### Core Components
- Button variants and states
- Form inputs and validation patterns
- Navigation and menu systems
- Data display components (tables, cards, lists)

### Layout Components
- Grid system and containers
- Header and footer templates
- Sidebar and content area layouts
- Modal and overlay patterns

## Pattern Layer

### Interaction Patterns
- Loading states and progress indicators
- Error handling and messaging
- Search and filtering interfaces
- Onboarding and empty states

### Page Templates
- Dashboard layouts
- Settings and configuration pages
- Data entry forms
- Content presentation templates

## Implementation Guidelines
- Component composition principles
- State management patterns
- Performance optimization strategies
- Testing and validation requirements`
    },
    {
      id: 'testing',
      name: 'testing.pdf',
      type: 'pdf',
      content: `# Testing Strategy & Results

## Automated Testing Framework

### Unit Testing
- Component isolation testing
- Props validation and edge cases
- Accessibility compliance verification
- Visual regression testing with Chromatic

### Integration Testing
- Component interaction patterns
- Form submission workflows
- Navigation and routing behavior
- API integration scenarios

### End-to-End Testing
- Critical user journeys
- Cross-browser compatibility
- Performance benchmarks
- Mobile responsiveness validation

## Test Results Summary

### Coverage Metrics
- Unit test coverage: 94%
- Integration test coverage: 87%
- E2E test coverage: 78%
- Accessibility compliance: 100%

### Performance Benchmarks
- Component render time: <16ms average
- Bundle size impact: <50kb per component
- First contentful paint: <1.2s
- Largest contentful paint: <2.5s

### Browser Compatibility
- Chrome 90+: ✅ Full support
- Firefox 88+: ✅ Full support  
- Safari 14+: ✅ Full support
- Edge 90+: ✅ Full support

## Known Issues & Resolutions
- iOS Safari focus management fixes applied
- High contrast mode adjustments implemented
- Screen reader navigation improvements completed

## Quality Assurance Process
1. Automated testing on every pull request
2. Manual accessibility review for new components
3. Cross-team review and approval workflow
4. Production monitoring and alerting`
    },
    {
      id: 'finalreport',
      name: 'finalreport.pdf',
      type: 'pdf',
      content: `# Design Systems Project - Final Report

## Project Overview
The Infrastructure Design System project successfully delivered a comprehensive component library and documentation platform that serves over 200 engineers across 15 product teams at Dell Technologies.

## Key Achievements

### Component Library
- 45 production-ready components
- 150+ variants and states
- Full TypeScript support
- Comprehensive accessibility coverage

### Documentation Platform
- Interactive component playground
- Live code examples with Figma Code Connect
- Design token visualization
- Usage analytics and adoption tracking

### Adoption Metrics
- 15 product teams actively using the system
- 89% component adoption rate across target applications
- 200+ engineers trained on implementation
- 50+ community contributions and improvements

## Business Impact

### Efficiency Gains
- 40% reduction in feature development time
- 60% fewer design-development inconsistencies
- 25% improvement in accessibility compliance
- 30% reduction in maintenance overhead

### Cost Savings
- $480K annual savings in development time
- $120K reduction in design rework costs
- 50% fewer accessibility remediation issues
- Improved time-to-market for new features

## Lessons Learned

### Success Factors
- Strong executive sponsorship and cross-team buy-in
- Iterative development with continuous user feedback
- Investment in comprehensive documentation and training
- Clear governance model and contribution guidelines

### Challenges Overcome
- Legacy system migration complexities
- Varying team adoption readiness levels
- Technical debt in existing component implementations
- Coordination across multiple time zones and teams

## Future Roadmap

### Short Term (6 months)
- Advanced animation and motion guidelines
- Enhanced form validation patterns
- Mobile-first responsive improvements
- Performance optimization initiatives

### Long Term (12+ months)
- AI-powered design-to-code automation
- Advanced theming and customization capabilities
- Integration with design tools ecosystem
- Expansion to additional product verticals

## Conclusion
The Infrastructure Design System has exceeded initial expectations and established a strong foundation for consistent, accessible, and efficient product development across Dell Technologies. The investment in tooling, documentation, and community building has created sustainable value that will continue to compound over time.`
    }
  ]
};