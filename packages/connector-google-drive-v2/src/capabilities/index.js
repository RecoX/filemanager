import createFolder from './create-folder';
// "deleteResource" disabled couse not implemented yet
// import deleteResource from './delete-resource';
import download from './download';
import upload from './upload';
import rename from './rename';
import edit from './edit';
import sort from './sort';

const capabilities = [
  createFolder,
  rename,
  download,
  upload,
  // deleteResource, // disabled couse not implemented yet
  edit,
  sort
];

/**
 * Actions' fields list:
 *  showDialog,
 *  hideDialog,
 *  navigateToDir,
 *  updateNotifications,
 *  getSelection,
 *  getSelectedResources,
 *  getResource,
 *  getResourceChildren,
 *  getResourceLocation,
 *  getNotifications,
 *  getSortState
 *
 *  Called from FileNavigator (componentDidMount() and componentWillReceiveProps())
 *
 * @param apiOptions
 * @param {object} actions
 * @returns {array}
 */
export default (apiOptions, actions) => (
  capabilities.map(capability => capability(apiOptions, actions))
);
