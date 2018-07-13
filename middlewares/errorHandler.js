// eslint-disable-next-line
export default (err, req, res, next) => {
  if (err.isServer) {
    console.log(err);
  }
  return res.json(err.output.payload);
};
