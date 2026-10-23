function notFoundHandler(req, res, next) {
  res.status(404)
  if (req.path.startsWith('/api')) {
    return res.json({ error: 'Not found' })
  }
  res.send('404 Not Found')
}

function errorHandler(err, req, res, next) {
  console.error('Error:', err.stack)

  const status = err.status || 500
  const msg = process.env.NODE_ENV === 'production'
    ? 'Something went wrong'
    : (err.message || 'Internal error')

  if (req.path.startsWith('/api')) {
    return res.status(status).json({ error: msg })
  }
  res.status(status).send(msg)
}

module.exports = { notFoundHandler, errorHandler }