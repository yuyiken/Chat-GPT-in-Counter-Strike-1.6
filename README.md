# Chat-GPT-in-Counter-Strike-1.6

This is a small Node.js application that serves as a web server to handle ClientSay event for a Counter-Strike 1.6 server using the LogAPI. The application verifies API requests using a token
to send Chat GPT Requests.

## Features

- Handles ClientSay server event and answers 
- Uses OpenAI module and chat completions.
- Validates requests using an API token.

## Installation
1. Install LogApi:
    [LogAPI](https://github.com/SmileYzn/LogApi)

2. Clone the repository:
    ```bash
    git clone https://github.com/yuyiken/Chat-GPT-in-Counter-Strike-1.6.git
    ```
3. Navigate to the project directory:
    ```bash
    cd Chat-GPT-in-Counter-Strike-1.6
    ```
4. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Add the `API_TOKEN` and `OPENAI_API_KEY` in `.env` with your actual tokens.
2. Start the server:
    ```bash
    node index.js
    ```
3. The server will run on port `4000` by default. You can send POST requests to `/api` with the appropriate event data.
4. Add in your logapi.cfg the address and your api token.
5. Type `/ "your request going after slash and space"`
6. Enjoy.

## Credits

Special thanks to [@SmileYzn](https://github.com/SmileYzn) for creating the original [LogAPI](https://github.com/SmileYzn/LogApi) for Counter-Strike 1.6.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
