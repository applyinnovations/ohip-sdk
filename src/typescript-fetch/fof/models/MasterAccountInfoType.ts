/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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
 * @interface MasterAccountInfoType
 */
export interface MasterAccountInfoType {
    /**
     * 
     * @type {UniqueIDType}
     * @memberof MasterAccountInfoType
     */
    masterAccountId?: UniqueIDType;
    /**
     * Name of the Master account.
     * @type {string}
     * @memberof MasterAccountInfoType
     */
    masterAccountName?: string;
}

/**
 * Check if a given object implements the MasterAccountInfoType interface.
 */
export function instanceOfMasterAccountInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MasterAccountInfoTypeFromJSON(json: any): MasterAccountInfoType {
    return MasterAccountInfoTypeFromJSONTyped(json, false);
}

export function MasterAccountInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MasterAccountInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'masterAccountId': !exists(json, 'masterAccountId') ? undefined : UniqueIDTypeFromJSON(json['masterAccountId']),
        'masterAccountName': !exists(json, 'masterAccountName') ? undefined : json['masterAccountName'],
    };
}

export function MasterAccountInfoTypeToJSON(value?: MasterAccountInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'masterAccountId': UniqueIDTypeToJSON(value.masterAccountId),
        'masterAccountName': value.masterAccountName,
    };
}
