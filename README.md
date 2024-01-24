# Chrome Extension Campaign Monitor Helper

The **Chrome Extension Campaign Monitor Helper** is designed to streamline the process of importing HTML emails into Campaign Monitor by automatically disabling the "Move Inline CSS" option. This extension is especially useful for users who prefer to manage their CSS separately when working with Campaign Monitor.

## Installing the Extension on Chrome/Brave

To use the extension on your Chrome or Brave browser, follow these simple steps:

1. Open a new tab and enter `chrome://extensions/` in the address bar.

2. Activate developer mode by toggling the switch in the top-right corner.

3. Click on the "Load unpacked" button.

4. Choose the repository directory where the extension is located.

5. The extension is now loaded and ready for use. You can also pin it for easy access.

## Extension Usage

Once the extension is installed, it will automatically disable the "Inline CSS" option when importing HTML email content into Campaign Monitor. The extension is designed to enhance the user experience by simplifying the process and ensuring that CSS management aligns with user preferences.

## Local Development Setup

To set up the extension locally for development purposes, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/The-Daily-Upside/chrome-extension-campaign-monitor-helper.git
    ```

2. **Navigate to the extension directory:**

    ```bash
    cd chrome-extension-campaign-monitor-helper
    ```

3. **Install the required dependencies:**

    ```bash
    npm install
    ```

4. **Run the development script:**
    ```bash
    npm start
    ```

This will run Prettier to format relevant files and ESLint for linting, ensuring the codebase adheres to coding standards.

## Important Note

This extension is specifically tailored for Campaign Monitor and may not be suitable for use with other platforms. Ensure that the extension is activated when working within the Campaign Monitor environment for optimal functionality.

Feel free to contribute, report issues, or suggest improvements. Happy coding!
