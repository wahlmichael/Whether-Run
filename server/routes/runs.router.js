const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET Runs
 */
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "runs"
                        ORDER BY "run_id";`;
    pool.query(queryText)
        .then((response => {
            res.send(response.rows)
        }))
        .catch((error) => {
            console.log('error in GET', error);
            res.sendStatus(500);
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;