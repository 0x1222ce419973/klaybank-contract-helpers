import { isAddress } from 'ethers/lib/utils';
import { UiPoolDataProviderFactory } from './typechain/UiPoolDataProviderFactory';
export class UiPoolDataProvider {
    /**
     * Constructor
     * @param context The ui pool data provider context
     */
    constructor(context) {
        if (!isAddress(context.uiPoolDataProviderAddress)) {
            throw new Error('contract address is not valid');
        }
        if (!isAddress(context.lendingPoolAddressProvider)) {
            throw new Error('Lending pool address is not valid');
        }
        this._lendingPoolAddressProvider = context.lendingPoolAddressProvider;
        this._contract = UiPoolDataProviderFactory.connect(context.uiPoolDataProviderAddress, context.provider);
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
        if (!isAddress(user)) {
            throw new Error('User address is not a valid ethereum address');
        }
        return this._contract.getUserReservesData(this._lendingPoolAddressProvider, user);
    }
    /**
     * Get data for each lending pool reserve and user reserve
     */
    async getAllReserves(user) {
        if (!isAddress(user)) {
            throw new Error('User address is not a valid ethereum address');
        }
        return this._contract.getReservesData(this._lendingPoolAddressProvider, user);
    }
}
//# sourceMappingURL=index.js.map