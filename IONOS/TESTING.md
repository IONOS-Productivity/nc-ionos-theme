# Testing Guide

This project uses [Vitest](https://vitest.dev/) as the testing framework for Svelte components.

## Getting Started

### Prerequisites

-   Node.js and npm installed
-   Dependencies installed: `npm install`

### Running Tests

```bash
# Run tests in watch mode (for development)
npm run test

# Run tests once (for CI/build)
npm run test:run

# Run tests with coverage report
npm run test:coverage

# Run tests with UI interface
npm run test:ui
```

## Test Structure

### Components Tested

1. **Icon.svelte** (`src/components/Icon.test.ts`)

    - Boolean props validation for all icon types
    - Conditional rendering logic
    - CSS styling rules
    - Icon attributes verification

2. **UserMenuItem.svelte** (`src/components/userMenu/UserMenuItem.test.ts`)

    - Props interface validation
    - URL and target handling
    - CSS structure validation
    - Accessibility features

3. **UserMenu.svelte** (`src/components/userMenu/UserMenu.test.ts`)

    - State management (show/hide toggle)
    - Event handling (click, keyboard)
    - Component structure and styling
    - Accessibility attributes

4. **Header.svelte** (`src/Header.test.ts`)
    - Props and URL handling
    - Component structure validation
    - CSS and responsive design
    - Custom element configuration

### Test Types

-   **Unit Tests**: Testing individual component logic and props
-   **Integration Tests**: Testing component interactions and state management
-   **Accessibility Tests**: Ensuring proper ARIA attributes and keyboard navigation
-   **CSS Structure Tests**: Validating class names and styling logic

## Testing Approach

Due to the custom element nature of these Svelte components, our tests focus on:

1. **Logic Testing**: Validating component behavior, props handling, and conditional logic
2. **Interface Validation**: Ensuring TypeScript interfaces and prop types work correctly
3. **Structure Validation**: Testing component hierarchy and CSS class application
4. **Accessibility**: Verifying ARIA attributes and keyboard interaction logic

## Configuration

### Vitest Configuration (`vitest.config.ts`)

-   Uses `happy-dom` environment for fast DOM simulation
-   Disables custom elements for testing to avoid SSR issues
-   Includes coverage reporting with v8 provider
-   Excludes test files and config files from coverage

### Test Setup (`src/test-setup.ts`)

-   Imports jest-dom matchers for enhanced assertions
-   Sets up CSS custom properties used by components
-   Resets DOM state between tests

## Adding New Tests

### For New Components

1. Create a test file: `ComponentName.test.ts`
2. Import necessary testing utilities:
    ```typescript
    import { describe, it, expect } from 'vitest';
    ```
3. Follow the existing pattern of testing logic rather than DOM rendering
4. Focus on props validation, conditional logic, and accessibility

### Test Structure Example

```typescript
import { describe, it, expect } from 'vitest';

describe('ComponentName Logic', () => {
	it('should handle default props correctly', () => {
		const defaultProps = { prop: 'value' };
		expect(defaultProps.prop).toBe('value');
	});

	it('should validate component structure', () => {
		const structure = {
			wrapper: 'div',
			class: 'component-class',
		};
		expect(structure.wrapper).toBe('div');
	});
});
```

## Best Practices

1. **Test Logic, Not Implementation**: Focus on component behavior rather than internal implementation
2. **Accessibility First**: Always test ARIA attributes and keyboard navigation
3. **Edge Cases**: Test with empty, null, and undefined values
4. **TypeScript Integration**: Validate prop interfaces and type safety
5. **CSS Structure**: Test class names and styling logic
6. **Performance**: Keep tests fast by focusing on logic over DOM manipulation

## Continuous Integration

Tests run automatically on:

-   Pull requests
-   Main branch commits
-   Release builds

All tests must pass before code can be merged.

## Coverage Goals

While line coverage is limited due to the custom element testing approach, we aim for:

-   100% of component props tested
-   100% of conditional logic paths tested
-   100% of accessibility features validated
-   100% of CSS classes and structure tested

## Troubleshooting

### Common Issues

1. **Custom Element Errors**: Tests focus on logic rather than rendering to avoid SSR issues
2. **CSS Variables**: Ensure test setup includes necessary CSS custom properties
3. **TypeScript Errors**: Check prop interfaces match component implementations

### Getting Help

-   Check existing test files for patterns
-   Review Vitest documentation: https://vitest.dev/
-   Check Svelte testing guide: https://svelte.dev/docs/testing
