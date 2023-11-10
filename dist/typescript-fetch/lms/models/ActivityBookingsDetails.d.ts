/**
 * OPERA Cloud Leisure Management API
 * APIs to cater for external Leisure Management functionality integrated with OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { FetchActivityBookingsType } from './FetchActivityBookingsType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface ActivityBookingsDetails
 */
export interface ActivityBookingsDetails {
    /**
     * Criteria for fetching Activity Bookings.
     * @type {Array<FetchActivityBookingsType>}
     * @memberof ActivityBookingsDetails
     */
    activityLookUpList?: Array<FetchActivityBookingsType>;
    /**
     *
     * @type {Links}
     * @memberof ActivityBookingsDetails
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof ActivityBookingsDetails
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the ActivityBookingsDetails interface.
 */
export declare function instanceOfActivityBookingsDetails(value: object): boolean;
export declare function ActivityBookingsDetailsFromJSON(json: any): ActivityBookingsDetails;
export declare function ActivityBookingsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityBookingsDetails;
export declare function ActivityBookingsDetailsToJSON(value?: ActivityBookingsDetails | null): any;
