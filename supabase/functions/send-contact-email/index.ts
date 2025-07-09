import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, phone, company, service, message } = await req.json()

    const emailHtml = `
      <h2>Nova mensagem de contato - SoftTech Inovations</h2>
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2563eb; margin-top: 0;">Informações do Cliente</h3>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
          <p><strong>Empresa:</strong> ${company || 'Não informado'}</p>
          <p><strong>Serviço de Interesse:</strong> ${service || 'Não especificado'}</p>
        </div>
        
        <div style="background: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h3 style="color: #2563eb; margin-top: 0;">Mensagem</h3>
          <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-radius: 8px;">
          <p style="margin: 0; font-size: 14px; color: #1e40af;">
            <strong>Dica:</strong> Responda rapidamente para manter o interesse do cliente!
          </p>
        </div>
      </div>
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'contato@softtech.dev',
        to: ['softtechinovations08@gmail.com'],
        subject: `Nova mensagem de contato - ${name}`,
        html: emailHtml,
        reply_to: email,
      }),
    })

    if (res.ok) {
      return new Response(
        JSON.stringify({ success: true, message: 'Email enviado com sucesso!' }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    } else {
      const error = await res.text()
      console.error('Erro no Resend:', error)
      
      return new Response(
        JSON.stringify({ success: false, error: 'Erro ao enviar email' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }
  } catch (error) {
    console.error('Erro geral:', error)
    return new Response(
      JSON.stringify({ success: false, error: 'Erro interno do servidor' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})