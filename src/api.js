export const sendData = async (data) => {
    const response = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const result = await response.json();
    console.log("result",result)
    return result
  };

  // export const updateItem = async (user) => {
  //   fetch(`https://reqres.in/api/users/${id}`, {
  //     method: "PUT",
  //     body: JSON.stringify(user),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // };