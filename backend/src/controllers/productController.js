const test = async (req, res) => {
    console.log("Working fine!!!");
    res.status(200).json({ message: 'Working fine!' });
}

module.exports = {
    test,
}