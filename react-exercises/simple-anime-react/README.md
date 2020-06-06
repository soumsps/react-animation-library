# Instructions

Create a simple animation library that have the following things. Expose the API as React Components.

- Bounce
- FadeIn and Out with easing effects
- Slide up to limit and come back to original location
- Pulse

You can make your own API names. You can use either CSS to animate, or JavaScript such as `requestAnimationFrame`. Either is fine.

## Prior Art
- [React Animations](https://www.npmjs.com/package/react-animations)
- [Post](https://popmotion.io/pose/api/)
- [React Transition Groups](https://www.npmjs.com/package/react-transition-group)
- [React Awesome Reveal](https://www.npmjs.com/package/react-awesome-reveal)
- [Framer Motion](https://www.framer.com/motion/)

# Restrictions
- You can use any lib for easing effects. 
- No other library

# Documentation 🧾
## Bounce
### Usage
```html
 <Bounce duration={1000} delay={2000} isInfiniteAnimation={true}  maxHeight={-40}> your content here </Bounce>
 ```
 ### API Details
| Property    | Required  |   Type    |   Default |   Description   |
| ----------- | ----------- | --------- | -------- |--------- |
| duration    | optional  | number    | 2000     |   duration of animation in ms
| delay       | optional  | number    | 1000     |   delay before the animation in ms
| isInfiniteAnimation|optional|boolean| false    |   should the animation run infinitely
| maxHeight  | optional  | number    | -20     |   maximum height for the animation effect

## FadeIn
### Usage
```html
 <FadeIn duration={1000} delay={2000} isInfiniteAnimation={true} easingStyle={'linear'} > your content here </FadeIn>
 ```
 ### API Details
| Property    | Required  |   Type    |   Default |   Description   |
| ----------- | ----------- | --------- | -------- |--------- |
| duration    | optional  | number    | 2000     |   duration of animation in ms
| delay       | optional  | number    | 1000     |   delay before the animation in ms
| isInfiniteAnimation|optional|boolean| false    |   should the animation run infinitely
| easingStyle | optional  | string    | linear   |   easing effect for the animation

## FadeOut
### Usage
```html
 <FadeOut duration={1000} delay={2000} isInfiniteAnimation={true} easingStyle={'linear'}> your content here </FadeOut>
 ```
 ### API Details
| Property    | Required  |   Type    |   Default |   Description   |
| ----------- | ----------- | --------- | -------- |--------- |
| duration    | optional  | number    | 2000     |   duration of animation in ms
| delay       | optional  | number    | 1000     |   delay before the animation in ms
| isInfiniteAnimation|optional|boolean| false    |   should the animation run infinitely
| easingStyle | optional  | string    | linear   |   easing effect for the animation

## Pulse
### Usage
```html
 <Pulse duration={1000} delay={2000} isInfiniteAnimation={true} easingStyle={'linear'} > your content here </Pulse>
 ```
 ### API Details
| Property    | Required  |   Type    |   Default |   Description   |
| ----------- | ----------- | --------- | -------- |--------- |
| duration    | optional  | number    | 2000     |   duration of animation in ms
| delay       | optional  | number    | 1000     |   delay before the animation in ms
| isInfiniteAnimation|optional|boolean| false    |   should the animation run infinitely
| easingStyle | optional  | string    | linear   |   easing effect for the animation

## SlideUpDown
### Usage
```html
 <SlideUpDown duration={1000} delay={2000} isInfiniteAnimation={true} easingStyle={'linear'}    maxHeight={-40}> your content here </SlideUpDown>
 ```
 ### API Details
| Property    | Required  |   Type    |   Default |   Description   |
| ----------- | ----------- | --------- | -------- |--------- |
| duration    | optional  | number    | 2000     |   duration of animation in ms
| delay       | optional  | number    | 1000     |   delay before the animation in ms
| isInfiniteAnimation|optional|boolean| false    |   should the animation run infinitely
| easingStyle | optional  | string    | linear   |   easing effect for the animation
| maxHeight  | optional  | number    | -20     |   maximum height for the animation effect