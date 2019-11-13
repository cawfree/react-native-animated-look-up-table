# react-native-animated-look-up-table
Creates a look up table which can be used to interpolate across the results of an arbitrary input function. This can be used to help achieve some complex effects.

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

This library exports the function [`createTransform`](), which can be used to compile your animated look up table:

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
    to: 1,
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

Since we're interpolating between samples, your look up table will smoothly transition between defined entries.

## ✌️  License
[MIT](https://opensource.org/licenses/MIT)
