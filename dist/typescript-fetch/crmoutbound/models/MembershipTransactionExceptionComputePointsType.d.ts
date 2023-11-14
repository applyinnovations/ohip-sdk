/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Options to compute award and tier points for membership transaction exception.
 * @export
 * @interface MembershipTransactionExceptionComputePointsType
 */
export interface MembershipTransactionExceptionComputePointsType {
    /**
     * Indicates if membership transaction exception should be created for base award points.
     * @type {boolean}
     * @memberof MembershipTransactionExceptionComputePointsType
     */
    awardBasePoints?: boolean;
    /**
     * Indicates if membership transaction exception should be created for bonus award points.
     * @type {boolean}
     * @memberof MembershipTransactionExceptionComputePointsType
     */
    awardBonusPoints?: boolean;
    /**
     * Indicates if membership transaction exception should be created for base tier points for the stay.
     * @type {boolean}
     * @memberof MembershipTransactionExceptionComputePointsType
     */
    tierPointsBaseStay?: boolean;
    /**
     * Indicates if membership transaction exception should be created for tier bonus points for the stay.
     * @type {boolean}
     * @memberof MembershipTransactionExceptionComputePointsType
     */
    tierPointsBonusStay?: boolean;
    /**
     * Indicates if membership transaction exception should be created for base tier points for the night.
     * @type {boolean}
     * @memberof MembershipTransactionExceptionComputePointsType
     */
    tierPointsBaseNights?: boolean;
    /**
     * Indicates if membership transaction exception should be created for tier bonus points for the night.
     * @type {boolean}
     * @memberof MembershipTransactionExceptionComputePointsType
     */
    tierPointsBonusNights?: boolean;
    /**
     * Indicates if membership transaction exception should be created for base tier points for the revenue.
     * @type {boolean}
     * @memberof MembershipTransactionExceptionComputePointsType
     */
    tierPointsBaseRevenue?: boolean;
    /**
     * Indicates if membership transaction exception should be created for tier bonus points for the revenue.
     * @type {boolean}
     * @memberof MembershipTransactionExceptionComputePointsType
     */
    tierPointsBonusRevenue?: boolean;
}
/**
 * Check if a given object implements the MembershipTransactionExceptionComputePointsType interface.
 */
export declare function instanceOfMembershipTransactionExceptionComputePointsType(value: object): boolean;
export declare function MembershipTransactionExceptionComputePointsTypeFromJSON(json: any): MembershipTransactionExceptionComputePointsType;
export declare function MembershipTransactionExceptionComputePointsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipTransactionExceptionComputePointsType;
export declare function MembershipTransactionExceptionComputePointsTypeToJSON(value?: MembershipTransactionExceptionComputePointsType | null): any;