/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { PurposeOfStaysType } from './PurposeOfStaysType';
import {
    PurposeOfStaysTypeFromJSON,
    PurposeOfStaysTypeFromJSONTyped,
    PurposeOfStaysTypeToJSON,
} from './PurposeOfStaysType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Response object for fetching Purpose Of Stays.
 * @export
 * @interface PurposeOfStaysDetails
 */
export interface PurposeOfStaysDetails {
    /**
     * 
     * @type {Links}
     * @memberof PurposeOfStaysDetails
     */
    links?: Links;
    /**
     * 
     * @type {PurposeOfStaysType}
     * @memberof PurposeOfStaysDetails
     */
    purposeOfStays?: PurposeOfStaysType;
    /**
     * 
     * @type {WarningsType}
     * @memberof PurposeOfStaysDetails
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the PurposeOfStaysDetails interface.
 */
export function instanceOfPurposeOfStaysDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PurposeOfStaysDetailsFromJSON(json: any): PurposeOfStaysDetails {
    return PurposeOfStaysDetailsFromJSONTyped(json, false);
}

export function PurposeOfStaysDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PurposeOfStaysDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'purposeOfStays': !exists(json, 'purposeOfStays') ? undefined : PurposeOfStaysTypeFromJSON(json['purposeOfStays']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function PurposeOfStaysDetailsToJSON(value?: PurposeOfStaysDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': LinksToJSON(value.links),
        'purposeOfStays': PurposeOfStaysTypeToJSON(value.purposeOfStays),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
