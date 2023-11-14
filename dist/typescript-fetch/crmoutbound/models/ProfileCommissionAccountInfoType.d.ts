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
import type { BankAccountType } from './BankAccountType';
import type { CodeDescriptionType } from './CodeDescriptionType';
import type { ProfileId } from './ProfileId';
/**
 * Profile commission info which contains bank account and commission code details
 * @export
 * @interface ProfileCommissionAccountInfoType
 */
export interface ProfileCommissionAccountInfoType {
    /**
     *
     * @type {ProfileId}
     * @memberof ProfileCommissionAccountInfoType
     */
    profileId?: ProfileId;
    /**
     *
     * @type {BankAccountType}
     * @memberof ProfileCommissionAccountInfoType
     */
    bankAccount?: BankAccountType;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof ProfileCommissionAccountInfoType
     */
    commissionCode?: CodeDescriptionType;
}
/**
 * Check if a given object implements the ProfileCommissionAccountInfoType interface.
 */
export declare function instanceOfProfileCommissionAccountInfoType(value: object): boolean;
export declare function ProfileCommissionAccountInfoTypeFromJSON(json: any): ProfileCommissionAccountInfoType;
export declare function ProfileCommissionAccountInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileCommissionAccountInfoType;
export declare function ProfileCommissionAccountInfoTypeToJSON(value?: ProfileCommissionAccountInfoType | null): any;