const toEmail = (({ email }) => email)

module.exports = data => data.map(toEmail)
