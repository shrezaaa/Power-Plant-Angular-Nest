
export const connectionConfig = {
  user: 'solar',
  password: 'solar',
  server: '172.18.16.93',
  port: 1433,
  database: 'SolarData',
  options: {
    trustedConnection: true,
    encrypt: true,
    enableArithAbort: true,
    trustServerCertificate: true,
  },
}