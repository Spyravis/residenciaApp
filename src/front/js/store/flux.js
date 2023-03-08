const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      userdata: { residents: [] },
      schuddle: {},
      messages: {},
    },
    actions: {
      getCurrentUser: async () => {
        const response = await fetch(process.env.BACKEND_URL + "/api/user", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        const data = await response.json();
        if (response.ok) {
          localStorage.setItem("user_id", data.response.id);
          setStore({ userdata: data.response });
        }
      },
      getCurrentUserMessages: async () => {
        const response = await fetch(
          process.env.BACKEND_URL + "/api/messages",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        const data = await response.json();
        if (response.ok) {
          setStore({ messages: data.response });
        }
      },
      getCurrentUserResidentMessages: async () => {
        const response = await fetch(
          process.env.BACKEND_URL + "/api/residentmessages",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        const data = await response.json();
        if (response.ok) {
          setStore({ messages: data.response });
        }
      },
      delteMessage: async (message) => {
        const response = await fetch(
          process.env.BACKEND_URL + "/api/messages/delete/" + message,

          {
            method: "DELETE",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        const actions = getActions();
        if (response.ok) actions.getCurrentUserResidentMessages();
      },

      logout: () => {
        try {
          localStorage.removeItem("token");
          setStore({ userdata: {} });
        } catch (e) {
          console.log(e);
          return false;
        }
      },
      getUserSchuddle: async () => {
        const response = await fetch(
          process.env.BACKEND_URL + "/api/schuddle",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        const data = await response.json();
        if (response.ok) {
          setStore({ schuddle: data.response });
        }
      },
    },
  };
};

export default getState;
