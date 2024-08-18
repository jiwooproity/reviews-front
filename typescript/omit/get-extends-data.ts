interface Contact {
  email: string;
  phone: string;
  gmail: string;
}

interface User extends Omit<Contact, "gmail"> {
  name: string;
  age: number;
}

const getUser = (): Promise<User> => {
  const object = { name: "john", age: 24, email: "sample@sample.com", phone: "000-0000-0000" };
  return new Promise((resolve) => resolve(object));
};

(async () => {
  const user = await getUser();
  console.log(user);

  // {
  //   name: 'john',
  //   age: 24,
  //   email: 'sample@sample.com',
  //   phone: '000-0000-0000'
  // }
})();
