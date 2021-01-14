const handleReset = (req, res, accountsId, accounts, rest) => {
    rest()
    res.status(200).send('OK')
}

module.exports = handleReset;