const contactModel = require("../model/contactModel");

const addContact = async (req, res) => {
  // Check incoming data
  console.log(req.body);

  const { name, phone, email } = req.body;

  // console.log(name);

  if (!name || !phone || !email) {
    return res.json({
      success: false,
      message: "Please enter all fields!",
    });
  }

  try {
    const existingContact = await contactModel.findOne({ phone: phone });
    if (existingContact) {
      return res.json({
        status: false,
        message: "Contact Already Exists",
      });
    }

    const newContact = new contactModel({
      name: name,
      phone: phone,
      email: email,
    });

    await newContact.save();

    res.json({
      success: true,
      message: `${name} : ${phone} `,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  addContact,
};
