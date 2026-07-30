import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3001

// ── Middleware ──────────────────────────────────────────────
app.use(express.json())

const allowedOrigins = (process.env.CORS_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean)
app.use(cors({
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
      cb(null, true)
    } else {
      cb(new Error('Origen no permitido'))
    }
  }
}))

// ── SMTP transporter ───────────────────────────────────────
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'mail.frate.lat',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

// ── Ruta: Enviar postulación (convocatoria) ────────────────
app.post('/api/convocatoria', async (req, res) => {
  try {
    const { nombre, correo, juntaVecinal, habilidad, mensaje, mayorEdad } = req.body

    if (!nombre || !correo || !juntaVecinal || !mayorEdad) {
      return res.status(400).json({ ok: false, error: 'Faltan campos obligatorios.' })
    }

    const html = `
      <div style="font-family: 'DM Sans', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px; background: #2c1a0e; border-radius: 12px; border: 1px solid rgba(194,112,61,0.3);">
        <h2 style="color: #c0703d; font-size: 13px; letter-spacing: 0.1em; margin: 0;">CONVOCATORIA</h2>
        <h3 style="color: #f5f0e8; font-size: 20px; margin: 8px 0 20px;">Nueva postulación recibida</h3>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #a89882; font-size: 12px; width: 140px;">Nombre</td>
            <td style="padding: 8px 0; color: #f5f0e8; font-size: 14px;">${nombre}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #a89882; font-size: 12px;">Correo</td>
            <td style="padding: 8px 0; color: #f5f0e8; font-size: 14px;">${correo}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #a89882; font-size: 12px;">Junta Vecinal</td>
            <td style="padding: 8px 0; color: #f5f0e8; font-size: 14px;">${juntaVecinal}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #a89882; font-size: 12px;">Habilidad</td>
            <td style="padding: 8px 0; color: #f5f0e8; font-size: 14px;">${habilidad || 'No especificado'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #a89882; font-size: 12px;">Mensaje</td>
            <td style="padding: 8px 0; color: #f5f0e8; font-size: 14px;">${mensaje || 'Sin mensaje'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #a89882; font-size: 12px;">Edad 25–70</td>
            <td style="padding: 8px 0; color: #f5f0e8; font-size: 14px;">${mayorEdad ? 'Sí' : 'No'}</td>
          </tr>
        </table>

        <hr style="border: none; border-top: 1px solid rgba(194,112,61,0.15); margin: 20px 0;" />
        <p style="color: #a89882; font-size: 11px; margin: 0;">Cajón Peruano 2026 — Junta Vecinal Huánuco</p>
      </div>
    `

    await transporter.sendMail({
      from: `"Cajón Peruano" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO || 'info@frate.lat',
      subject: `Nueva postulación (Cajón Peruano) — ${nombre}`,
      html,
      replyTo: correo,
    })

    res.json({ ok: true })
  } catch (err) {
    console.error('Error al enviar convocatoria:', err)
    res.status(500).json({ ok: false, error: 'Error al enviar el correo.' })
  }
})

// ── Health check ───────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, timestamp: new Date().toISOString() })
})

// ── Start ──────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`[cajon-api] Servidor corriendo en puerto ${PORT}`)
})
