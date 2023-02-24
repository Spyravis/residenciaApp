const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      currentUserEmail: null,
      userdata: {},
      messages: {}
    },
    actions: {
      getCurrentUser: async () => {
        const response = await fetch(process.env.BACKEND_URL + "/api/user",
          {
            headers: {
              "Authorization": "Bearer " + localStorage.getItem("token"),
            },
          });
        const data = await response.json();
        if (response.ok) {
          localStorage.setItem("user", data.response);
          setStore({ userdata: data.response });
        }
      },
      getCurrentUserMessages: async () => {
        const response = await fetch(process.env.BACKEND_URL + "/api/messages",
          {
            headers: {
              "Authorization": "Bearer " + localStorage.getItem("token"),
            },
          });
        const data = await response.json();
        if (response.ok) {
          setStore({ messages: data.response });
        }
      },
      getCurrentUserResidentMessages: async () => {
        const response = await fetch(process.env.BACKEND_URL + "/api/residentmessages",
          {
            headers: {
              "Authorization": "Bearer " + localStorage.getItem("token"),
            },
          });
        const data = await response.json();
        if (response.ok) {
          setStore({ messages: data.response });
        }
      },
      delteMessage: async (message) => {
        const response = await fetch(process.env.BACKEND_URL + "/api/messages/delete/" + message,

          {
            method: "DELETE",
            headers: {
              "Authorization": "Bearer " + localStorage.getItem("token"),
            },
          });
        const actions = getActions();
        if (response.ok) actions.getCurrentUserMessages();
      }
    },
  };
};

export default getState;
