import { responses, unknow_response } from "../../data/responses";

export const cleanInput = input => {
  return input
    .toLowerCase()
    .split(/\s|[,:;.?!-_]\s*/)
    .filter(Boolean)
}

export const getResponse = inputWords => {
  const messageProbability = (
    userWords,
    recognizedWords,
    singleResponse = false,
    requiredWords = []
  ) => {
    let matchCount = userWords.filter(word =>
      recognizedWords.includes(word)
    ).length
    let hasRequiredWords = requiredWords.every(word => userWords.includes(word))
    let probability = matchCount / recognizedWords.length

    return hasRequiredWords || singleResponse ? probability * 100 : 0
  }

  let bestMatch = {
    response:
      unknow_response[Math.floor(Math.random() * unknow_response.length)],
    score: 0
  }

  for (let [response, keywords, single] of responses) {
    const score = messageProbability(inputWords, keywords, single)
    if (score > bestMatch.score) {
      bestMatch = { response, score }
    }
  }

  return bestMatch.score > 0 ? bestMatch.response : bestMatch.response
}
