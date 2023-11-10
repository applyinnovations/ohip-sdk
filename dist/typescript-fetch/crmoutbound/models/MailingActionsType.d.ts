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
     * Total number of rows queried
     * @type {number}
     * @memberof MailingActionsType
     */
    totalRows?: number;
}
/**
 * Check if a given object implements the MailingActionsType interface.
 */
export declare function instanceOfMailingActionsType(value: object): boolean;
export declare function MailingActionsTypeFromJSON(json: any): MailingActionsType;
export declare function MailingActionsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MailingActionsType;
export declare function MailingActionsTypeToJSON(value?: MailingActionsType | null): any;
