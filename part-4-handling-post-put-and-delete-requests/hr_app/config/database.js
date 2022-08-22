module.exports = {
  hrPool: {
    // user: process.env.HR_USER,
    // password: process.env.HR_PASSWORD,
    // connectString: process.env.HR_CONNECTIONSTRING,
    user: process.env.HR_USER || "NODEORACLE",
    password: process.env.HR_PASSWORD || "PasswordAdminBaru",
    connectString: process.env.HR_CONNECTIONSTRING || "localhost/XE",

    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0
  }
};
