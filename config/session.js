const cookieSession = require('cookie-session')

module.exports = cookieSession({
  name: 'comp3810_session',
  keys: [
    process.env.SESSION_SECRET || 'dev-fallback-key-min-32-chars-please-change'
  ],
  maxAge: 24 * 60 * 60 * 1000,
  secure: process.env.NODE_ENV === 'production',
  httpOnly: true,
  sameSite: 'lax'
})