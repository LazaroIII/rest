const handleEvent = (req, res, accountsId, accounts) => {
    const { type, destination, amount, origin } = req.body;
    let destinationExists = false;
    let originExists = false;

    const createAccount = (id, value) => {
        accountsId.push(Number(id));
        const newAcc = { "id": id, "balance": value };
        accounts[id] = newAcc;
    }

    if (accountsId.indexOf(Number(destination)) != -1) {
        destinationExists = true;
    }else {
        destinationExists = false
    }
    if (accountsId.indexOf(Number(origin)) != -1) {
        originExists = true;
    }else {
        originExists = false
    }

    if (type === "deposit") {
        if (destinationExists) {
            accounts[destination].balance += amount;
            const resp = {"destination": accounts[destination]}
            res.status(201).json(resp)
        }else {
            createAccount(destination, amount)
            const resp = {"destination": accounts[destination]}
            res.status(201).json(resp)
        }

    }else if (type === "withdraw") {
        if (originExists) {
            accounts[origin].balance -= amount;
            const resp = {"origin": accounts[origin]}
            res.status(201).json(resp)
        }else {
            res.status(404).send('0');
        }

    }else if (type === "transfer") {
        if (originExists) {
            if (!destinationExists) {
                createAccount(destination, 0)
            }
            accounts[origin].balance -= amount;
            accounts[destination].balance += amount;
            const resp = {"origin": accounts[origin], "destination": accounts[destination]}
            res.status(201).json(resp)
        }else {
            res.status(404).send('0');
        }
    }
}

module.exports = handleEvent;