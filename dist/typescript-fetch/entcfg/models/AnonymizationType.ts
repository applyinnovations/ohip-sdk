/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AnonymizationStatusType } from './AnonymizationStatusType';
import {
    AnonymizationStatusTypeFromJSON,
    AnonymizationStatusTypeFromJSONTyped,
    AnonymizationStatusTypeToJSON,
} from './AnonymizationStatusType';

/**
 * Provides information about guest's anonymization status.
 * @export
 * @interface AnonymizationType
 */
export interface AnonymizationType {
    /**
     * Date and Time when the guest was anonymized.
     * @type {string}
     * @memberof AnonymizationType
     */
    anonymizationDate?: string;
    /**
     * 
     * @type {AnonymizationStatusType}
     * @memberof AnonymizationType
     */
    anonymizationStatus?: AnonymizationStatusType;
}

/**
 * Check if a given object implements the AnonymizationType interface.
 */
export function instanceOfAnonymizationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AnonymizationTypeFromJSON(json: any): AnonymizationType {
    return AnonymizationTypeFromJSONTyped(json, false);
}

export function AnonymizationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnonymizationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'anonymizationDate': !exists(json, 'anonymizationDate') ? undefined : json['anonymizationDate'],
        'anonymizationStatus': !exists(json, 'anonymizationStatus') ? undefined : AnonymizationStatusTypeFromJSON(json['anonymizationStatus']),
    };
}

export function AnonymizationTypeToJSON(value?: AnonymizationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'anonymizationDate': value.anonymizationDate,
        'anonymizationStatus': AnonymizationStatusTypeToJSON(value.anonymizationStatus),
    };
}

