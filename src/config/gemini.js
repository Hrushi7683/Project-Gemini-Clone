import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyAu1STK7-LX9FO1ENnR-hS5miNIGW2wrog"; // Replace with your actual API key
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function run(prompt) {
    try {
        if (!prompt || typeof prompt !== 'string' || !prompt.trim()) {
            throw new Error("Prompt must be a non-empty string");
        }

        const chatSession = model.startChat({
            generationConfig,
            history: [],
        });

        console.log("Chat session started:", chatSession);

        const result = await chatSession.sendMessage(prompt);
        console.log("Result from sendMessage:", result);

        if (result && result.response) {
            const response = result.response;
            console.log("Response object:", response);

            if (typeof response.text === "function") {
                const responseText = await response.text();
                console.log("Response text:", responseText);
                return responseText;
            } else {
                throw new Error("Response object does not have a text method");
            }
        } else {
            throw new Error("Result does not have a response property");
        }
    } catch (error) {
        console.error("Error in run function:", error.message);
        throw error; // Rethrow to be handled by the caller
    }
}

export default run;
