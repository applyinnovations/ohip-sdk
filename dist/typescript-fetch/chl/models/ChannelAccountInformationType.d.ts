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
import type { ChannelAccountCommunicationType } from './ChannelAccountCommunicationType';
import type { ChannelAccountContactType } from './ChannelAccountContactType';
import type { ChannelAccountContractInformationType } from './ChannelAccountContractInformationType';
import type { ChannelAccountDetailsType } from './ChannelAccountDetailsType';
import type { ChannelAccountNotesType } from './ChannelAccountNotesType';
import type { ChannelAccountSetupDetailsType } from './ChannelAccountSetupDetailsType';
import type { IndicatorType } from './IndicatorType';
/**
 * To hold channel account detailed information.
 * @export
 * @interface ChannelAccountInformationType
 */
export interface ChannelAccountInformationType {
    /**
     *
     * @type {ChannelAccountDetailsType}
     * @memberof ChannelAccountInformationType
     */
    accountDetails?: ChannelAccountDetailsType;
    /**
     *
     * @type {ChannelAccountSetupDetailsType}
     * @memberof ChannelAccountInformationType
     */
    accountSetupDetails?: ChannelAccountSetupDetailsType;
    /**
     * Collection of lamp indicators.
     * @type {Array<IndicatorType>}
     * @memberof ChannelAccountInformationType
     */
    channelAccountIndicators?: Array<IndicatorType>;
    /**
     *
     * @type {ChannelAccountNotesType}
     * @memberof ChannelAccountInformationType
     */
    channelAccountNotes?: ChannelAccountNotesType;
    /**
     *
     * @type {ChannelAccountCommunicationType}
     * @memberof ChannelAccountInformationType
     */
    communicationDetails?: ChannelAccountCommunicationType;
    /**
     *
     * @type {ChannelAccountContactType}
     * @memberof ChannelAccountInformationType
     */
    contactInformation?: ChannelAccountContactType;
    /**
     * Channel account contract information object to hold details of channel account contract.
     * @type {Array<ChannelAccountContractInformationType>}
     * @memberof ChannelAccountInformationType
     */
    contractInformation?: Array<ChannelAccountContractInformationType>;
}
/**
 * Check if a given object implements the ChannelAccountInformationType interface.
 */
export declare function instanceOfChannelAccountInformationType(value: object): boolean;
export declare function ChannelAccountInformationTypeFromJSON(json: any): ChannelAccountInformationType;
export declare function ChannelAccountInformationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelAccountInformationType;
export declare function ChannelAccountInformationTypeToJSON(value?: ChannelAccountInformationType | null): any;