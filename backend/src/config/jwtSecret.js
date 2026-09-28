import 'dotenv/config';

const configuredSecret = process.env.JWT_SECRET;
const isPlaceholder = !configuredSecret || /replace|change|placeholder|your-/i.test(configuredSecret);

if (process.env.NODE_ENV === 'production' && (isPlaceholder || configuredSecret.length < 32)) {
  throw new Error('Production requires a unique JWT_SECRET of at least 32 characters. Set it in the hosting service environment.');
}

export const JWT_SECRET = configuredSecret || 'local-development-only-secret-change-before-deploy';
