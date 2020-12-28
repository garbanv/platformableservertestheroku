module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'postgres',
          host: env('DATABASE_HOST', 'ec2-54-162-207-150.compute-1.amazonaws.com'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'd4fv6jn8l2j774'),
          username: env('DATABASE_USERNAME', 'sldzkgpykknjre'),
          password: env('DATABASE_PASSWORD', 'd204db97aba849172999c6f783e0dadf74804405e969a04e2d5c6c46b1991e85'),
          schema: env('DATABASE_SCHEMA', 'public'), // Not Required
          ssl: {
            rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
          },
        },
        options: {
          ssl: env.bool('DATABASE_SSL', false),
        },
      },
    },
  });