export function getPublicAppUrl(req) {
  const configuredUrl = process.env.APP_URL || process.env.RENDER_EXTERNAL_URL || process.env.FRONTEND_URL;
  if (configuredUrl) return configuredUrl.replace(/\/$/, '');

  return `${req.protocol}://${req.get('host')}`;
}
