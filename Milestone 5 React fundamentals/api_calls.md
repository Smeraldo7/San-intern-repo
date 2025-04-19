# Making API Calls with Axios

## Why is it useful to create a reusable Axios instance?

- Centralized configuration: Base URL, timeout, headers, etc., can be set in one place, ensuring consistency across requests.
- Request/response interceptors, authentication, and error handling can be configured globally.
- Performance optimization: Avoid redundant configurations and keep the code cleaner.
- Global changes, like auth headers, are made in one place instead of across all requests.

## How does intercepting requests help with authentication?

- Automatically attach tokens: Interceptors can add the authentication token to every request.
- Token renewal: Refresh the token in the interceptor if it's expired, then retry the request.
- Handle authentication errors (e.g., 401 Unauthorized) in one place.

## What happens if an API request times out, and how can you handle it?

- Axios throws an ECONNABORTED error if the request exceeds the specified timeout.
- Handling it:
  - catch the timeout error and show a friendly message to the user, suggesting they check their internet connection or try again.
  - retry logic to automatically retry the request a few times before giving up.
  - Use AbortController or Axios’ built-in cancellation mechanism to cancel requests if they’re taking too long
