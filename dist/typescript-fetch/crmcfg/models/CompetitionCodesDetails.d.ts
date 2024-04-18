/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CompetitionCodeType } from './CompetitionCodeType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response object for fetching Competition Codes.
 * @export
 * @interface CompetitionCodesDetails
 */
export interface CompetitionCodesDetails {
    /**
     * List of Competition Codes.
     * @type {Array<CompetitionCodeType>}
     * @memberof CompetitionCodesDetails
     */
    competitionCodes?: Array<CompetitionCodeType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof CompetitionCodesDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CompetitionCodesDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the CompetitionCodesDetails interface.
 */
export declare function instanceOfCompetitionCodesDetails(value: object): boolean;
export declare function CompetitionCodesDetailsFromJSON(json: any): CompetitionCodesDetails;
export declare function CompetitionCodesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompetitionCodesDetails;
export declare function CompetitionCodesDetailsToJSON(value?: CompetitionCodesDetails | null): any;