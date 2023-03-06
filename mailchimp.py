import mailchimp_marketing as MailchimpMarketing
from mailchimp_marketing.api_client import ApiClientError

try:
  client = MailchimpMarketing.Client()
  client.set_config({
    "api_key": "c113e26494e33c58e80e03df44a63b6b-us8",
    "server": "us8"
  })

  response = client.campaigns.send_test_email("2136233", {"test_emails": ["carlos.igles@gmail.com"], "send_type": "plaintext"})
  print(response)
except ApiClientError as error:
  print("Error: {}".format(error.text))
'''
from mailchimp_marketing import Client

mailchimp = Client()
mailchimp.set_config({
  "api_key": "c113e26494e33c58e80e03df44a63b6b",
  "server": "us8"
})

response = mailchimp.ping.get()
print(response)
'''