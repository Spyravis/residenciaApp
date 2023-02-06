const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
        currentUserEmail: null,
    },
    actions: {
        getCurrentUserEmail: async () => {
            const response = await fetch(
              "https://3001-matiascecci-matiascecci-7s5aq9y5seh.ws-eu84.gitpod.io/api/user",
              {
                headers: {
                    "Authorization" : "Bearer " + localStorage.getItem("token"),
                },
              });
              const data = await response.json();
              if (response.ok) setStore({currentUserEmail: data.email});
        },
    },
  };
};

export default getState;
