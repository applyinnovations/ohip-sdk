/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { DateRangeType } from './DateRangeType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Authorizer Information
 * @export
 * @interface CompAccountingType
 */
export interface CompAccountingType {
    /**
     * AR Account Number of the authorizer
     * @type {string}
     * @memberof CompAccountingType
     */
    aRNumber?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof CompAccountingType
     */
    authorizerId?: UniqueIDType;
    /**
     * Full name of the authorizer.
     * @type {string}
     * @memberof CompAccountingType
     */
    authorizerName?: string;
    /**
     * Rate code of the authorizer.
     * @type {string}
     * @memberof CompAccountingType
     */
    authorizerRateCode?: string;
    /**
     * Application user name of the authorizer
     * @type {string}
     * @memberof CompAccountingType
     */
    authorizerUserName?: string;
    /**
     * The Comp Type for this Account. Used when using the Comp types functionality
     * @type {string}
     * @memberof CompAccountingType
     */
    compTypeCode?: string;
    /**
     * The coupon or voucher number used by the external gaming system to track postings made to this routing.
     * @type {string}
     * @memberof CompAccountingType
     */
    compVoucherNo?: string;
    /**
     *
     * @type {DateRangeType}
     * @memberof CompAccountingType
     */
    dateRange?: DateRangeType;
    /**
     * Indicates whether user has the choice to have reservation inherit rate code from the authorizer.
     * @type {boolean}
     * @memberof CompAccountingType
     */
    inheritAuthorizerRateCode?: boolean;
    /**
     * Membership number
     * @type {string}
     * @memberof CompAccountingType
     */
    membershipId?: string;
    /**
     * Unique Id of membership
     * @type {number}
     * @memberof CompAccountingType
     */
    membershipIdNo?: number;
    /**
     * Name displayed on the membership card
     * @type {string}
     * @memberof CompAccountingType
     */
    membershipNameOnCard?: string;
}
/**
 * Check if a given object implements the CompAccountingType interface.
 */
export declare function instanceOfCompAccountingType(value: object): boolean;
export declare function CompAccountingTypeFromJSON(json: any): CompAccountingType;
export declare function CompAccountingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompAccountingType;
export declare function CompAccountingTypeToJSON(value?: CompAccountingType | null): any;
