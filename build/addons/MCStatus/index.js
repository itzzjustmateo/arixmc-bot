import { Addon } from '../../index.js';
import DefaultConfig from './resources/config.js';
export default class MCStatsAddon extends Addon {
    version = "1.3.0";
    authors = ["Théo"];
    description = "Get the status of a Minecraft server";
    website = "https://docs.itsmy.studio/itsmybot/addons/mcstatus";
    configs = {};
    async load() {
        this.configs.config = await this.createConfig('config.yml', DefaultConfig);
    }
    async fetchStatus(address, port = 25565) {
        try {
            const response = await fetch(`https://api.mcstatus.io/v2/status/java/${address}:${port}`);
            const data = await response.json();
            return data;
        }
        catch (error) {
            const message = error instanceof Error ? error.message : 'Unknown error';
            this.logger.warn(`Could not retrieve Minecraft server status (${address}:${port}).`, message);
            return {
                online: false,
                host: address,
                port,
                ip_address: null,
                eula_blocked: false,
                version: null,
                players: null,
                motd: null,
                icon: null,
                mods: null,
                software: null,
                addons: null,
                srv_record: null
            };
        }
    }
}
