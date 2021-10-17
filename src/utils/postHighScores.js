const postHighScores = async (shape, name, attempts) => {
  const data = {
    shape: shape,
    name: name,
    attempts: attempts
  }

  const link = 'http://localhost:';
  const port = 8000;
  const route = '/postscores';
  const response = await fetch(link + port + route, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
  });
  console.log(response);
};

export default postHighScores;