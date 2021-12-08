import { providers } from 'ethers';
import { UiIncentiveDataProvider as UiIncentiveDataProviderContract } from './typechain/UiIncentiveDataProvider';
import { FullReservesIncentiveDataResponse, ReserveIncentiveDataHumanizedResponse, ReserveIncentiveDataResponse, UserReserveIncentiveDataResponse } from './types/UiIncentiveDataProviderTypes';
export * from './types/UiIncentiveDataProviderTypes';
export interface UiIncentiveDataProviderInterface {
    getFullReservesIncentiveData: (user: string, incentiveDataProviderAddress: string, lendingPoolAddressProvider: string) => Promise<FullReservesIncentiveDataResponse>;
    getReservesIncentivesData: (lendingPoolAddressProvider: string) => Promise<ReserveIncentiveDataResponse[]>;
    getUserReservesIncentivesData: (user: string, lendingPoolAddressProvider: string) => Promise<UserReserveIncentiveDataResponse[]>;
}
export interface UiIncentiveDataProviderContext {
    incentiveDataProviderAddress: string;
    provider: providers.Provider;
}
export declare class UiIncentiveDataProvider implements UiIncentiveDataProviderInterface {
    readonly _contract: UiIncentiveDataProviderContract;
    /**
     * Constructor
     * @param context The ui incentive data provider context
     */
    constructor(context: UiIncentiveDataProviderContext);
    /**
     *  Get the full reserve incentive data for the lending pool and the user
     * @param user The user address
     */
    getFullReservesIncentiveData(user: string, lendingPoolAddressProvider: string): Promise<FullReservesIncentiveDataResponse>;
    /**
     *  Get the reserve incentive data for the lending pool
     */
    getReservesIncentivesData(lendingPoolAddressProvider: string): Promise<ReserveIncentiveDataResponse[]>;
    getReservesIncentivesDataHumanized(lendingPoolAddressProvider: string): Promise<ReserveIncentiveDataHumanizedResponse[]>;
    /**
     *  Get the reserve incentive data for the user
     * @param user The user address
     */
    getUserReservesIncentivesData(user: string, lendingPoolAddressProvider: string): Promise<UserReserveIncentiveDataResponse[]>;
    private _formatIncentiveData;
}
//# sourceMappingURL=index.d.ts.map