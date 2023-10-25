/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AccountForecastType } from './AccountForecastType';
import {
    AccountForecastTypeFromJSON,
    AccountForecastTypeFromJSONTyped,
    AccountForecastTypeToJSON,
} from './AccountForecastType';
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
 * Response object for showing forecast information of account profile.
 * @export
 * @interface AccountForecasts
 */
export interface AccountForecasts {
    /**
     * Detail Information about Account Forecast.
     * @type {Array<AccountForecastType>}
     * @memberof AccountForecasts
     */
    accountForecastDetails?: Array<AccountForecastType>;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof AccountForecasts
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof AccountForecasts
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof AccountForecasts
     */
    limit?: number;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof AccountForecasts
     */
    links?: Array<InstanceLink>;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof AccountForecasts
     */
    offset?: number;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof AccountForecasts
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof AccountForecasts
     */
    totalResults?: number;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof AccountForecasts
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the AccountForecasts interface.
 */
export function instanceOfAccountForecasts(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountForecastsFromJSON(json: any): AccountForecasts {
    return AccountForecastsFromJSONTyped(json, false);
}

export function AccountForecastsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountForecasts {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountForecastDetails': !exists(json, 'accountForecastDetails') ? undefined : ((json['accountForecastDetails'] as Array<any>).map(AccountForecastTypeFromJSON)),
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

export function AccountForecastsToJSON(value?: AccountForecasts | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountForecastDetails': value.accountForecastDetails === undefined ? undefined : ((value.accountForecastDetails as Array<any>).map(AccountForecastTypeToJSON)),
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

