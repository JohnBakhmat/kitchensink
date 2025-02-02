import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { env } from './env.mjs'

const app = new Hono()
const { PORT } = env


app.get('/', (c) => {
  return c.text('Hello Hono!')
})

console.log(`Server is running on http://localhost:${PORT}`)

serve({
  fetch: app.fetch,
  port: PORT
})
