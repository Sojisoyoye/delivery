import pckgs from '../models/package';

class PackageController {
  static create(req, res) {
    if (!req.body.weight) {
      return res.status(400).json({
        message: 'Weight is required',
      });
    } if (!req.body.weightmetric) {
      return res.status(400).json({
        message: 'Weightmetric is required',
      });
    } if (!req.body.from) {
      return res.status(400).json({
        message: 'From is required',
      });
    } if (!req.body.to) {
      return res.status(400).json({
        message: 'To is required',
      });
    }

    const pckg = {
      id: pckgs.length + 1,
      weight: req.body.weight,
      weightmetric: req.body.weightmetric,
      from: req.body.from,
      to: req.body.to,
    };
    pckgs.push(pckg);
    return res.status(201).json({
      pckg,
      message: 'Package added successfully',
    });
  }

  static getAll(req, res) {
    return res.status(200).json({
      pckgs,
      message: 'All the packages',
    });
  }

  static getOne(req, res) {
    const findPckg = pckgs.find(pckg => pckg.id === parseInt(req.params.id, 10));
    if (findPckg) {
      return res.status(200).json({
        pckg: findPckg,
        messsage: 'A single package',
      });
    }
    return res.status(404).json({
      message: 'package record not found',
    });
  }

  static delete(req, res) {
    const findPckg = pckgs.find(pckg => pckg.id === parseInt(req.params.id, 10));
    if (findPckg) {
      pckgs.splice(findPckg, 1);
      return res.status(200).json({
        message: 'Package canceled successfully',
      });
    }
    return res.status(404).json({
      message: 'Package record not found',
    });
  }
}

export default PackageController;
