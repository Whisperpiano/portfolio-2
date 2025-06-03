export const NORDHEIM_PROCESS = {
  challenge:
    "I was tasked with introducing a meaningful improvement. Rather than adding new visual features, I focused on strengthening the codebase by implementing a comprehensive testing strategy. This decision allowed me to reinforce best practices while improving the project's long-term reliability and maintainability.",
  process: {
    text: 'The testing strategy covered components, custom hooks, Zustand stores, utility functions, and integration scenarios. I used Vitest along with Testing Library, Happy DOM, and user-event to simulate realistic interactions. A custom render function wrapped components with React Router and TanStack Query providers for more robust and isolated tests.',
    list: {
      text: 'Five types of tests were implemented:',
      items: [
        {
          title: 'Component Tests',
          text: 'Tested UI elements like buttons and product cards to ensure correct rendering, styling, and event handling.',
          code: `import { render } from '../test-utils';
  import Button from '../../components/Button/Button.component';
  
  describe('Button Component', () => {
    it('renders correctly with default props', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });
  
    it('handles click events', async () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click me</Button>);
      await userEvent.click(screen.getByRole('button', { name: /click me/i }));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });`,
        },
        {
          title: 'Hook Tests',
          text: 'Verified custom hooks like useScrollToReviews for expected behavior, including scrolling logic and effect triggers.',
          code: `describe('useScrollToReviews', () => {
    it('scrolls to the reviews section', () => {
      // Setup and assertions for scroll behavior
    });
  });`,
        },
        {
          title: 'Store Tests',
          text: 'Tested Zustand-based auth store to ensure correct state updates and action dispatching.',
          code: `describe('authStore', () => {
    it('sets the user on login', () => {
      const { getState } = useAuthStore();
      getState().login(mockUser);
      expect(getState().user).toEqual(mockUser);
    });
  });`,
        },
        {
          title: 'Utility Function Tests',
          text: 'Ensured pure functions like calculateAverageRating return correct outputs for valid and edge-case inputs.',
          code: `describe('calculateAverageRating', () => {
    it('returns 4 for ratings 5 and 3', () => {
      const reviews = [{ rating: 5 }, { rating: 3 }];
      expect(calculateAverageRating(reviews)).toBe(4);
    });
  
    it('returns 0 for empty input', () => {
      expect(calculateAverageRating([])).toBe(0);
    });
  });`,
        },
        {
          title: 'Integration Tests',
          text: 'Validated interactions between components and their dependencies using renderWithProviders and mocks.',
          code: `vi.mock('../../components/ImageProduct', () => ({
    default: () => <div data-testid="image-product">Mock Image</div>,
  }));
  
  render(<ProductCard product={mockProduct} />);
  expect(screen.getByTestId('image-product')).toBeInTheDocument();`,
        },
      ],
    },
  },
  solution:
    'This testing strategy resulted in a robust and maintainable test suite covering core logic, user interface, and cross-component behavior. External dependencies were mocked when needed, and all tests followed the AAA pattern for clarity. The use of Happy DOM allowed fast test runs, and the setup ensured automatic DOM cleanup and global assertions via Jest DOM. The final result is a production-ready test infrastructure aligned with modern frontend standards.',
};
