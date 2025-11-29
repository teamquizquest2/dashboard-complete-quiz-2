export default (req, res) => {
  const resObj = {
    srNo: 5,
    course: "Web Development",
    creditHours: 3
  };
  res.json(resObj);
};
