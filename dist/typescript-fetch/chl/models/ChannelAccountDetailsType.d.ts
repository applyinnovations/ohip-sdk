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
import type { ChannelAccountTypeType } from './ChannelAccountTypeType';
/**
 * To hold channel account detailed information.
 * @export
 * @interface ChannelAccountDetailsType
 */
export interface ChannelAccountDetailsType {
    /**
     * Holds Account code for which details are fetched.
     * @type {string}
     * @memberof ChannelAccountDetailsType
     */
    accountCode?: string;
    /**
     * Holds Account Name for which details are fetched.
     * @type {string}
     * @memberof ChannelAccountDetailsType
     */
    accountName?: string;
    /**
     *
     * @type {ChannelAccountTypeType}
     * @memberof ChannelAccountDetailsType
     */
    accountType?: ChannelAccountTypeType;
    /**
     * Account contact name information.
     * @type {string}
     * @memberof ChannelAccountDetailsType
     */
    contactName?: string;
    /**
     * Holds ECU No alias AR_No.
     * @type {string}
     * @memberof ChannelAccountDetailsType
     */
    eCUNo?: string;
    /**
     * Holds Template Account code on which current account is based on.
     * @type {string}
     * @memberof ChannelAccountDetailsType
     */
    templateAccountCode?: string;
}
/**
 * Check if a given object implements the ChannelAccountDetailsType interface.
 */
export declare function instanceOfChannelAccountDetailsType(value: object): boolean;
export declare function ChannelAccountDetailsTypeFromJSON(json: any): ChannelAccountDetailsType;
export declare function ChannelAccountDetailsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelAccountDetailsType;
export declare function ChannelAccountDetailsTypeToJSON(value?: ChannelAccountDetailsType | null): any;
