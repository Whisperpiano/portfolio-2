export const BIDLY_PROCESS = {
  challenge:
    "This project required introducing a meaningful technical improvement to an existing application built with React, TypeScript, Vite, Zustand, and Tailwind CSS. Instead of adding visual changes, I chose to focus on code quality by implementing automated tests — a decision aimed at strengthening the project's robustness and improving my skills as a professional frontend developer.",
  process: {
    text: 'I integrated Vitest to write unit and component tests, setting up jsdom and Testing Library for a smooth developer experience. The test files are structured to mirror the source code, and key dependencies like Zustand and React Router were mocked to ensure isolation. The test infrastructure included proper configuration in vite.config.ts and custom setup files.',
    list: {
      text: 'Three types of tests were implemented:',
      items: [
        {
          title: 'Unit Tests for Utility Functions',
          text: 'Focused on utility functions such as number and date formatting, sorting algorithms, and authentication guards. These tests ensure the core logic of the application works correctly.',
          code: `import { describe, it, expect } from 'vitest';
  import { formatNumber } from '../../utils/formatNumber';
  
  describe('formatNumber', () => {
    it('should return the number as is when less than 1000', () => {
      expect(formatNumber(999)).toBe('999');
    });
  
    it('should format thousands with K suffix', () => {
      expect(formatNumber(1500)).toBe('1.5K');
    });
  });`,
        },
        {
          title: 'Component Tests',
          text: 'Verified interactive behavior and style of UI elements like buttons and badges. These tests ensure components render correctly and respond appropriately to user interactions.',
          code: `import { describe, it, expect, vi } from 'vitest';
  import { render, screen, fireEvent } from '@testing-library/react';
  import Button from '../../../components/elements/Button';
  
  describe('Button Component', () => {
    it('renders with primary style by default', () => {
      render(<Button>Test Button</Button>);
      expect(screen.getByText('Test Button')).toHaveClass('bg-purple-600');
    });
  
    it('calls handleClick when clicked', () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click Me</Button>);
      fireEvent.click(screen.getByText('Click Me'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });`,
        },
        {
          title: 'Complex Component Tests',
          text: 'Targeted components like listing cards that depend on user auth and store state. These tests required sophisticated mocking strategies for React Router and Zustand to simulate different application states.',
          code: `// Mock for react-router-dom
  vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom'),
    useNavigate: () => mockNavigate,
  }));
  
  // Mock for authentication state
  vi.mock('../../../utils/AuthGuard', () => ({
    AuthGuard: () => false // Simulate: user not logged in
  }));
  
  // Mock for Zustand store
  vi.mock('../../../store/modalStore', () => ({
    useModalStore: () => ({
      handleLoginOpen: mockHandleLoginOpen,
    }),
  }));`,
        },
      ],
    },
  },
  solution:
    'The implementation resulted in a comprehensive test suite covering utility functions, UI components, and complex interaction patterns. Tests are isolated, descriptive, and organized by domain. Dependencies like Zustand and React Router were carefully mocked to simulate different UI states. The testing infrastructure is maintainable, with appropriate configuration and documentation. The end result is a more stable and maintainable codebase, with testing coverage in place for both logic and interface components.',
};
