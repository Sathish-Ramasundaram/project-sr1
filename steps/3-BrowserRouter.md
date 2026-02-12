- **A** Install `react-router-dom`  
  npm install react-router-dom

- **B14.B** Update `rspack.config.js` for history fallback  
  From:
  devServer: {
  port: 3000,
  },

To:
devServer: {
port: 3000,
historyApiFallback: true,
},


- **B15** Update `App.tsx` with Routes and Route

```
update Import:

import { BrowserRouter, Routes, Route } from "react-router-dom";

--

    <BrowserRouter>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Routes>
          <Route
            path="/"
            element={
              <h1 className="text-2xl font-bold text-green-600">
                Home Route Working
              </h1>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>

```
