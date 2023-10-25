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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { TemplateSourceGroupType } from './TemplateSourceGroupType';
import {
    TemplateSourceGroupTypeFromJSON,
    TemplateSourceGroupTypeFromJSONTyped,
    TemplateSourceGroupTypeToJSON,
} from './TemplateSourceGroupType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response for fetch template Source Groups.
 * @export
 * @interface TemplateSourceGroupsDetails
 */
export interface TemplateSourceGroupsDetails {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof TemplateSourceGroupsDetails
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof TemplateSourceGroupsDetails
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof TemplateSourceGroupsDetails
     */
    limit?: number;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof TemplateSourceGroupsDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof TemplateSourceGroupsDetails
     */
    offset?: number;
    /**
     * Collection of template Source Groups.
     * @type {Array<TemplateSourceGroupType>}
     * @memberof TemplateSourceGroupsDetails
     */
    templateSourceGroups?: Array<TemplateSourceGroupType>;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof TemplateSourceGroupsDetails
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof TemplateSourceGroupsDetails
     */
    totalResults?: number;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TemplateSourceGroupsDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the TemplateSourceGroupsDetails interface.
 */
export function instanceOfTemplateSourceGroupsDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TemplateSourceGroupsDetailsFromJSON(json: any): TemplateSourceGroupsDetails {
    return TemplateSourceGroupsDetailsFromJSONTyped(json, false);
}

export function TemplateSourceGroupsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateSourceGroupsDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'templateSourceGroups': !exists(json, 'templateSourceGroups') ? undefined : ((json['templateSourceGroups'] as Array<any>).map(TemplateSourceGroupTypeFromJSON)),
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function TemplateSourceGroupsDetailsToJSON(value?: TemplateSourceGroupsDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'hasMore': value.hasMore,
        'limit': value.limit,
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'offset': value.offset,
        'templateSourceGroups': value.templateSourceGroups === undefined ? undefined : ((value.templateSourceGroups as Array<any>).map(TemplateSourceGroupTypeToJSON)),
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

