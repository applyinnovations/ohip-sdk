/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { URLInfoType } from './URLInfoType';
/**
 * List of Information on a URL for the customer.
 * @export
 * @interface ProfileTypeURLs
 */
export interface ProfileTypeURLs {
    /**
     * Collection of Detailed information on web url/address for the customer.
     * @type {Array<URLInfoType>}
     * @memberof ProfileTypeURLs
     */
    uRLInfo?: Array<URLInfoType>;
}
/**
 * Check if a given object implements the ProfileTypeURLs interface.
 */
export declare function instanceOfProfileTypeURLs(value: object): boolean;
export declare function ProfileTypeURLsFromJSON(json: any): ProfileTypeURLs;
export declare function ProfileTypeURLsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileTypeURLs;
export declare function ProfileTypeURLsToJSON(value?: ProfileTypeURLs | null): any;
