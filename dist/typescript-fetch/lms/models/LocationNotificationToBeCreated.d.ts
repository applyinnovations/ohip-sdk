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
import type { DateTimeSpanType } from './DateTimeSpanType';
import type { FormattedTextTextType } from './FormattedTextTextType';
import type { Links } from './Links';
import type { LocationNotificationStatus } from './LocationNotificationStatus';
import type { UniqueIDType } from './UniqueIDType';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface LocationNotificationToBeCreated
 */
export interface LocationNotificationToBeCreated {
    /**
     *
     * @type {DateTimeSpanType}
     * @memberof LocationNotificationToBeCreated
     */
    activityTime?: DateTimeSpanType;
    /**
     *
     * @type {FormattedTextTextType}
     * @memberof LocationNotificationToBeCreated
     */
    description?: FormattedTextTextType;
    /**
     *
     * @type {Links}
     * @memberof LocationNotificationToBeCreated
     */
    links?: Links;
    /**
     *
     * @type {LocationNotificationStatus}
     * @memberof LocationNotificationToBeCreated
     */
    locationNotificationStatus?: LocationNotificationStatus;
    /**
     *
     * @type {FormattedTextTextType}
     * @memberof LocationNotificationToBeCreated
     */
    locationText?: FormattedTextTextType;
    /**
     *
     * @type {string}
     * @memberof LocationNotificationToBeCreated
     */
    otherLocationNotificationStatus?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof LocationNotificationToBeCreated
     */
    profileId?: UniqueIDType;
    /**
     *
     * @type {UniqueIDType}
     * @memberof LocationNotificationToBeCreated
     */
    reservationId?: UniqueIDType;
    /**
     *
     * @type {WarningsType}
     * @memberof LocationNotificationToBeCreated
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the LocationNotificationToBeCreated interface.
 */
export declare function instanceOfLocationNotificationToBeCreated(value: object): boolean;
export declare function LocationNotificationToBeCreatedFromJSON(json: any): LocationNotificationToBeCreated;
export declare function LocationNotificationToBeCreatedFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationNotificationToBeCreated;
export declare function LocationNotificationToBeCreatedToJSON(value?: LocationNotificationToBeCreated | null): any;
