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
 * Request object for creating Identification Types.
 * @export
 * @interface IdentificationTypesCriteria
 */
export interface IdentificationTypesCriteria {
    /**
     * List of Identification Types.
     * @type {Array<IdentificationTypeType>}
     * @memberof IdentificationTypesCriteria
     */
    identificationTypes?: Array<IdentificationTypeType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof IdentificationTypesCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof IdentificationTypesCriteria
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the IdentificationTypesCriteria interface.
 */
export declare function instanceOfIdentificationTypesCriteria(value: object): boolean;
export declare function IdentificationTypesCriteriaFromJSON(json: any): IdentificationTypesCriteria;
export declare function IdentificationTypesCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentificationTypesCriteria;
export declare function IdentificationTypesCriteriaToJSON(value?: IdentificationTypesCriteria | null): any;
