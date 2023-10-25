/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ParameterType } from './ParameterType';
import {
    ParameterTypeFromJSON,
    ParameterTypeFromJSONTyped,
    ParameterTypeToJSON,
} from './ParameterType';
import type { SystemCarrierType } from './SystemCarrierType';
import {
    SystemCarrierTypeFromJSON,
    SystemCarrierTypeFromJSONTyped,
    SystemCarrierTypeToJSON,
} from './SystemCarrierType';
import type { SystemErrorType } from './SystemErrorType';
import {
    SystemErrorTypeFromJSON,
    SystemErrorTypeFromJSONTyped,
    SystemErrorTypeToJSON,
} from './SystemErrorType';
import type { SystemInfoType } from './SystemInfoType';
import {
    SystemInfoTypeFromJSON,
    SystemInfoTypeFromJSONTyped,
    SystemInfoTypeToJSON,
} from './SystemInfoType';
import type { SystemRateCategoryType } from './SystemRateCategoryType';
import {
    SystemRateCategoryTypeFromJSON,
    SystemRateCategoryTypeFromJSONTyped,
    SystemRateCategoryTypeToJSON,
} from './SystemRateCategoryType';
import type { SystemRateLevelType } from './SystemRateLevelType';
import {
    SystemRateLevelTypeFromJSON,
    SystemRateLevelTypeFromJSONTyped,
    SystemRateLevelTypeToJSON,
} from './SystemRateLevelType';
import type { SystemRoomTypeType } from './SystemRoomTypeType';
import {
    SystemRoomTypeTypeFromJSON,
    SystemRoomTypeTypeFromJSONTyped,
    SystemRoomTypeTypeToJSON,
} from './SystemRoomTypeType';

/**
 * Identify details of an external system.
 * @export
 * @interface ChannelType
 */
export interface ChannelType {
    /**
     * External system Add-on license. Available for ADS only.
     * @type {string}
     * @memberof ChannelType
     */
    addOnLicense?: string;
    /**
     * External system carrier details.
     * @type {Array<SystemCarrierType>}
     * @memberof ChannelType
     */
    carriers?: Array<SystemCarrierType>;
    /**
     * External system error details.
     * @type {Array<SystemErrorType>}
     * @memberof ChannelType
     */
    errorCodes?: Array<SystemErrorType>;
    /**
     * Collection of generic Name-Value-Pair parameters.
     * @type {Array<ParameterType>}
     * @memberof ChannelType
     */
    parameters?: Array<ParameterType>;
    /**
     * External system rate categories details.
     * @type {Array<SystemRateCategoryType>}
     * @memberof ChannelType
     */
    rateCategories?: Array<SystemRateCategoryType>;
    /**
     * External system rate levels details.
     * @type {Array<SystemRateLevelType>}
     * @memberof ChannelType
     */
    rateLevels?: Array<SystemRateLevelType>;
    /**
     * External system room type details.
     * @type {Array<SystemRoomTypeType>}
     * @memberof ChannelType
     */
    roomTypes?: Array<SystemRoomTypeType>;
    /**
     * External system Sell By.
     * @type {string}
     * @memberof ChannelType
     */
    sellBy?: string;
    /**
     * 
     * @type {SystemInfoType}
     * @memberof ChannelType
     */
    systemInfo?: SystemInfoType;
}

/**
 * Check if a given object implements the ChannelType interface.
 */
export function instanceOfChannelType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelTypeFromJSON(json: any): ChannelType {
    return ChannelTypeFromJSONTyped(json, false);
}

export function ChannelTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addOnLicense': !exists(json, 'addOnLicense') ? undefined : json['addOnLicense'],
        'carriers': !exists(json, 'carriers') ? undefined : ((json['carriers'] as Array<any>).map(SystemCarrierTypeFromJSON)),
        'errorCodes': !exists(json, 'errorCodes') ? undefined : ((json['errorCodes'] as Array<any>).map(SystemErrorTypeFromJSON)),
        'parameters': !exists(json, 'parameters') ? undefined : ((json['parameters'] as Array<any>).map(ParameterTypeFromJSON)),
        'rateCategories': !exists(json, 'rateCategories') ? undefined : ((json['rateCategories'] as Array<any>).map(SystemRateCategoryTypeFromJSON)),
        'rateLevels': !exists(json, 'rateLevels') ? undefined : ((json['rateLevels'] as Array<any>).map(SystemRateLevelTypeFromJSON)),
        'roomTypes': !exists(json, 'roomTypes') ? undefined : ((json['roomTypes'] as Array<any>).map(SystemRoomTypeTypeFromJSON)),
        'sellBy': !exists(json, 'sellBy') ? undefined : json['sellBy'],
        'systemInfo': !exists(json, 'systemInfo') ? undefined : SystemInfoTypeFromJSON(json['systemInfo']),
    };
}

export function ChannelTypeToJSON(value?: ChannelType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addOnLicense': value.addOnLicense,
        'carriers': value.carriers === undefined ? undefined : ((value.carriers as Array<any>).map(SystemCarrierTypeToJSON)),
        'errorCodes': value.errorCodes === undefined ? undefined : ((value.errorCodes as Array<any>).map(SystemErrorTypeToJSON)),
        'parameters': value.parameters === undefined ? undefined : ((value.parameters as Array<any>).map(ParameterTypeToJSON)),
        'rateCategories': value.rateCategories === undefined ? undefined : ((value.rateCategories as Array<any>).map(SystemRateCategoryTypeToJSON)),
        'rateLevels': value.rateLevels === undefined ? undefined : ((value.rateLevels as Array<any>).map(SystemRateLevelTypeToJSON)),
        'roomTypes': value.roomTypes === undefined ? undefined : ((value.roomTypes as Array<any>).map(SystemRoomTypeTypeToJSON)),
        'sellBy': value.sellBy,
        'systemInfo': SystemInfoTypeToJSON(value.systemInfo),
    };
}

