module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_Cm3nNdgAXYGBJ9JYU1s7AreYr7Ih",
        apiToken: "MYd9TJtw2RfxYibBBda2s5Nr",
        appFilter: "todo-backend",
        teamFilter: "ps6067966",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
  });