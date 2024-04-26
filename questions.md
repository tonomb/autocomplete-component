## Frontend test part 2

Please answer the following questions to the best of your knowledge, in clear English. Elaborate
and demonstrate the React knowledge you have. Feel free to give examples and use cases.
DO NOT USE ANY WEB OR OTHER RESOURCE.

---

1. What is the difference between Component and PureComponent?
   Give an example where it might break my app.

   > They are both React class components and the difference is in how they are rendered and handle the lifecyle events. I have been using function components ever since I learnd React so I don't know when they might break the app.

2. Context + ShouldComponentUpdate might be dangerous. Why is
   that?

   > A change in context triggers a automatic rerender regardless of what the ShouldComponentUpdate logic might say.

3. Describe 3 ways to pass information from a component to its
   PARENT.

> 1. Using a third party state management library ( Redux) via dispatch and selector hooks.
> 1. Setting the state in the parent component and passing the setState function as props to the child component to update the state.
> 1. Using react context

4. Give 2 ways to prevent components from re-rendering.

   > 1. Using the useEffect hook and leaving the dependancy array empty so it only renders on first render
   > 1. Using the the lifecycle method of shouldComponentUpdate

5. What is a fragment and why do we need it? Give an example where it
   might break my app.

   > a fragment is defined by `<> <'html> </>` and it is used to group elements without the need to wrap them in a `div`
   > since there is no wrapping div, it might break the app if the css or js relies on that div component existing for drilling

6. Give 3 examples of the HOC pattern.

   > I know a higher order compoenent is used to reuse and extend component logic but as I have never used class components in production I don't have any experience extending the logic.

7. What's the difference in handling exceptions in promises,
   callbacks and async...await?

   > The difference is in the syntax: in promises you use the `then catch` pattern. in Callbacaks you use `if , else` and in async you do so with a `try catch `

8. How many arguments does setState take and why is it async.

   > setState is the equivalent of useState hook in function components it is used like this `[ value, setValue] = useState( initial state)`. Its async because it waits for multiple updates to happen together.

9. List the steps needed to migrate a Class to Function
   Component

   > 1. First change the syntax of the compoenet from Extends Class Component to Function Component
   > 1. Handle the state declarations using useState hook vs setState
   > 1. Refactor event handlers
   > 1. Update the lifecycle events to a useEffect hook
   > 1. Test component

10. List a few ways styles can be used with components.

    > Via Stylesheets, Css Modules, Inline Styles, Styled Components

11. How to render an HTML string coming from the server.
    > Use a third party library to render the string.

## Notes

I don't have any production experience using Class Components. I learned about them when first learning React, but I have always had a preference towards functional components. They just seem more logical to me. If Deel has a preference for using class components, I am a fast learner and will teach myself to write them. I will be very interested in learning why that is the case.
