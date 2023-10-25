/* tslint:disable */
/* eslint-disable */
/**
 * Opera Cloud Inventory Asynchronous API
 * APIs to cater for Inventory related asynchronous functionality in OPERA Cloud. This includes viewing inventory data along with its revenue and updating inventory&apos;s sell limits for date ranges. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { RevenueInventoryStatisticsType } from './RevenueInventoryStatisticsType';
import {
    RevenueInventoryStatisticsTypeFromJSON,
    RevenueInventoryStatisticsTypeFromJSONTyped,
    RevenueInventoryStatisticsTypeToJSON,
} from './RevenueInventoryStatisticsType';

/**
 * Revenue Inventory Statistics for the current occupancy date which might include data grouped by room type, market and reservation guarantee code.
 * @export
 * @interface RevenueInventoryStatisticsDetails
 */
export interface RevenueInventoryStatisticsDetails {
    /**
     * 
     * @type {Array<RevenueInventoryStatisticsType>}
     * @memberof RevenueInventoryStatisticsDetails
     */
    revInvStats?: Array<RevenueInventoryStatisticsType>;
}

/**
 * Check if a given object implements the RevenueInventoryStatisticsDetails interface.
 */
export function instanceOfRevenueInventoryStatisticsDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RevenueInventoryStatisticsDetailsFromJSON(json: any): RevenueInventoryStatisticsDetails {
    return RevenueInventoryStatisticsDetailsFromJSONTyped(json, false);
}

export function RevenueInventoryStatisticsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RevenueInventoryStatisticsDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'revInvStats': !exists(json, 'revInvStats') ? undefined : ((json['revInvStats'] as Array<any>).map(RevenueInventoryStatisticsTypeFromJSON)),
    };
}

export function RevenueInventoryStatisticsDetailsToJSON(value?: RevenueInventoryStatisticsDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'revInvStats': value.revInvStats === undefined ? undefined : ((value.revInvStats as Array<any>).map(RevenueInventoryStatisticsTypeToJSON)),
    };
}

