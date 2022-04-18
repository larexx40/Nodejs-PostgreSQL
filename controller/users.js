const pool = require('../database');

exports.getUsers = (req, res)=>{
    pool.query('SELECT * FROM userstable ORDER BY id ASC', (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
    })
}

exports.getUsersByID = (req, res)=>{
    const id = parseInt(req.params.id)

    pool.query('SELECT * FROM userstable WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
}

exports.createUser = (req, res) => {
    const { name, email } = req.body
  
    pool.query('INSERT INTO userstable (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).send(`User added with ID: ${results.insertId}`)
    })
}

exports.updateUser = (req, res) => {
    const id = parseInt(req.params.id)
    const { name, email } = request.body
  
    pool.query(
      'UPDATE userstable SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).send(`User modified with ID: ${id}`)
      }
    )
}

exports.deleteUser = (req, res) => {
    const id = parseInt(req.params.id)
  
    pool.query('DELETE FROM userstable WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(`User deleted with ID: ${id}`)
    })
}
