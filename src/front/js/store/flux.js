const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
        currentUserEmail: null,
    },
    actions: {
        getCurrentUserEmail: async () => {
            const response = await fetch(
              "https://3001-spyravis-residenciaapp-a54c0x6wdii.ws-eu85.gitpod.io/api/user",
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
