/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { SystemInfoType } from './SystemInfoType';
import {
    SystemInfoTypeFromJSON,
    SystemInfoTypeFromJSONTyped,
    SystemInfoTypeToJSON,
} from './SystemInfoType';
import type { TimeSpanType } from './TimeSpanType';
import {
    TimeSpanTypeFromJSON,
    TimeSpanTypeFromJSONTyped,
    TimeSpanTypeToJSON,
} from './TimeSpanType';

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
export function instanceOfCurrencyMappingType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CurrencyMappingTypeFromJSON(json: any): CurrencyMappingType {
    return CurrencyMappingTypeFromJSONTyped(json, false);
}

export function CurrencyMappingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrencyMappingType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelDecimalPosition': !exists(json, 'channelDecimalPosition') ? undefined : json['channelDecimalPosition'],
        'dateRange': !exists(json, 'dateRange') ? undefined : TimeSpanTypeFromJSON(json['dateRange']),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'externalSystemCode': !exists(json, 'externalSystemCode') ? undefined : json['externalSystemCode'],
        'lanyonDecimalPosition': !exists(json, 'lanyonDecimalPosition') ? undefined : json['lanyonDecimalPosition'],
        'localSystemCode': !exists(json, 'localSystemCode') ? undefined : json['localSystemCode'],
        'systemInfo': !exists(json, 'systemInfo') ? undefined : SystemInfoTypeFromJSON(json['systemInfo']),
    };
}

export function CurrencyMappingTypeToJSON(value?: CurrencyMappingType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channelDecimalPosition': value.channelDecimalPosition,
        'dateRange': TimeSpanTypeToJSON(value.dateRange),
        'description': value.description,
        'externalSystemCode': value.externalSystemCode,
        'lanyonDecimalPosition': value.lanyonDecimalPosition,
        'localSystemCode': value.localSystemCode,
        'systemInfo': SystemInfoTypeToJSON(value.systemInfo),
    };
}

