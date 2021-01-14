const handleBalance = (req, res, accountsId, accounts) => {
    id = req.query
    //accounts.push(id.account_id)
    if (accountsId.indexOf(Number(id.account_id)) != -1) {
        
        res.status(200).send(`${accounts[Number(id.account_id)].balance}`)
    }else {
        res.status(404).send('0')
    }
}

module.exports = handleBalance;