const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GETs all Runs
 */
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "runs"
                        WHERE "user_id" = $1
                        ORDER BY "run_id";`;
    pool.query(queryText, [req.user.id])
        .then((response => {
            res.send(response.rows)
        }))
        .catch((error) => {
            console.log('error in GET', error);
            res.sendStatus(500);
        })
});

/**
 * GETs a run on a specific date
 */

router.post('/specific', (req, res) => {
    const queryText = `SELECT * FROM "runs"
                       WHERE "user_id" = $1 AND "day" = $2 AND "month" = $3 AND "year" = $4
                       ORDER BY "run_id" DESC;`;
    const queryValues = [req.user.id, req.body.day, req.body.month, req.body.year]
    pool.query(queryText, queryValues)
        .then((response => {
            res.send(response.rows)
        }))
        .catch((error) => {
            console.log('error in specific GET', error);
            res.sendStatus(500);
        })
});

/**
 * POSTs a run
 */

router.post('/', (req, res) => {
    console.log(req.body)
    const queryText = `INSERT INTO "runs" ("day", "month", "year", "distance", "time", "user_id")
                       VALUES ($1, $2, $3, $4, $5, $6);`;
    const queryValues = [req.body.day, req.body.month, req.body.year, req.body.distance, req.body.time, req.user.id];
    pool.query(queryText, queryValues)
    .then((() => {
        res.sendStatus(200)
    }))
    .catch((error) => {
        console.log('error in POST', error);
        res.sendStatus(500);
    })                  
})

module.exports = router;