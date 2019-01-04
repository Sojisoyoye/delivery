import PackageModel from '../models/package';

const packageController = {
  /**
     *
     * @param {object} req
     * @param {object} res
     * @returns {object} pckg object
     */
  create(req, res) {
    if (!req.body.weight && !req.body.weightmetric && !req.body.from && !req.body.to) {
      return res.status(400).send({ message: 'These fields are required' });
    }
    const pckg = PackageModel.create(req.body);
    return res.status(201).send(pckg);
  },

  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} pckgs array
   */
  getAll(req, res) {
    const pckgs = PackageModel.findAll();
    return res.status(200).send(pckgs);
  },

  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} pckg object
   */
  getOne(req, res) {
    const pckg = PackageModel.findOne(req.params.id);
    if (!pckg) {
      return res.status(404).send({ message: 'package not found' });
    }
    return res.status(200).send(pckg);
  },

  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} updated pckg
   */

  update(req, res) {
    const pckg = PackageModel.findOne(req.params.id);
    if (!pckg) {
      return res.status(404).send({ message: 'package not found' });
    }
    const updatedpckg = PackageModel.update(req.params.id, req.body);
    return res.status(200).send(updatedpckg);
  },

  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {void} return static code 204
   */
  delete(req, res) {
    const pckg = PackageModel.findOne(req.params.id);
    if (!pckg) {
      return res.status(404).send({ message: 'reflection not found' });
    }
    const result = PackageModel.delete(req.params.id);
    return res.status(204).send(result);
  },
};

export default packageController;
