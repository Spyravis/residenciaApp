const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      userdata: { residents: [] },
      schuddle: {},
      messages: {},
      unreadedMessages: "",
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
          const actions = getActions();
          actions.getUnreadUserMessages();

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
      getUnreadUserMessages: async () => {
        const response = await fetch(
          process.env.BACKEND_URL + "/api/messages/unreaded",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        const data = await response.json();
        if (response.ok) {
          setStore({ unreadedMessages: data.response });
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
          const actions = getActions();
          actions.getUnreadUserMessages();
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

      readedMessage: async (message) => {
        const response = await fetch(
          process.env.BACKEND_URL + "/api/messages/readed/" + message,

          {
            method: "POST",
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
