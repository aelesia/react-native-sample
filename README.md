# First time setup

1) Install dependencies: `yarn setup`
2) Start server `yarn start` (starts on LOCAL environment)
3) Install app
    - iOS: `yarn ios`
    - Android: `yarn android`

# Running different environment

Default: `yarn start` (will run LOCAL)

- Local: `ENV=local yarn start`
- Develop: `ENV=develop yarn start`
- Storybook: `ENV=storybook yarn start`

# Storybook mode

`yarn storybook`

# Notes

The following items were omitted:

- App icon
- Splash screen
- Usage of FlatList over ScrollView in `PictureWall.tsx`
- No test coverage for Jest or Detox. However there is Storybook which replaces the role of tests.
