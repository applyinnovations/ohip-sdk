/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MassRateChangeRecordStatusType } from './MassRateChangeRecordStatusType';
import {
    MassRateChangeRecordStatusTypeFromJSON,
    MassRateChangeRecordStatusTypeFromJSONTyped,
    MassRateChangeRecordStatusTypeToJSON,
} from './MassRateChangeRecordStatusType';

/**
 * 
 * @export
 * @interface MassRateChangeDetailLogType
 */
export interface MassRateChangeDetailLogType {
    /**
     * Message details.
     * @type {string}
     * @memberof MassRateChangeDetailLogType
     */
    description?: string;
    /**
     * Rate Code.
     * @type {string}
     * @memberof MassRateChangeDetailLogType
     */
    ratePlanCode?: string;
    /**
     * 
     * @type {MassRateChangeRecordStatusType}
     * @memberof MassRateChangeDetailLogType
     */
    status?: MassRateChangeRecordStatusType;
}

/**
 * Check if a given object implements the MassRateChangeDetailLogType interface.
 */
export function instanceOfMassRateChangeDetailLogType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MassRateChangeDetailLogTypeFromJSON(json: any): MassRateChangeDetailLogType {
    return MassRateChangeDetailLogTypeFromJSONTyped(json, false);
}

export function MassRateChangeDetailLogTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MassRateChangeDetailLogType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'ratePlanCode': !exists(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'status': !exists(json, 'status') ? undefined : MassRateChangeRecordStatusTypeFromJSON(json['status']),
    };
}

export function MassRateChangeDetailLogTypeToJSON(value?: MassRateChangeDetailLogType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'ratePlanCode': value.ratePlanCode,
        'status': MassRateChangeRecordStatusTypeToJSON(value.status),
    };
}

