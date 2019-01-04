import moment from 'moment';
import uuidv4 from 'uuid/v4';

class PackageModel {
  /**
     * class constructor
     * @param {object} data
     */
  constructor() {
    this.packages = [];
  }

  /**
     *
     * @returns {object} pckg object
     */
  // eslint-disable-next-line class-methods-use-this
  create(data) {
    const newPackage = {
      id: uuidv4(),
      weight: data.weight || '',
      weightmetric: data.weightmetric || '',
      sentOn: moment().format('llll'),
      deliveredOn: moment().format('llll'),
      // status: data.status || '',
      from: data.from || '',
      to: data.to || '',
      // currentLocation: data.currentLocation || '',
    };
    this.packages.push(newPackage);
    return newPackage;
  }

  /**
   *
   * @param {uuid} id
   * @returns {object} pckg object
   */

  findOne(id) {
    return this.packages.find(pkg => pkg.id === id);
  }

  /**
    * @returns {object} returns all packages
    */
  findAll() {
    return this.packages;
  }

  /**
    *
    * @param {uuid} id
    * @param {object} data
    */
  update(id, data) {
    const pckg = this.findOne(id);
    const index = this.packages.indexOf(pckg);
    this.packages[index].deliveredOn = moment.now().format('llll');
    this.packages[index].status = data.status || pckg.status;
    // this.packages[index].currentLocation = data.currentLocation || pckg.currentLocation;
    return this.packages[index];
  }

  /**
   *
   * @param {uuid} id
   */
  delete(id) {
    const pckg = this.findOne(id);
    const index = this.packages.indexOf(pckg);
    this.packages.splice(index, 1);
    return {};
  }
}

export default new PackageModel();
