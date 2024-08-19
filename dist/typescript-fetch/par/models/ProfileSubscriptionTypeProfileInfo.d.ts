/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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
     * Full display Name.
     * @type {string}
     * @memberof ProfileSubscriptionTypeProfileInfo
     */
    fullName?: string;
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
     * Family name, last name or Company Name.
     * @type {string}
     * @memberof ProfileSubscriptionTypeProfileInfo
     */
    name?: string;
    /**
     * Salutation of honorific (e.g. Mr., Mrs., Ms., Miss, Dr.)
     * @type {string}
     * @memberof ProfileSubscriptionTypeProfileInfo
     */
    namePrefix?: string;
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
