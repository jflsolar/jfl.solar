const CryptoJS = require("crypto-js");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const hashPassword2 = (text, salt) => {
  const lsalt = salt || CryptoJS.lib.WordArray.random(128 / 8).toString();

  return [
    CryptoJS.PBKDF2(text, lsalt, { keySize: 256 / 32 }).toString(),
    lsalt,
  ];
};

const createSuperAdmin = async () => {
  const userPassword = "Password123!";
  const userData = {
    name: "Super Admin",
    email: "info@jflsolar.com",
    role: "admin",
  };

  const [hashedPassword, salt] = hashPassword2(userPassword);
  try {
    await prisma.user
      .upsert({
        where: { email: userData.email },
        create: {
          ...userData,
          hashedPassword,
          salt,
        },
        update: { ...userData, hashedPassword, salt },
      })
      .then((r) => {
        console.log("Super Admin Account created successfully!");
        return r;
      });
  } catch (error) {
    console.warn("Please define your seed data.");
    console.error("Error creating Super Admin: ", error);
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma client
  }
};

const createUser = async () => {
  const userPassword = "123456";
  const userData1 = {
    name: "Amiel",
    email: "user1@jnd.com",
    role: "staff",
  };
  const userData2 = {
    name: "Joy",
    email: "user2@jnd.com",
    role: "staff",
  };

  const [hashedPassword, salt] = hashPassword2(userPassword);
  try {
    await prisma.user
      .upsert({
        where: { email: userData1.email },
        create: {
          ...userData1,
          hashedPassword,
          salt,
        },
        update: { ...userData1, hashedPassword, salt },
      })
      .then((r) => {
        console.log("User Account created successfully!");
        return r;
      });

    await prisma.user
      .upsert({
        where: { email: userData2.email },
        create: {
          ...userData2,
          hashedPassword,
          salt,
        },
        update: { ...userData2, hashedPassword, salt },
      })
      .then((r) => {
        console.log("User Account created successfully!");
        return r;
      });
  } catch (error) {
    console.warn("Please define your seed data.");
    console.error("Error creating Super Admin: ", error);
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma client
  }
};

const createUsers = async () => {
  const userPassword = "123456";
  // const userData1 = {
  //   name: "Amiel Alinea",
  //   email: "amielalinea9669@gmail.com",
  //   role: "staff",
  // };
  // const userData2 = {
  //   name: "Jocelyn Toledo",
  //   email: "jhoitoledo4@gmail.com",
  //   role: "staff",
  // };
  // const userData3 = {
  //   name: "Jonathan Lunar",
  //   email: "jnd.jlunar@gmail.com",
  //   role: "staff",
  // };
  // const userData4 = {
  //   name: "Dinah I. Ramos",
  //   email: "dinah918@jnd-holdings.com",
  //   role: "staff",
  // };
  const [hashedPassword, salt] = hashPassword2(userPassword);
  try {
    // await prisma.user
    //   .upsert({
    //     where: { email: userData1.email },
    //     create: {
    //       ...userData1,
    //       hashedPassword,
    //       salt,
    //     },
    //     update: { ...userData1, hashedPassword, salt },
    //   })
    //   .then((r) => {
    //     console.log("User Account 1 created successfully!");
    //     return r;
    //   });

    // await prisma.user
    //   .upsert({
    //     where: { email: userData2.email },
    //     create: {
    //       ...userData2,
    //       hashedPassword,
    //       salt,
    //     },
    //     update: { ...userData2, hashedPassword, salt },
    //   })
    //   .then((r) => {
    //     console.log("User Account 2 created successfully!");
    //     return r;
    //   });

    // await prisma.user
    //   .upsert({
    //     where: { email: userData3.email },
    //     create: {
    //       ...userData3,
    //       hashedPassword,
    //       salt,
    //     },
    //     update: { ...userData3, hashedPassword, salt },
    //   })
    //   .then((r) => {
    //     console.log("User Account 3 created successfully!");
    //     return r;
    //   });

    // await prisma.user
    //   .upsert({
    //     where: { email: userData4.email },
    //     create: {
    //       ...userData4,
    //       hashedPassword,
    //       salt,
    //     },
    //     update: { ...userData4, hashedPassword, salt },
    //   })
    //   .then((r) => {
    //     console.log("User Account 4 created successfully!");
    //     return r;
    //   });

    await prisma.user
      .upsert({
        where: { email: userData5.email },
        create: {
          ...userData5,
          hashedPassword,
          salt,
        },
        update: { ...userData5, hashedPassword, salt },
      })
      .then((r) => {
        console.log("User Account 5 created successfully!");
        return r;
      });
  } catch (error) {
    console.warn("Please define your seed data.");
    console.error("Error creating Super Admin: ", error);
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma client
  }
};

createSuperAdmin();
// createUser();
// createUsers();
