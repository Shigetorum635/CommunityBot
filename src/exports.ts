import * as userCommands from './commands/user.js';
import * as randomCommands from './commands/random.js';
import { ping } from './commands/ping.js';
import { game } from './commands/game.js';
import { cookie } from './commands/cookie.js';
import { guild } from './commands/guild.js';
import { catalog } from './commands/catalog.js';
import { help } from './commands/help.js';
import { info } from './commands/info.js';
import { status } from './commands/status.js';
import { catalogSearch } from './commands/catalog-search.js';
import { toolbox } from './commands/toolbox.js';

export default {
  ...userCommands,
  ...randomCommands,
  ping,
  game,
  cookie,
  guild,
  catalog,
  help,
  info,
  status,
  catalogSearch,
  toolbox,
};
