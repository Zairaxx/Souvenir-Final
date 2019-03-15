Created project. Installed next.js. Installed the babel-plugin for styled-components to support server-side rendering. Created .babelrc-file for babel config. Created react components.

Started basic styling to have an overview of the different components. State management is done for creating souvenirs. Styling and dynamic components remain to be fixed.

Problem: Can't render MyCollection-component in a new page without App.js, because it needs to be a child of App.js to get props.

Solutions: 1. Create collection as a part of SouvenirForm, but put it in left:100vw;


To do list in priority-order:
- Focus on SouvenirForm.js.
    - Change background to different gradient options.
    - On submit = Hide submit button, show buttons to adding another souvenir or showing collection.
- Fix navigation to work properly. DONE
- Dynamic navigation depending on device.
- Map view.
- Collection view of souvenirs.
- Save button to save the entire souvenir in state somewhere. DONE
- Create an Souvenirs component with every Souvenir in the state/props. DONE
- Style 2nd page of the form. DONE
- Black/White font color in 2nd page depending on what color user picks for background.
- Background color shouldnt take up the entire page after mobile size.
- Animation when alternating pages
- Add map view.
