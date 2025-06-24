module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  res.status(200).json({
    success: true,
    message: 'Test function working with CommonJS!',
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.url
  });
};
