function player(stroke) {
    return `NOW ON THE TEE ${stroke.toUpperCase()}`;
}

function lead(stroke) {
    return `LEADING THE TOURNAMENT ${stroke.toUpperCase()}`
}

module.exports = {
    player,
    lead,
  }