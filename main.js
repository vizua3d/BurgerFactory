//------------------------------------------------------------------------------
import { publicToken, mainSceneUUID } from './config.js';

//------------------------------------------------------------------------------
window.addEventListener('load', initApp);

//------------------------------------------------------------------------------
async function initApp() {
  await SDK3DVerse.joinOrStartSession({
    userToken: publicToken,
    sceneUUID: mainSceneUUID,
    canvas: document.getElementById('display-canvas'),
    viewportProperties: {
      defaultControllerType: SDK3DVerse.controller_type.orbit,
    },
  });
}
