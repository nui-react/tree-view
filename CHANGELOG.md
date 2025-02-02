# Changelog

## [latest]

## [1.1.3] - 2025-02-02

### Added

- Added `TreeLink` component.
- Added `TreeLiner` component.
- Added `LinkIcon` Icon component.
- Added `DownArrow` Icon component.
- Added `TextVarientType` type.
- Added `TextThemeColorType` type.
- Added `Text Varient` styles.
- Added `Text Theme Color` styles.
- Added `AnchorTargetTypes` type.
- Added `varient`, `color`, `className` props to `TreeText` component.
- Added `logo`, `subHeader`, `desc`, `link`, `sublink`, `descLink`, `headerVarient`, `subHeaderVarient`, `descVarient`, `headerColor`, `subHeaderColor`, `descColor` props to `TreeHeader` component.
- Added `logo`, `subHeader`, `desc`, `link`, `sublink`, `descLink` props to `TreeExpander` component.
- Added `styleConfig.ts` file to maintain global style configurations.
- Added convensional comments for the all components.

### Modified

- Modified `TreeHeader` component layout & styles.
- Modified `TreeExpander` component layout & styles.

### Removed

- Removed `isSimpleHeader` prop from `TreeExpander` component.

## [1.1.2] - 2025-01-26

### Added

- Added `TreeText` component.
- Added `TreeHeader` component.
- Added `theme` prop to `TreeView` component.
- Added `Coda-Regular` as defualt font.
- Added CSS variables.
- Added CHANGELOG.md file.
- Added README.md API documentation

### Changed

- Changed `TreeViewExpander` component name as `TreeExpander`.
- Changed `TreeViewItem` component name as `TreeItem`.
- Changed `TreeViewItemContainer` component name as `TreeViewItemContainer`.
- Improved expand/collapse animation in `TreeExpander`.

## [1.0.0] - 2025-01-19

### Added

- Initial stable release of the component library.
- Implemented `TreeView`, `TreeViewItem`, `TreeViewItemContainer`, `TreeViewExpander` components.
- Implemented `TreeLiner`, `TreeBadge`, `CirclePointer`, `DownArrow` supportive components.
- Refactored prop validation in all components.

### Fixed

- Fixed issue with asset paths in Rollup build.
