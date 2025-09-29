#!/bin/bash
cd /home/kavia/workspace/code-generation/angular-ui-component-library-with-storybook-2755-2764/angular_component_library_frontend
npx eslint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

