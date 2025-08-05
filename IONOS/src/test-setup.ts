import '@testing-library/jest-dom';

// Mock CSS variables and basic DOM setup for custom elements
beforeEach(() => {
	// Reset any global state
	document.head.innerHTML = '';
	document.body.innerHTML = '';
});

// Add basic CSS custom properties for testing
const style = document.createElement('style');
style.textContent = `
	:root {
		--ion-color-main-background: #ffffff;
		--ion-shadow-header: 0 2px 4px rgba(0,0,0,0.1);
		--ion-brand-icon: #0066cc;
		--ion-text: #000000;
		--ion-context-menu-border: #cccccc;
		--ion-context-menu-divider: #eeeeee;
		--ion-context-menu-title-background: #f5f5f5;
		--ion-context-menu-item-text: #000000;
		--ion-context-menu-item-background-hover: #f0f0f0;
		--ion-context-menu-item-background-active: #e0e0e0;
		--ion-context-menu-item-text-disabled: #999999;
		--ion-context-menu-item-background-disabled: #f9f9f9;
		--ion-shadow: 0 2px 8px rgba(0,0,0,0.15);
	}
`;
document.head.appendChild(style);
