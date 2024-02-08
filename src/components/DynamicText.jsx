import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

const DynamicText = () => {

    return (
        <div>
            <h1 className='mb-4 h-8 text-2xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
                <Typewriter words={['Frontend Developer', 'React Developer', 'JavaScript Developer']}
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    loop={false}
                />
            </h1>
        </div>
    )
}

export default DynamicText



/*
The text-gradient class sets up the text properties.
The bg-clip-text class is used to clip the background to the text.
The text-transparent class makes the text color transparent.
The bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 classes define the gradient colors.
Adjust these classes based on your desired gradient.
This way, the gradient will be applied directly to the text itself. Ensure that your Tailwind CSS
setup includes the necessary plugins and configurations for gradient classes to work. 
*/






/*

const DynamicText = () => {

    // const texts = useMemo(() => ['Frontend Developer', 'React Developer', 'JavaScript Developer'], []);

    // const [currentTextIndex, setCurrentTextIndex] = useState(0);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    //     }, 3000);

    //     return () => clearInterval(intervalId);
    // }, [texts]);

    // const displayTexts = texts[currentTextIndex];

    return (
            <div className="animated-text-container">
                    <div key={index} className="animated-text">
                    {displayTexts.split('').map((char, charIndex) => (
                        <span key={charIndex} className="text-char">{char}</span>
                    ))}
                    </div>
            </div>

    )
}

export default DynamicText

-> useMemo hook -> to increase the performance of react application
-> we do memorization in js also to increase performance
Sometimes one logic in app can effect other logic computation also, so for efficiency we use it

The useMemo hook is used for memoization in React. Memoization is a technique to optimize
performance by caching the result of expensive function calls and returning the cached result
when the same inputs occur again. In the case of useMemo, it's used to memoize the result of
a computation and avoid unnecessary recalculations.

-> if I am not wrong are you telling me that even time array is reinitilizing but by the use
    of useMemo we prevent this?

    Yes, you are correct. When you use useMemo, it helps to memoize the result of a computation
    and ensures that the computation is only executed when its dependencies change. In your 
    case, the texts array is memoized using useMemo, and it won't be recalculated on every 
    render unless the dependencies change.


1. useMemo:

Purpose: Memoization.
Use Case: It is used when you want to memoize the result of a computation and recompute it only
when the dependencies change.
Example: Calculating a derived state value or memoizing a complex calculation to avoid 
unnecessary recalculations.

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);


2. useEffect:

Purpose: Side effects and handling lifecycle events.
Use Case: It is used when you need to perform side effects, such as data fetching, subscriptions,
or manual DOM manipulations. It also helps manage component lifecycle events like mounting,
updating, and unmounting.

Example: Fetching data from an API, subscribing to changes, cleaning up resources on component unmount.
jsx

useEffect(() => {
  // Side effect code here
  return () => {
    // Cleanup code (optional) when component unmounts
  };
}, [dependency1, dependency2]);




3. The first argument is a function that returns the computed value. In this case, it returns the
   array ['Frontend Developer', 'React Developer', 'JavaScript Developer'].

4. The second argument is an array of dependencies. If any of these dependencies change, useMemo 
will recompute the value. In this example, the array is empty ([]), meaning the memoized value
will only be recalculated once (on the initial render) and won't be recalculated if the
component re-renders.

Now, why is this useful in your case?

5. The warning you encountered (The 'texts' array makes the dependencies of useEffect Hook
 change on every render.) is due to the fact that React's useEffect hook is sensitive to
  changes in its dependency array. If any value in the dependency array changes, the effect
   will be re-executed.

6. By using useMemo to memoize the texts array, you ensure that the array reference stays
 the same across renders unless the dependencies ([] in this case) change. This helps prevent
  unnecessary re-execution of the useEffect when the component re-renders, which can be
   beneficial for performance.

7. In summary, useMemo is a tool for optimizing performance by memoizing the result of a
   computation and controlling when that computation should be recalculated. In this case,
   it helps eliminate a warning and ensures that the useEffect hook doesn't run more often than
   necessary.
*/