

## Plan: Fix Background Loading, Swipeable Nav, and Plan Selection UI

### 1. Background images load whole at once (PageSection.tsx)
- Hide the `<img>` until fully loaded using an `onLoad` state, then fade it in with a CSS opacity transition. This prevents the progressive/partial rendering.
- Set `opacity-0` by default, switch to `opacity-100` on load with `transition-opacity duration-700`.

### 2. Swipeable/scrollable nav bar (FloatingNav.tsx)
- Make the nav bar horizontally scrollable with `overflow-x-auto` and hide the scrollbar using CSS (`scrollbar-hide` or `::-webkit-scrollbar { display: none }`).
- This allows swiping on mobile/trackpad to reveal items like "Membership" that may overflow.
- Increase transparency further by reducing `.glass-nav` background opacity from `0.22` to `0.10`.

### 3. Plan cards: click to highlight, no "Select Plan" button (SubscriptionPlans.tsx)
- Add `useState` to track the selected plan index (default to the featured one, index 1).
- On click of any plan card, set it as selected.
- Selected card: `bg-background` (AMOLED black) with `border-primary` and `gold-glow`.
- Non-selected cards: `bg-transparent` with subtle `border-border/30`.
- Remove the "Select Plan" button from all cards.

### Files to modify:
- `src/components/PageSection.tsx` — add onLoad fade-in logic
- `src/components/FloatingNav.tsx` — add overflow scroll + swipe support
- `src/index.css` — reduce glass-nav opacity, add scrollbar-hide utility
- `src/pages/SubscriptionPlans.tsx` — interactive plan selection, remove buttons

