/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ChannelAccountSummaryType } from './ChannelAccountSummaryType';
import {
    ChannelAccountSummaryTypeFromJSON,
    ChannelAccountSummaryTypeFromJSONTyped,
    ChannelAccountSummaryTypeToJSON,
} from './ChannelAccountSummaryType';
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
 * Response object of the Channel accounts fetch request.
 * @export
 * @interface ChannelAccountsSummary
 */
export interface ChannelAccountsSummary {
    /**
     * This type holds collection of channel accounts summary information.
     * @type {Array<ChannelAccountSummaryType>}
     * @memberof ChannelAccountsSummary
     */
    channelAccounts?: Array<ChannelAccountSummaryType>;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ChannelAccountsSummary
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ChannelAccountsSummary
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof ChannelAccountsSummary
     */
    limit?: number;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ChannelAccountsSummary
     */
    links?: Array<InstanceLink>;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof ChannelAccountsSummary
     */
    offset?: number;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof ChannelAccountsSummary
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ChannelAccountsSummary
     */
    totalResults?: number;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChannelAccountsSummary
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ChannelAccountsSummary interface.
 */
export function instanceOfChannelAccountsSummary(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelAccountsSummaryFromJSON(json: any): ChannelAccountsSummary {
    return ChannelAccountsSummaryFromJSONTyped(json, false);
}

export function ChannelAccountsSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelAccountsSummary {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelAccounts': !exists(json, 'channelAccounts') ? undefined : ((json['channelAccounts'] as Array<any>).map(ChannelAccountSummaryTypeFromJSON)),
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ChannelAccountsSummaryToJSON(value?: ChannelAccountsSummary | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channelAccounts': value.channelAccounts === undefined ? undefined : ((value.channelAccounts as Array<any>).map(ChannelAccountSummaryTypeToJSON)),
        'count': value.count,
        'hasMore': value.hasMore,
        'limit': value.limit,
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'offset': value.offset,
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

