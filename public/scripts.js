function combinatoricsChallenge(num) {
  n = num[0].value;
  const result = document.querySelector('input[name="result"]');
  if (n < 0) {
    result.value = "Only integer!";
  } else {
    result.value = (5 * n ** 2 - 5 * n + 2) / 2;
  }
}
