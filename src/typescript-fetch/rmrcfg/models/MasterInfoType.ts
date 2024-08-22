/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Configuration Service API
 * APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CodeInfoType } from './CodeInfoType';
import {
    CodeInfoTypeFromJSON,
    CodeInfoTypeFromJSONTyped,
    CodeInfoTypeToJSON,
} from './CodeInfoType';
import type { MasterType } from './MasterType';
import {
    MasterTypeFromJSON,
    MasterTypeFromJSONTyped,
    MasterTypeToJSON,
} from './MasterType';

/**
 * 
 * @export
 * @interface MasterInfoType
 */
export interface MasterInfoType {
    /**
     * 
     * @type {Array<CodeInfoType>}
     * @memberof MasterInfoType
     */
    codeInfo?: Array<CodeInfoType>;
    /**
     * 
     * @type {MasterType}
     * @memberof MasterInfoType
     */
    codeType?: MasterType;
}

/**
 * Check if a given object implements the MasterInfoType interface.
 */
export function instanceOfMasterInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MasterInfoTypeFromJSON(json: any): MasterInfoType {
    return MasterInfoTypeFromJSONTyped(json, false);
}

export function MasterInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MasterInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'codeInfo': !exists(json, 'codeInfo') ? undefined : ((json['codeInfo'] as Array<any>).map(CodeInfoTypeFromJSON)),
        'codeType': !exists(json, 'codeType') ? undefined : MasterTypeFromJSON(json['codeType']),
    };
}

export function MasterInfoTypeToJSON(value?: MasterInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'codeInfo': value.codeInfo === undefined ? undefined : ((value.codeInfo as Array<any>).map(CodeInfoTypeToJSON)),
        'codeType': MasterTypeToJSON(value.codeType),
    };
}

