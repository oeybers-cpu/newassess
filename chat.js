// In your netlify/functions/chat.js file

// ... (your OpenAI setup code) ...

export async function handler(event) {
  try {
    // Get the data sent from the front-end
    const { assignmentContent, criteria } = JSON.parse(event.body);

    // Combine the content to create a prompt for the assistant
    const userMessage = `
      Please assess the following assignment:
      ---
      ${assignmentContent}
      ---
      Use the following criteria for the assessment:
      ---
      ${criteria || "No specific criteria provided."}
      ---
    `;

    // ... (the rest of your OpenAI Assistant logic using userMessage) ...

    // Return the response
    return {
      statusCode: 200,
      body: JSON.stringify({ reply: assistantResponse }),
    };

  } catch (error) {
    // ... your error handling ...
  }
}
