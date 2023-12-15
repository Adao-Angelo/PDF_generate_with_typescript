  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Length', fileSize);
  res.setHeader('Content-Disposition', 'attachment; filename=file.pdf');

  stream.pipe(res);