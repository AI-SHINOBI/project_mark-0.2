exports.handleCode = (req, res) => {
  const { code, language } = req.body;

  if (!code || !language) {
    return res.status(400).json({ error: 'Missing code or language' });
  }

  res.status(200).json({ message: 'Code received', language });
};
