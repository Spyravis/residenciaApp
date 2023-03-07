#pip install o365
from O365 import Account

credentials = ('cc410a9a-6af9-41bf-881e-6f7c15573777', 'ce53787e-3b3a-4f5d-8d78-a24bddfed40a')

account = Account(credentials)
if account.authenticate(scopes=['basic', 'message_all']):
   print('Authenticated!')

mailbox = account.mailbox()
message = mailbox.new_message()
message.to.add('carlos.igles@gmail.com')
message.subject = 'Hello from python-o365'
message.body = """<html><body>
<p>This is a test email sent from python-o365 using Microsoft Graph API.</p>
</body></html>"""
message.send()