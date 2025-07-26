# SwadSagaram
A React JS application developed with learnings from Namaste React JS course. The project's restraunts related data is backed by Swiggy's APIs. Documenting all the learnings here.

Implemented Infinite Scrolling for Restraunts:
-> Implemented a div in the bottom of Restraunts component.
-> In useRestarunts component when the initial fetch happens, storing the next offset value in a state variable
-> As swiggy is restricting the fetch to get the next set of restarunts, I hardcoded the data in infinteScrollDemoData.json.
-> When newoffset changes, the required call is made to add the next batch of restraunts to the intial listdata. Set an Intersection observer to observe when the div which is attached with observerRef is visible in the viewport, When the div enters the viewport, the list of unique new restraunts are loaded.

Challenged faced:
Initially after implemented the required changes also,
->the new batch of restraunts are not being displayed
As the div was being rendered conditionally, so at the time when useRestarunts is called, the div is not available.
->the new batch is continously getting added which throws a duplicated key error.
Filtered the new batch with elements that did not exist previously.

