const db = require('./conn');

class Topics {
    constructor(id, name, ranking_scale_id) {
        this.id = id;
        this.name = name;
        this.ranking_scale_id = ranking_scale_id;
    }

    static async getTopics() {
        try {
            const response = await db.any(
            `SELECT topics.*, ranking_scale.rank_name
                FROM topics
                INNER JOIN ranking_scale on ranking_scale.id = topics.ranking_scale_id;`);
            return response;
        } catch(error) {
            return error.message
        }
    }

    static async getRanks() {
        try {
            const response = await db.any(`SELECT * FROM ranking_scale;`);
            return response;
        } catch(error) {
            return error.message
        }
    }


    static async update(topic, rank) {
        const query =
        `UPDATE topics SET ranking_scale_id=${rank}
            WHERE name = '${topic}'`
        console.log(query);
        try {
            const response = await db.result(query);
            console.log('response is', response);
            return response;
        } catch(error) {
            console.log('update error', error.message);
            return error.message
        }
    }
}

module.exports = Topics;