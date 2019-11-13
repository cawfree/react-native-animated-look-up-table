export const createTransform = (
  transform,
  options,
) => {
  const {
    from,
    to,
    samples,
    ...extras
  } = ((options && typeof options === 'object') ? options: {});
   if (isNaN(from)) {
    throw new Error(
      `Expected number from, encountered ${from}.`,
    );
  } else if (isNaN(to)) {
    throw new Error(
      `Expected number to, encountered ${to}.`,
    );
  } else if (isNaN(samples) || samples <= 0) {
    throw new Error(
      `Expected positive number samples, encountered ${samples}.`,
    );
  } else if (from > to) {
    throw new Error(
      `The specified range [from, to] must increase in a positive direction.`,
    );
  }
  let val = from;
  const inc = (to - from) / samples;
  const inputRange = [...Array(samples)];
  const outputRange = [...Array(samples)];
  for (let i = 0; i < samples; i += 1) {
    inputRange[i] = val;
    outputRange[i] = transform(val, from, to);
    val += inc;
  }
  return {
    inputRange,
    outputRange,
    ...extras,
  };
}
