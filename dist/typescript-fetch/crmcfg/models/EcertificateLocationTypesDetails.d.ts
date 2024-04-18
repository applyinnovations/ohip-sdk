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
import type { EcertificateLocationTypeType } from './EcertificateLocationTypeType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response object for fetching Ecertificate Location Types.
 * @export
 * @interface EcertificateLocationTypesDetails
 */
export interface EcertificateLocationTypesDetails {
    /**
     * List of Ecertificate Location Types.
     * @type {Array<EcertificateLocationTypeType>}
     * @memberof EcertificateLocationTypesDetails
     */
    ecertificateLocationTypes?: Array<EcertificateLocationTypeType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof EcertificateLocationTypesDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof EcertificateLocationTypesDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the EcertificateLocationTypesDetails interface.
 */
export declare function instanceOfEcertificateLocationTypesDetails(value: object): boolean;
export declare function EcertificateLocationTypesDetailsFromJSON(json: any): EcertificateLocationTypesDetails;
export declare function EcertificateLocationTypesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EcertificateLocationTypesDetails;
export declare function EcertificateLocationTypesDetailsToJSON(value?: EcertificateLocationTypesDetails | null): any;