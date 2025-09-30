import { openai, model } from './openai'
export async function summarize(text: string) {
  const res = await openai.chat.completions.create({
    model,
    messages: [{ role: 'user', content: `Summarize:\n\n${text}` }],
  })
  return res.choices[0]?.message?.content ?? ''
}
