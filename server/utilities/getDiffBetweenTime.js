const getDiffBetweenTime = (time) => {
    const startingDate = new Date(time.startTime);
    const endingDate = new Date(time.finishTime);
    return (endingDate - startingDate) / 60000; // milliseconds -> minutes
}

export default getDiffBetweenTime