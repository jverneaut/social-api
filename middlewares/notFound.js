import Boom from 'boom';

export default (req, res, next) => next(Boom.notFound('missing'));
