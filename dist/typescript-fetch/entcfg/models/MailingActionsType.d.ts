/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CodeDescriptionType } from './CodeDescriptionType';
/**
 * Defines mailing action list for the profile.
 * @export
 * @interface MailingActionsType
 */
export interface MailingActionsType {
    /**
     * Defines mailing action code and description.
     * @type {Array<CodeDescriptionType>}
     * @memberof MailingActionsType
     */
    mailingAction?: Array<CodeDescriptionType>;
    /**
     * When true indicates that profile has subscribed to the mailing list.
     * @type {boolean}
     * @memberof MailingActionsType
     */
    active?: boolean;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof MailingActionsType
     */
    hasMore?: boolean;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof MailingActionsType
     */
    totalResults?: number;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof MailingActionsType
     */
    count?: number;
}
/**
 * Check if a given object implements the MailingActionsType interface.
 */
export declare function instanceOfMailingActionsType(value: object): boolean;
export declare function MailingActionsTypeFromJSON(json: any): MailingActionsType;
export declare function MailingActionsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MailingActionsType;
export declare function MailingActionsTypeToJSON(value?: MailingActionsType | null): any;
