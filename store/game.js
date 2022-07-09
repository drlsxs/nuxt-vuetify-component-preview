const state = () => ({
  game: {
    hand: [],
    deck: [],
    discard: [],
    players: [],
    currentPlayer: 0,
    currentTurn: 0,
    currentPhase: 0,
    currentAction: 0,
    currentActionType: 0,
    currentActionTarget: 0,
    currentActionTargetType: 0,
    currentActionTargetPlayer: 0,
    currentActionTargetCard: 0,
    currentActionTargetCardType: 0,
    currentActionTargetCardValue: 0,
    currentActionTargetCardSuit: 0,
    currentActionTargetCardRank: 0,
    currentActionTargetCardSuitRank: 0,
  }
})

const mutations = () => ({
  setGame(state, game) {
  },
  setHand(state, hand) {
  },
  setDeck(state, deck) {
  },
  setDiscard(state, discard) {
  },
  setPlayers(state, players) {
  },
  setCurrentPlayer(state, currentPlayer) {
  },
  setCurrentTurn(state, currentTurn) {
  },
  setCurrentPhase(state, currentPhase) {
  },
  setCurrentAction(state, currentAction) {
  }

})