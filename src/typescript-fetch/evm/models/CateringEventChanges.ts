/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CateringEventChangeType } from './CateringEventChangeType';
import {
    CateringEventChangeTypeFromJSON,
    CateringEventChangeTypeFromJSONTyped,
    CateringEventChangeTypeToJSON,
} from './CateringEventChangeType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object for fetching event change logs.
 * @export
 * @interface CateringEventChanges
 */
export interface CateringEventChanges {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof CateringEventChanges
     */
    count?: number;
    /**
     * 
     * @type {CateringEventChangeType}
     * @memberof CateringEventChanges
     */
    eventChanges?: CateringEventChangeType;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof CateringEventChanges
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof CateringEventChanges
     */
    limit?: number;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof CateringEventChanges
     */
    links?: Array<InstanceLink>;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof CateringEventChanges
     */
    offset?: number;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof CateringEventChanges
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof CateringEventChanges
     */
    totalResults?: number;
    /**
     * Used in conjunction with the Success elementSpace to define a business error.
     * @type {Array<WarningType>}
     * @memberof CateringEventChanges
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the CateringEventChanges interface.
 */
export function instanceOfCateringEventChanges(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CateringEventChangesFromJSON(json: any): CateringEventChanges {
    return CateringEventChangesFromJSONTyped(json, false);
}

export function CateringEventChangesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringEventChanges {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'eventChanges': !exists(json, 'eventChanges') ? undefined : CateringEventChangeTypeFromJSON(json['eventChanges']),
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function CateringEventChangesToJSON(value?: CateringEventChanges | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'eventChanges': CateringEventChangeTypeToJSON(value.eventChanges),
        'hasMore': value.hasMore,
        'limit': value.limit,
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'offset': value.offset,
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

