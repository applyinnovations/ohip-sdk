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
import type { IdentificationTypeType } from './IdentificationTypeType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response object for fetching Identification Types.
 * @export
 * @interface IdentificationTypesDetails
 */
export interface IdentificationTypesDetails {
    /**
     * List of Identification Types.
     * @type {Array<IdentificationTypeType>}
     * @memberof IdentificationTypesDetails
     */
    identificationTypes?: Array<IdentificationTypeType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof IdentificationTypesDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof IdentificationTypesDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the IdentificationTypesDetails interface.
 */
export declare function instanceOfIdentificationTypesDetails(value: object): boolean;
export declare function IdentificationTypesDetailsFromJSON(json: any): IdentificationTypesDetails;
export declare function IdentificationTypesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentificationTypesDetails;
export declare function IdentificationTypesDetailsToJSON(value?: IdentificationTypesDetails | null): any;