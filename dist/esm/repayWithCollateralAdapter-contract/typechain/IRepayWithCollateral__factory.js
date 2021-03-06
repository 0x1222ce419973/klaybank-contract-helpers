/* Autogenerated file. Do not edit manually. */
/* eslint-disable */
import { Contract } from 'ethers';
export class IRepayWithCollateral__factory {
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
const _abi = [
    {
        inputs: [
            {
                internalType: 'address',
                name: 'collateralAsset',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'debtAsset',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'collateralAmount',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'debtRepayAmount',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'debtRateMode',
                type: 'uint256',
            },
            {
                components: [
                    {
                        internalType: 'uint256',
                        name: 'amount',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'deadline',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint8',
                        name: 'v',
                        type: 'uint8',
                    },
                    {
                        internalType: 'bytes32',
                        name: 'r',
                        type: 'bytes32',
                    },
                    {
                        internalType: 'bytes32',
                        name: 's',
                        type: 'bytes32',
                    },
                ],
                internalType: 'struct IRepayWithCollateral.PermitSignature',
                name: 'permitSignature',
                type: 'tuple',
            },
            {
                internalType: 'bool',
                name: 'useEthPath',
                type: 'bool',
            },
        ],
        name: 'swapAndRepay',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
];
//# sourceMappingURL=IRepayWithCollateral__factory.js.map