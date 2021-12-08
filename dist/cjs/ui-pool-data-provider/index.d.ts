import { providers } from 'ethers';
import { ReserveDataResponse, UserReserveDataResponse, AllReserveDataResponse } from './types/UiPoolDataProviderTypes';
export interface UiPoolDataProviderContext {
    uiPoolDataProviderAddress: string;
    lendingPoolAddressProvider: string;
    provider: providers.Provider;
}
export declare class UiPoolDataProvider {
    private readonly _contract;
    private readonly _lendingPoolAddressProvider;
    /**
     * Constructor
     * @param context The ui pool data provider context
     */
    constructor(context: UiPoolDataProviderContext);
    /**
     * Get the underlying asset address for each lending pool reserve
     */
    getReservesList(): Promise<string[]>;
    /**
     * Get data for each lending pool reserve
     */
    getReserves(): Promise<ReserveDataResponse[]>;
    /**
     * Get data for each user reserve on the lending pool
     */
    getUserReserves(user: string): Promise<UserReserveDataResponse[]>;
    /**
     * Get data for each lending pool reserve and user reserve
     */
    getAllReserves(user: string): Promise<AllReserveDataResponse>;
}
//# sourceMappingURL=index.d.ts.map