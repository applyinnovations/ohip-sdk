/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CustomNameValueConfigType } from './CustomNameValueConfigType';
import {
    CustomNameValueConfigTypeFromJSON,
    CustomNameValueConfigTypeFromJSONTyped,
    CustomNameValueConfigTypeToJSON,
} from './CustomNameValueConfigType';
import type { NameValueModuleType } from './NameValueModuleType';
import {
    NameValueModuleTypeFromJSON,
    NameValueModuleTypeFromJSONTyped,
    NameValueModuleTypeToJSON,
} from './NameValueModuleType';
import type { NameValueTypeType } from './NameValueTypeType';
import {
    NameValueTypeTypeFromJSON,
    NameValueTypeTypeFromJSONTyped,
    NameValueTypeTypeToJSON,
} from './NameValueTypeType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Contains name value information search criteria.
 * @export
 * @interface NameValueBaseSearchType
 */
export interface NameValueBaseSearchType {
    /**
     * 
     * @type {CustomNameValueConfigType}
     * @memberof NameValueBaseSearchType
     */
    configName?: CustomNameValueConfigType;
    /**
     * Specifies the hotel code.
     * @type {string}
     * @memberof NameValueBaseSearchType
     */
    hotelId?: string;
    /**
     * 
     * @type {NameValueModuleType}
     * @memberof NameValueBaseSearchType
     */
    moduleName?: NameValueModuleType;
    /**
     * 
     * @type {NameValueTypeType}
     * @memberof NameValueBaseSearchType
     */
    nameValueType?: NameValueTypeType;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof NameValueBaseSearchType
     */
    sequence?: UniqueIDType;
}

/**
 * Check if a given object implements the NameValueBaseSearchType interface.
 */
export function instanceOfNameValueBaseSearchType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NameValueBaseSearchTypeFromJSON(json: any): NameValueBaseSearchType {
    return NameValueBaseSearchTypeFromJSONTyped(json, false);
}

export function NameValueBaseSearchTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NameValueBaseSearchType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'configName': !exists(json, 'configName') ? undefined : CustomNameValueConfigTypeFromJSON(json['configName']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'moduleName': !exists(json, 'moduleName') ? undefined : NameValueModuleTypeFromJSON(json['moduleName']),
        'nameValueType': !exists(json, 'nameValueType') ? undefined : NameValueTypeTypeFromJSON(json['nameValueType']),
        'sequence': !exists(json, 'sequence') ? undefined : UniqueIDTypeFromJSON(json['sequence']),
    };
}

export function NameValueBaseSearchTypeToJSON(value?: NameValueBaseSearchType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'configName': CustomNameValueConfigTypeToJSON(value.configName),
        'hotelId': value.hotelId,
        'moduleName': NameValueModuleTypeToJSON(value.moduleName),
        'nameValueType': NameValueTypeTypeToJSON(value.nameValueType),
        'sequence': UniqueIDTypeToJSON(value.sequence),
    };
}

