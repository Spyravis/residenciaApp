const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      currentUserEmail: {},
      userdata: {},
      messages: {}
    },
    actions: {
      getCurrentUserEmail: async () => {
        const response = await fetch(process.env.BACKEND_URL + "/api/user",
          {
            headers: {
              "Authorization": "Bearer " + localStorage.getItem("token"),
            },
          });
        const data = await response.json();
        if (response.ok) {
          setStore({ currentUserEmail: data.response.email });
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
    },
  };
};

export default getState;
