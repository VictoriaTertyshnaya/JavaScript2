const express = require('express');
const fs = require('fs');
const app = express();
const logger = require('./logger.js');


app.use(express.json());
app.use(express.static('../public'));

app.get('/catalogData', (req, res) => {
    fs.readFile('./server/db/productsList.json', 'utf-8', (err, data) => {
        if (err) {
            res.send(JSON.stringify({ result: 0, text: err }));
        } else {
            res.send(data);
        }
    });
});

app.get('/cartData', (req, res) => {
    fs.readFile('./server/db/getBasket.json', 'utf-8', (err, data) => {
        if (err) {
            res.send(JSON.stringify({ result: 0, text: err }));
        } else {
            res.send(data);
        }
    });
});


app.post('/cartData', (req, res) => {
    fs.readFile('./server/db/getBasket.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
        } else {
            const cart = JSON.parse(data);
            cart.push(req.body);

            fs.writeFile('./server/db/getBasket.json', JSON.stringify(cart), (err) => {
                if (err) {
                    res.send('{"result": 0}');
                } else {
                    logger(name, action);
                    res.send('{"result": 1}');
                }
            });
        }
    });


});

app.put('/cartData/:id', (req, res) => {
    fs.readFile('./server/db/getBasket.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
        } else {
            const cart = JSON.parse(data);
            const find = cart.find(el => el.id === +req.params.id);
            find.quantity += req.body.quantity;

            fs.writeFile('./server/db/getBasket.json', JSON.stringify(cart), (err) => {
                if (err) {
                    res.send('{"result": 0}');
                } else {
                    logger(name, action);
                    res.send('{"result": 1}');
                }
            })
        }
    });
});

app.delete('/cartData', (req, res) => {
    fs.readFile('./server/db/getBasket.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
        } else {
            const cart = JSON.parse(data);

            let findIndex = cart.findIndex(el => el.id === req.body.id);
            console.log(findIndex);

            cart.splice(findIndex, 1);

            fs.writeFile('./server/db/getBasket.json', JSON.stringify(cart), (err) => {
                if (err) {
                    res.send('{"result": 0}');
                } else {
                    logger(name, action);
                    res.send('{"result": 1}');
                }
            })
        }
    });
});

app.listen(3000, () => {
    console.log(`Listening 3000 port`);
});
