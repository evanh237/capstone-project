const BASE_URL = `https://fakestoreapi.com`;

export const fetchAllProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
      throw new Error("Network response /GET all products failed!");
    }
    const result = await response.json();

    return result;
  } catch (error) {
    console.error("There was an error /GET all products!");

    throw error;
  }
};

export const fetchSingleProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(`Oh no, trouble fetching product #${id}!`, error);
  }
};

export const fetchAllUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) {
      throw new Error("Network response /GET all users failed!");
    }
    const result = await response.json();

    return result;
  } catch (error) {
    console.error("There was a problem with /GET all users!");
  }
};

export const fetchSingleUser = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/users/3`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Network response /GET single user failed!");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was a problem getting that user!");
  }
};

export const fetchUserLogin = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    if (!response.ok) {
      throw new Error("Login failed!");
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error logging in!");
  }
};

export const fetchUserCart = async () => {
  try {
    const response = await fetch(`${BASE_URL}/carts/5`);
    if (!response.ok) {
      throw new Error("Network response /GET cart failed!");
    }
    const result = await response.json();

    return result;
  } catch (error) {
    console.error("There was a problem getting that users cart!");
  }
};
