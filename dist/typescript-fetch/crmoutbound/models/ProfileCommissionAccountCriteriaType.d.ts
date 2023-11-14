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
import type { CodeDescriptionType } from './CodeDescriptionType';
import type { ProfileId } from './ProfileId';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Contains base info to determine profile commission bank account and code.
 * @export
 * @interface ProfileCommissionAccountCriteriaType
 */
export interface ProfileCommissionAccountCriteriaType {
    /**
     * Hotel code from which the profile bank account and code belongs to
     * @type {string}
     * @memberof ProfileCommissionAccountCriteriaType
     */
    hotelId?: string;
    /**
     *
     * @type {ProfileId}
     * @memberof ProfileCommissionAccountCriteriaType
     */
    profileId?: ProfileId;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ProfileCommissionAccountCriteriaType
     */
    bankAccountId?: UniqueIDType;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof ProfileCommissionAccountCriteriaType
     */
    commissionCode?: CodeDescriptionType;
    /**
     * Used in CRUD operations. When set to true, proceed validating pending commissions
     * @type {boolean}
     * @memberof ProfileCommissionAccountCriteriaType
     */
    validatePending?: boolean;
}
/**
 * Check if a given object implements the ProfileCommissionAccountCriteriaType interface.
 */
export declare function instanceOfProfileCommissionAccountCriteriaType(value: object): boolean;
export declare function ProfileCommissionAccountCriteriaTypeFromJSON(json: any): ProfileCommissionAccountCriteriaType;
export declare function ProfileCommissionAccountCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileCommissionAccountCriteriaType;
export declare function ProfileCommissionAccountCriteriaTypeToJSON(value?: ProfileCommissionAccountCriteriaType | null): any;