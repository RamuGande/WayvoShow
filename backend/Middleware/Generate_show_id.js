const crypto = require('crypto');

function generateShowIdMiddleware(location, theaterName, movieName) {
    if (!location || !theaterName || !movieName) {
        throw new Error('Missing required fields');
    }
    const timestamp = Date.now();
    const data = `${location}-${theaterName}-${movieName}-${timestamp}`;
    const showId = crypto.createHash('sha256').update(data).digest('hex');
    return showId;
}
module.exports = generateShowIdMiddleware;