import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки от родителя на почту vavilkina3616@yandex.ru"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    raw_body = event.get('body') or '{}'
    if isinstance(raw_body, str):
        body = json.loads(raw_body)
    else:
        body = raw_body

    name = body.get('name', '').strip()
    email = body.get('email', '').strip()
    child = body.get('child', '').strip()
    message = body.get('message', '').strip()

    if not name or not email:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': {'error': 'required'}
        }

    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    smtp_user = 'vavilkina3616@yandex.ru'
    to_email = 'vavilkina3616@yandex.ru'

    html_body = f"""
    <h2>Новая заявка с сайта КнигоЧит</h2>
    <table style="border-collapse:collapse; width:100%; max-width:500px;">
      <tr><td style="padding:8px; color:#666;">Имя родителя:</td><td style="padding:8px;"><b>{name}</b></td></tr>
      <tr><td style="padding:8px; color:#666;">Email:</td><td style="padding:8px;"><b>{email}</b></td></tr>
      <tr><td style="padding:8px; color:#666;">Класс ребёнка:</td><td style="padding:8px;"><b>{child} класс</b></td></tr>
      <tr><td style="padding:8px; color:#666;">Сообщение:</td><td style="padding:8px;">{message or '—'}</td></tr>
    </table>
    """

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'КнигоЧит: заявка от {name}'
    msg['From'] = smtp_user
    msg['To'] = to_email
    msg.attach(MIMEText(html_body, 'html', 'utf-8'))

    with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, [to_email], msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': {'ok': True}
    }