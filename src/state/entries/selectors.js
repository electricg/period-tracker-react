export const getEntriesOriginal = state => {
  const { entries: { original = [] } = {} } = state;
  return original;
};
