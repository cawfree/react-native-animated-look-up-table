# react-native-animated-look-up-table
Creates a look up table which can be used to interpolate across the results of an arbitrary input function. This can be used to help achieve some complex effects whilst maintaining performance, since they can be used in conjunction with [`useNativeDriver`](https://facebook.github.io/react-native/docs/animated#using-the-native-driver).

Check out the deep dive [here](http://cawfree.com/react-native-animated-look-up-table/).

## 🚀 Getting Started

Using [`npm`]():

```sh
npm install --save react-native-animated-look-up-table
```

Using [`yarn`]():

```sh
yarn add react-native-animated-look-up-table
```

## ✍️ Usage

This library exports the function [`createTransform`](https://github.com/cawfree/react-native-animated-look-up-table/blob/77a4cac00ce4865abb56c30c528f98ee2e85d4b9/index.js#L1), which can be used to compile your animated look up table:

```javascript
import { createTransform } from 'react-native-animated-transform';

// XXX: Create a sine wave between [0, 1] using 1024 samples.
const sine = createTransform(
  // Any arbitrary function of the form (p, from, to) => n can be used.
  // The value of p is your current value of progression between
  // "from" and "to".
  Math.sin, 
  {
    from: 0,
    to: 2 * Math.PI,
    samples: 1024,
  },
);
```

Once generated, you can pass this to an [`Animated.Value`](https://facebook.github.io/react-native/docs/animated)'s `interpolate` function:

```javascript
<Animated.View
  style={{
    transform: [
      {
        // Interpolate animValue using the compiled transform.
        scale: animValue
          .interpolate(sine),
      },
    ],
  }}
/>
```

Since we're interpolating between samples, your look up table will smoothly transition between defined entries of your complex function.

## ✌️  License
[MIT](https://opensource.org/licenses/MIT)

<p align="center">
  <a href="https://www.buymeacoffee.com/cawfree">
    <img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy @cawfree a coffee" width="232" height="50" />
  </a>
</p>
