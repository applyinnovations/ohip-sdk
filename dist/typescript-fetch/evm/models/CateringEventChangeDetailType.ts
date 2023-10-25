/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * 
 * @export
 * @interface CateringEventChangeDetailType
 */
export interface CateringEventChangeDetailType {
    /**
     * 
     * @type {UniqueIDType}
     * @memberof CateringEventChangeDetailType
     */
    changeId?: UniqueIDType;
    /**
     * List of Field Names for the Type(s) Selection
     * @type {string}
     * @memberof CateringEventChangeDetailType
     */
    fieldName?: string;
    /**
     * New Value of the respective field
     * @type {string}
     * @memberof CateringEventChangeDetailType
     */
    newValue?: string;
    /**
     * Old Value of the respective field
     * @type {string}
     * @memberof CateringEventChangeDetailType
     */
    oldValue?: string;
}

/**
 * Check if a given object implements the CateringEventChangeDetailType interface.
 */
export function instanceOfCateringEventChangeDetailType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CateringEventChangeDetailTypeFromJSON(json: any): CateringEventChangeDetailType {
    return CateringEventChangeDetailTypeFromJSONTyped(json, false);
}

export function CateringEventChangeDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringEventChangeDetailType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changeId': !exists(json, 'changeId') ? undefined : UniqueIDTypeFromJSON(json['changeId']),
        'fieldName': !exists(json, 'fieldName') ? undefined : json['fieldName'],
        'newValue': !exists(json, 'newValue') ? undefined : json['newValue'],
        'oldValue': !exists(json, 'oldValue') ? undefined : json['oldValue'],
    };
}

export function CateringEventChangeDetailTypeToJSON(value?: CateringEventChangeDetailType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'changeId': UniqueIDTypeToJSON(value.changeId),
        'fieldName': value.fieldName,
        'newValue': value.newValue,
        'oldValue': value.oldValue,
    };
}

