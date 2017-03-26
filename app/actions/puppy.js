const apiUrl = 'https://tiy-tn-class-api-fall-16.herokuapp.com/puppies/jmmccasland';

// findAll
export function findAllComplete(data = []) {
  return {
    type: 'PUPPY@FINDALL_COMPLETE',
    data,
  };
}

export function findAll() {
  return dispatch => fetch(apiUrl)
    .then(r => r.json())
    .then(puppies => dispatch(findAllComplete(puppies)));
}

// Create
export function createComplete(data = []) {
  return {
    type: 'PUPPY@CREATE_COMPLETE',
    data,
  };
}

export function create(formData) {
  return dispatch => fetch(apiUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  }).then(r => r.json())
    .then((puppy) => {
      dispatch(createComplete(puppy));
    }
  );
}

// findOne
export function findOneComplete() {
  return {
    type: 'PUPPY@FINDONE_COMPLETE',
    data,
  };
}
