import { isAddress } from 'ethers/lib/utils';
import { UiIncentiveDataProviderFactory } from './typechain/UiIncentiveDataProviderFactory';
export * from './types/UiIncentiveDataProviderTypes';
export class UiIncentiveDataProvider {
    /**
     * Constructor
     * @param context The ui incentive data provider context
     */
    constructor(context) {
        if (!isAddress(context.incentiveDataProviderAddress)) {
            throw new Error('contract address is not valid');
        }
        this._contract = UiIncentiveDataProviderFactory.connect(context.incentiveDataProviderAddress, context.provider);
    }
    /**
     *  Get the full reserve incentive data for the lending pool and the user
     * @param user The user address
     */
    async getFullReservesIncentiveData(user, lendingPoolAddressProvider) {
        if (!isAddress(lendingPoolAddressProvider)) {
            throw new Error('Lending pool address provider is not valid');
        }
        if (!isAddress(user)) {
            throw new Error('User address is not a valid ethereum address');
        }
        return this._contract.getFullReservesIncentiveData(lendingPoolAddressProvider, user);
    }
    /**
     *  Get the reserve incentive data for the lending pool
     */
    async getReservesIncentivesData(lendingPoolAddressProvider) {
        if (!isAddress(lendingPoolAddressProvider)) {
            throw new Error('Lending pool address provider is not valid');
        }
        return this._contract.getReservesIncentivesData(lendingPoolAddressProvider);
    }
    async getReservesIncentivesDataHumanized(lendingPoolAddressProvider) {
        const response = await this.getReservesIncentivesData(lendingPoolAddressProvider);
        return response.map(r => (Object.assign(Object.assign({}, r), { aIncentiveData: this._formatIncentiveData(r.aIncentiveData), vIncentiveData: this._formatIncentiveData(r.vIncentiveData), sIncentiveData: this._formatIncentiveData(r.sIncentiveData) })));
    }
    /**
     *  Get the reserve incentive data for the user
     * @param user The user address
     */
    async getUserReservesIncentivesData(user, lendingPoolAddressProvider) {
        if (!isAddress(lendingPoolAddressProvider)) {
            throw new Error('Lending pool address provider is not valid');
        }
        if (!isAddress(user)) {
            throw new Error('User address is not a valid ethereum address');
        }
        return this._contract.getUserReservesIncentivesData(lendingPoolAddressProvider, user);
    }
    _formatIncentiveData(data) {
        return Object.assign(Object.assign({}, data), { emissionPerSecond: data.emissionPerSecond.toString(), incentivesLastUpdateTimestamp: data.incentivesLastUpdateTimestamp.toNumber(), tokenIncentivesIndex: data.tokenIncentivesIndex.toString(), emissionEndTimestamp: data.emissionEndTimestamp.toNumber() });
    }
}
//# sourceMappingURL=index.js.map