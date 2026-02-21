exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST'
      },
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  console.log('SMS Function called with:', event.body);

  try {
    // Parse the request body
    const { phone, name, message } = JSON.parse(event.body);

    console.log('Parsed data:', { phone, name, message });

    // Validate input
    if (!phone || !message) {
      console.error('Missing required fields:', { phone: !!phone, message: !!message });
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST'
        },
        body: JSON.stringify({ error: 'Phone and message are required' })
      };
    }

    // ClickSend API credentials
    const username = 'emilym22003@gmail.com';
    const apiKey = '3981C5BA-D646-6301-71D0-65DE8F501547';

    const requestBody = {
      messages: [{
        source: 'laundry-app',
        from: 'TomUyenLaundry',
        to: phone,
        body: message
      }]
    };

    console.log('Sending to ClickSend:', requestBody);

    // Create the ClickSend API request
    const response = await fetch('https://rest.clicksend.com/v3/sms/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Buffer.from(username + ':' + apiKey).toString('base64')
      },
      body: JSON.stringify(requestBody)
    });

    const result = await response.json();

    console.log('ClickSend response status:', response.status);
    console.log('ClickSend response:', result);

    if (response.ok) {
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST'
        },
        body: JSON.stringify({
          success: true,
          message: 'SMS sent successfully',
          details: result
        })
      };
    } else {
      console.error('ClickSend API error:', result);
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST'
        },
        body: JSON.stringify({
          success: false,
          error: 'Failed to send SMS',
          details: result
        })
      };
    }

  } catch (error) {
    console.error('SMS function error:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST'
      },
      body: JSON.stringify({
        success: false,
        error: 'Internal server error: ' + error.message
      })
    };
  }
};