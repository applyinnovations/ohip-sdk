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
import type { SystemInfoType } from './SystemInfoType';
import type { TimeSpanType } from './TimeSpanType';
/**
 * Base external system mapping info.
 * @export
 * @interface CurrencyMappingType
 */
export interface CurrencyMappingType {
    /**
     * Number of decimal positions used by the currency as per the channel.
     * @type {number}
     * @memberof CurrencyMappingType
     */
    channelDecimalPosition?: number;
    /**
     *
     * @type {TimeSpanType}
     * @memberof CurrencyMappingType
     */
    dateRange?: TimeSpanType;
    /**
     * Detailed Description of the given entity.
     * @type {string}
     * @memberof CurrencyMappingType
     */
    description?: string;
    /**
     * Code used in the External System
     * @type {string}
     * @memberof CurrencyMappingType
     */
    externalSystemCode?: string;
    /**
     * Number of decimal positions used by the currency.
     * @type {number}
     * @memberof CurrencyMappingType
     */
    lanyonDecimalPosition?: number;
    /**
     * Code used inside the OPERA System
     * @type {string}
     * @memberof CurrencyMappingType
     */
    localSystemCode?: string;
    /**
     *
     * @type {SystemInfoType}
     * @memberof CurrencyMappingType
     */
    systemInfo?: SystemInfoType;
}
/**
 * Check if a given object implements the CurrencyMappingType interface.
 */
export declare function instanceOfCurrencyMappingType(value: object): boolean;
export declare function CurrencyMappingTypeFromJSON(json: any): CurrencyMappingType;
export declare function CurrencyMappingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrencyMappingType;
export declare function CurrencyMappingTypeToJSON(value?: CurrencyMappingType | null): any;
