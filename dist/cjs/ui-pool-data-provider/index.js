"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiPoolDataProvider = void 0;
const utils_1 = require("ethers/lib/utils");
const UiPoolDataProviderFactory_1 = require("./typechain/UiPoolDataProviderFactory");
class UiPoolDataProvider {
    /**
     * Constructor
     * @param context The ui pool data provider context
     */
    constructor(context) {
        if (!(0, utils_1.isAddress)(context.uiPoolDataProviderAddress)) {
            throw new Error('contract address is not valid');
        }
        if (!(0, utils_1.isAddress)(context.lendingPoolAddressProvider)) {
            throw new Error('Lending pool address is not valid');
        }
        this._lendingPoolAddressProvider = context.lendingPoolAddressProvider;
        this._contract = UiPoolDataProviderFactory_1.UiPoolDataProviderFactory.connect(context.uiPoolDataProviderAddress, context.provider);
    }
    /**
     * Get the underlying asset address for each lending pool reserve
     */
    async getReservesList() {
        return this._contract.getReservesList(this._lendingPoolAddressProvider);
    }
    /**
     * Get data for each lending pool reserve
     */
    async getReserves() {
        return this._contract.getSimpleReservesData(this._lendingPoolAddressProvider);
    }
    /**
     * Get data for each user reserve on the lending pool
     */
    async getUserReserves(user) {
        if (!(0, utils_1.isAddress)(user)) {
            throw new Error('User address is not a valid ethereum address');
        }
        return this._contract.getUserReservesData(this._lendingPoolAddressProvider, user);
    }
    /**
     * Get data for each lending pool reserve and user reserve
     */
    async getAllReserves(user) {
        if (!(0, utils_1.isAddress)(user)) {
            throw new Error('User address is not a valid ethereum address');
        }
        return this._contract.getReservesData(this._lendingPoolAddressProvider, user);
    }
}
exports.UiPoolDataProvider = UiPoolDataProvider;
//# sourceMappingURL=index.js.map