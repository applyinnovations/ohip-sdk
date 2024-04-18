/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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
import type { TemplateSourceCodeType } from './TemplateSourceCodeType';
import {
    TemplateSourceCodeTypeFromJSON,
    TemplateSourceCodeTypeFromJSONTyped,
    TemplateSourceCodeTypeToJSON,
} from './TemplateSourceCodeType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response for fetch template Source Codes.
 * @export
 * @interface TemplateSourceCodesDetails
 */
export interface TemplateSourceCodesDetails {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof TemplateSourceCodesDetails
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof TemplateSourceCodesDetails
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof TemplateSourceCodesDetails
     */
    limit?: number;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof TemplateSourceCodesDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof TemplateSourceCodesDetails
     */
    offset?: number;
    /**
     * Collection of template Source Codes.
     * @type {Array<TemplateSourceCodeType>}
     * @memberof TemplateSourceCodesDetails
     */
    templateSourceCodes?: Array<TemplateSourceCodeType>;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof TemplateSourceCodesDetails
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof TemplateSourceCodesDetails
     */
    totalResults?: number;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TemplateSourceCodesDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the TemplateSourceCodesDetails interface.
 */
export function instanceOfTemplateSourceCodesDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TemplateSourceCodesDetailsFromJSON(json: any): TemplateSourceCodesDetails {
    return TemplateSourceCodesDetailsFromJSONTyped(json, false);
}

export function TemplateSourceCodesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateSourceCodesDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'templateSourceCodes': !exists(json, 'templateSourceCodes') ? undefined : ((json['templateSourceCodes'] as Array<any>).map(TemplateSourceCodeTypeFromJSON)),
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function TemplateSourceCodesDetailsToJSON(value?: TemplateSourceCodesDetails | null): any {
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
        'templateSourceCodes': value.templateSourceCodes === undefined ? undefined : ((value.templateSourceCodes as Array<any>).map(TemplateSourceCodeTypeToJSON)),
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
