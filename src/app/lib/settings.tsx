export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address
  phone: string,
  website: string,
}

export interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
}

export const getAppSettings = (): Promise<{
  theme: string,
  language: string
}> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        theme: 'light',
        language: 'en' 
      });
    }, 2000);
  })
}

export const getUserInfo = (): Promise<{
  name: string,
  email: string,
  age: number,
}> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'John Doe',
        email: 'john@doe.com' ,
        age: 25,
      });
    }, 2000);
  })
}

export async function getUserById(id: string): Promise<User> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const user = await response.json()
  return user
}