# Frontend Application

## Description

This is a React frontend application for the product review platform. It's built with React, TypeScript, Vite, and TailwindCSS.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd frontend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

## Running the Application

### Development

To run the application in development mode:

```sh
npm run dev
```

### Production Build

To build the application for production:

```sh
npm run build
```

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```
VITE_API_URL=http://localhost:5000 # For development
# VITE_API_URL=https://your-backend-render-url.onrender.com # For production
```

## Deployment on Vercel

1. Create a new project on Vercel
2. Connect your GitHub repository
3. Set the Root Directory to "frontend"
4. Add the VITE_API_URL environment variable pointing to your deployed Render backend URL
5. Deploy!

## Project Structure

- `src/`: Source code
  - `api/`: API client and configuration
  - `components/`: Reusable UI components
  - `pages/`: Application pages
  - `hooks/`: Custom React hooks
  - `stores/`: State management (using Zustand)
  - `utils/`: Utility functions

## Project Preview

<table>
   <tr>
    <td colspan="3"><img src="/screenshot/Screenshot (268).png" alt="Admin" width="800" height="400"></td>
  </tr>
   <tr>
    <td colspan="3"><img src="/screenshot/Screenshot (276).png" alt="Admin" width="800" height="400"></td>
  </tr>
   <tr>
    <td colspan="3"><img src="/screenshot/Screenshot (269).png" alt="Landing" width="800" height="400"></td>
  </tr>
   <tr>
    <td colspan="3"><img src="/screenshot/Screenshot (270).png" alt="Admin" width="800" height="400"></td>
  </tr>
   <tr>
    <td colspan="3"><img src="/screenshot/Screenshot (271).png" alt="Admin" width="800" height="400"></td>
  </tr>
   <tr>
    <td colspan="3"><img src="/screenshot/Screenshot (272).png" alt="Admin" width="800" height="400"></td>
  </tr>
  <tr>
    <td><img src="/screenshot/Screenshot (273).png alt="User" width="300" height="600"></td>
     <td><img src="/screenshot/Screenshot (274).png alt="User" width="300" height="600"></td>
     <td><img src="/screenshot/Screenshot (275).png alt="User" width="300" height="600"></td>
  </tr>
    
 
</table>

## License

This project is licensed under the ISC License.
