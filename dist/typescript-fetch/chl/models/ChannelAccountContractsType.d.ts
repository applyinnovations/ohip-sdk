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
import type { ChannelAccountContractInformationType } from './ChannelAccountContractInformationType';
import type { ProfileId } from './ProfileId';
/**
 * Channel account contracts type to hold account and contract details.
 * @export
 * @interface ChannelAccountContractsType
 */
export interface ChannelAccountContractsType {
    /**
     * Holds Account code of the channel account.
     * @type {string}
     * @memberof ChannelAccountContractsType
     */
    accountCode?: string;
    /**
     * Holds Account Name of the channel account.
     * @type {string}
     * @memberof ChannelAccountContractsType
     */
    accountName?: string;
    /**
     * Channel account contract information object to hold details of channel account contract.
     * @type {Array<ChannelAccountContractInformationType>}
     * @memberof ChannelAccountContractsType
     */
    channelAccountContractsInformation?: Array<ChannelAccountContractInformationType>;
    /**
     *
     * @type {ProfileId}
     * @memberof ChannelAccountContractsType
     */
    profileId?: ProfileId;
}
/**
 * Check if a given object implements the ChannelAccountContractsType interface.
 */
export declare function instanceOfChannelAccountContractsType(value: object): boolean;
export declare function ChannelAccountContractsTypeFromJSON(json: any): ChannelAccountContractsType;
export declare function ChannelAccountContractsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelAccountContractsType;
export declare function ChannelAccountContractsTypeToJSON(value?: ChannelAccountContractsType | null): any;
