const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET Runs
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

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;