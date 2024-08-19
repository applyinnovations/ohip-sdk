/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ContractFeeTypeType } from './ContractFeeTypeType';
import type { ContractPriceFrequencyType } from './ContractPriceFrequencyType';
import type { ContractPricingType } from './ContractPricingType';
import type { ContractRangeInformationType } from './ContractRangeInformationType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * To hold channel account contract element detailed information.
 * @export
 * @interface ContractElementInformationType
 */
export interface ContractElementInformationType {
    /**
     * Holds channel of the contract element.
     * @type {string}
     * @memberof ContractElementInformationType
     */
    bookingChannelCode?: string;
    /**
     * Holds channel type of the contract element.
     * @type {string}
     * @memberof ContractElementInformationType
     */
    bookingChannelType?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ContractElementInformationType
     */
    contractId?: UniqueIDType;
    /**
     *
     * @type {ContractPricingType}
     * @memberof ContractElementInformationType
     */
    contractPricing?: ContractPricingType;
    /**
     *
     * @type {ContractRangeInformationType}
     * @memberof ContractElementInformationType
     */
    contractRangeInformation?: ContractRangeInformationType;
    /**
     *
     * @type {ContractFeeTypeType}
     * @memberof ContractElementInformationType
     */
    feeType?: ContractFeeTypeType;
    /**
     *
     * @type {ContractPriceFrequencyType}
     * @memberof ContractElementInformationType
     */
    frequency?: ContractPriceFrequencyType;
    /**
     * Holds Note for the contract element.
     * @type {string}
     * @memberof ContractElementInformationType
     */
    note?: string;
    /**
     * Sequence identifies contract element per contract.
     * @type {number}
     * @memberof ContractElementInformationType
     */
    sequence?: number;
}
/**
 * Check if a given object implements the ContractElementInformationType interface.
 */
export declare function instanceOfContractElementInformationType(value: object): boolean;
export declare function ContractElementInformationTypeFromJSON(json: any): ContractElementInformationType;
export declare function ContractElementInformationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContractElementInformationType;
export declare function ContractElementInformationTypeToJSON(value?: ContractElementInformationType | null): any;
