

function combinatoricsChallenge(num) {
  console.log(num);
  const result = document.querySelector('input[name="result"]');

  result.value = (5*num[0].value**2-5*num[0].value+2)/2;
}
