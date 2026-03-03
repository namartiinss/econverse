import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const response = await fetch(
    'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
  )

  const data = await response.json()

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.status(200).json(data)
}