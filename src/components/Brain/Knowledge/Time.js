export const Time = () => {
  const dateNow = new Date();

  const dateRequested = dateNow.toLocaleString(
    'en-US',
    {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }
  );

  const answer = {
    answer: dateRequested,
    tone: 'descriptive'
  };

  return Promise.resolve(answer)
};