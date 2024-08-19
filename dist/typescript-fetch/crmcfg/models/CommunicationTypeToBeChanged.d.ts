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
import type { CommunicationTypeType } from './CommunicationTypeType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Request object for changing an existing Communication Type.
 * @export
 * @interface CommunicationTypeToBeChanged
 */
export interface CommunicationTypeToBeChanged {
    /**
     *
     * @type {CommunicationTypeType}
     * @memberof CommunicationTypeToBeChanged
     */
    communicationType?: CommunicationTypeType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof CommunicationTypeToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CommunicationTypeToBeChanged
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the CommunicationTypeToBeChanged interface.
 */
export declare function instanceOfCommunicationTypeToBeChanged(value: object): boolean;
export declare function CommunicationTypeToBeChangedFromJSON(json: any): CommunicationTypeToBeChanged;
export declare function CommunicationTypeToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommunicationTypeToBeChanged;
export declare function CommunicationTypeToBeChangedToJSON(value?: CommunicationTypeToBeChanged | null): any;
