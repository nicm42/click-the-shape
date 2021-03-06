const postHighScores = async (
  shape: string,
  name: string,
  attempts: number
): Promise<boolean> => {
  type scoreType = {
    shape: string;
    name: string;
    attempts: number;
  };

  const data: scoreType = {
    shape: shape,
    name: name,
    attempts: attempts,
  };

  const place = 'http://localhost:';
  const port = 8000;
  const route = '/api/postscores';
  const link = place + port + route; //for dev
  //const link = route; //for production
  const response = await fetch(link, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    //console.log('Score added');
    return true;
  } else {
    return false;
  }
};

export default postHighScores;
