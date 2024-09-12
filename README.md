# Oppo Version 1

A React Native application for Android/IOS that connects people through online and hosted events.

## Installation Guide

Follow these steps to set up the project locally.

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Expo CLI**
- **Android Studio** (for Android SDK)
- **Watchman** (for macOS users)

### Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/your-project.git
    cd your-project
    ```

2. **Install project dependencies**:
    ```bash
    npm install
    ```

3. **Install Expo CLI globally** (if not already installed):
    ```bash
    npm install -g expo-cli
    ```

4. **Set up Android SDK path**:
    If you’re developing for Android, ensure your **Android SDK** is installed and the path is set. You can set it with the following commands:
    ```bash
    export ANDROID_HOME=$HOME/Library/Android/sdk
    export PATH=$PATH:$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools
    ```

5. **Start the development server**:
    ```bash
    npx expo start
    ```

You can now scan the QR code from the Expo CLI output or open the app in your Android/iOS emulator.

