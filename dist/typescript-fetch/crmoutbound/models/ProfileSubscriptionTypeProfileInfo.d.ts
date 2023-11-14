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
import type { PersonNameTypeType } from './PersonNameTypeType';
import type { ProfileTypeType } from './ProfileTypeType';
/**
 * This provides name information for a person.
 * @export
 * @interface ProfileSubscriptionTypeProfileInfo
 */
export interface ProfileSubscriptionTypeProfileInfo {
    /**
     * Family name, last name or Company Name.
     * @type {string}
     * @memberof ProfileSubscriptionTypeProfileInfo
     */
    name?: string;
    /**
     * Full display Name.
     * @type {string}
     * @memberof ProfileSubscriptionTypeProfileInfo
     */
    fullName?: string;
    /**
     * Salutation of honorific (e.g. Mr., Mrs., Ms., Miss, Dr.)
     * @type {string}
     * @memberof ProfileSubscriptionTypeProfileInfo
     */
    namePrefix?: string;
    /**
     * Given name, first name or names.
     * @type {string}
     * @memberof ProfileSubscriptionTypeProfileInfo
     */
    givenName?: string;
    /**
     * The middle name of the person name.
     * @type {string}
     * @memberof ProfileSubscriptionTypeProfileInfo
     */
    middleName?: string;
    /**
     * Hold various name suffixes and letters (e.g. Jr., Sr., III, Ret., Esq.)
     * @type {string}
     * @memberof ProfileSubscriptionTypeProfileInfo
     */
    nameSuffix?: string;
    /**
     * Degree or honors (e.g., Ph.D., M.D.)
     * @type {string}
     * @memberof ProfileSubscriptionTypeProfileInfo
     */
    nameTitle?: string;
    /**
     *
     * @type {PersonNameTypeType}
     * @memberof ProfileSubscriptionTypeProfileInfo
     */
    nameType?: PersonNameTypeType;
    /**
     *
     * @type {ProfileTypeType}
     * @memberof ProfileSubscriptionTypeProfileInfo
     */
    profileType?: ProfileTypeType;
}
/**
 * Check if a given object implements the ProfileSubscriptionTypeProfileInfo interface.
 */
export declare function instanceOfProfileSubscriptionTypeProfileInfo(value: object): boolean;
export declare function ProfileSubscriptionTypeProfileInfoFromJSON(json: any): ProfileSubscriptionTypeProfileInfo;
export declare function ProfileSubscriptionTypeProfileInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileSubscriptionTypeProfileInfo;
export declare function ProfileSubscriptionTypeProfileInfoToJSON(value?: ProfileSubscriptionTypeProfileInfo | null): any;