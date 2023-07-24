export const findByResourceId = (resourceId) => {
  return $(`//*[@resource-id="${resourceId}"]`);
};

export const findByText = (text) => {
  return $(`//*[@text="${text}"]`);
};
