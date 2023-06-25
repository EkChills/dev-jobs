export const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://dev-jobs-d.vercel.app"
      : "http://localhost:3000";