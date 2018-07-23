'use strict';
import fetch, { Request, RequestInit } from 'node-fetch';

export interface SubmitMessageOptions {

  user?:	string;
  // Users unique ID

  reference?:	{
  // Optional referenced email. If submitted message is a reply and relevant fields are not provided then these are resolved from the message to be replied to
  
    mailbox: string;
    // Mailbox ID

    id: number;	
    // Message ID in Mailbox

    action:	string;
    // Either reply, replyAll or forward  

  };	

  mailbox?:	string;
  // Mailbox ID where to upload the message. If not set then message is uploaded to Sent Mail folder.

  uploadOnly?: boolean;	
  // If true then generated message is not added to the sending queue
  // Default value: false

  isDraft?: boolean;
  // If true then treats this message as draft (should be used with uploadOnly=true)
  // Default value: false

  sendTime?:	string;
  // Datestring for delivery if message should be sent some later time

  envelope?:	{
  // SMTP envelope. If not provided then resolved either from message headers or from referenced message

    from?: {
    // Sender information. If not set then it is resolved to User's default address

      address:	string;
      // Sender address. If this is not listed as allowed address for the sending User then it is replaced with the User's default address
  
    };	

    to?: {
    // Recipients information

      address:	string;
      // Recipient address

    }[];

  };

  from?:	{
  // Address for the From: header

    name:	string;
    // Name of the sender

    address:	string;
    // Address of the sender

  };

  to?: {
  // Addresses for the To: header

    name?:	string;
    // Name of the recipient

    address:	string;
    // Address of the recipient

  }[];

  cc?: {
  // Addresses for the Cc: header

    name?:	string;
    // Name of the recipient

    address:	string;
    // Address of the recipient

  }[];

  bcc?: {
  // Addresses for the Bcc: header

    name?:	string;
    // Name of the recipient

    address:	string;
    // Address of the recipient

  }[];

  subject:	string;
  // Message subject. If not then resolved from Reference message

  text:	string;
  // Plaintext message

  html:	string;
  // HTML formatted message

  headers?: {
  // Custom headers for the message. If reference message is set then In-Reply-To and References headers are set automatically
    
    key:	string;
    // Header key ('X-Mailer')

    value:	string;
    // Header value ('My Awesome Mailing Service')

  }[];

  attachments?: {
  // Attachments for the message

    content:	string;
    // Base64 encoded attachment content

    filename?:	string;
    // Attachment filename

    contentType?:	string;
    // MIME type for the attachment file

    cid?:	string;
    // Content-ID value if you want to reference to this attachment from HTML formatted message

  }[];

  meta?: {
  // Custom metainfo for the message

    sess?:	string;
    // Session identifier for the logs

    ip?:	string;
    // IP address for the logs
  };

}

export const fetchFromWDuckApi = (endpoint: string, requestInit?: RequestInit) => {
  requestInit = requestInit || {};
  if ('method' in requestInit) {
    if (requestInit.method.toLocaleUpperCase() != "GET") {    
      requestInit.headers['Content-Type'] = 'application/json';
    }
  }
  let request = new Request(`http://localhost:8080${endpoint}`, requestInit);

  return fetch(request).then((response) => {
      if (response.status < 200 || response.status >= 300) {
          const error = new Error(response.statusText);
          error.message = JSON.stringify(response);
          throw error;
      }
      return response.json();
  }).then((info) => {
    return info;
  })
};

export const submitMessage = (submitMessageOptions: SubmitMessageOptions, callback?: (error: Error, info?: any ) => void) => {
  return fetchFromWDuckApi('/users')
  .then((users) => {
    console.log(users)
  })
  
  // return fetchFromWDuckApi(`/users/${userId}/submit`, {
  //   method: 'POST',
  //   body: JSON.stringify(submitMessageOptions),
  // }).then((info) => {
  //   return info;
  // })
};


