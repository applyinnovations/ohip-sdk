/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BedTypeRequestsType } from './BedTypeRequestsType';
import {
    BedTypeRequestsTypeFromJSON,
    BedTypeRequestsTypeFromJSONTyped,
    BedTypeRequestsTypeToJSON,
} from './BedTypeRequestsType';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Request object for creating Bed Type Requests.
 * @export
 * @interface BedTypeRequestsCriteria
 */
export interface BedTypeRequestsCriteria {
    /**
     * 
     * @type {BedTypeRequestsType}
     * @memberof BedTypeRequestsCriteria
     */
    bedTypeRequests?: BedTypeRequestsType;
    /**
     * 
     * @type {Links}
     * @memberof BedTypeRequestsCriteria
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof BedTypeRequestsCriteria
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the BedTypeRequestsCriteria interface.
 */
export function instanceOfBedTypeRequestsCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BedTypeRequestsCriteriaFromJSON(json: any): BedTypeRequestsCriteria {
    return BedTypeRequestsCriteriaFromJSONTyped(json, false);
}

export function BedTypeRequestsCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): BedTypeRequestsCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bedTypeRequests': !exists(json, 'bedTypeRequests') ? undefined : BedTypeRequestsTypeFromJSON(json['bedTypeRequests']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function BedTypeRequestsCriteriaToJSON(value?: BedTypeRequestsCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bedTypeRequests': BedTypeRequestsTypeToJSON(value.bedTypeRequests),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
