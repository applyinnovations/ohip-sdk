/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { OutOfOrderServiceReasonType } from './OutOfOrderServiceReasonType';
import {
    OutOfOrderServiceReasonTypeFromJSON,
    OutOfOrderServiceReasonTypeFromJSONTyped,
    OutOfOrderServiceReasonTypeToJSON,
} from './OutOfOrderServiceReasonType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object for fetching Out of Order/Service Reason(s).
 * @export
 * @interface OutOfOrderServiceReasonsDetails
 */
export interface OutOfOrderServiceReasonsDetails {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof OutOfOrderServiceReasonsDetails
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof OutOfOrderServiceReasonsDetails
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof OutOfOrderServiceReasonsDetails
     */
    limit?: number;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof OutOfOrderServiceReasonsDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof OutOfOrderServiceReasonsDetails
     */
    offset?: number;
    /**
     * out of order/service reason details.
     * @type {Array<OutOfOrderServiceReasonType>}
     * @memberof OutOfOrderServiceReasonsDetails
     */
    outOfOrderServiceReasons?: Array<OutOfOrderServiceReasonType>;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof OutOfOrderServiceReasonsDetails
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof OutOfOrderServiceReasonsDetails
     */
    totalResults?: number;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof OutOfOrderServiceReasonsDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the OutOfOrderServiceReasonsDetails interface.
 */
export function instanceOfOutOfOrderServiceReasonsDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OutOfOrderServiceReasonsDetailsFromJSON(json: any): OutOfOrderServiceReasonsDetails {
    return OutOfOrderServiceReasonsDetailsFromJSONTyped(json, false);
}

export function OutOfOrderServiceReasonsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutOfOrderServiceReasonsDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'outOfOrderServiceReasons': !exists(json, 'outOfOrderServiceReasons') ? undefined : ((json['outOfOrderServiceReasons'] as Array<any>).map(OutOfOrderServiceReasonTypeFromJSON)),
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function OutOfOrderServiceReasonsDetailsToJSON(value?: OutOfOrderServiceReasonsDetails | null): any {
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
        'outOfOrderServiceReasons': value.outOfOrderServiceReasons === undefined ? undefined : ((value.outOfOrderServiceReasons as Array<any>).map(OutOfOrderServiceReasonTypeToJSON)),
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

