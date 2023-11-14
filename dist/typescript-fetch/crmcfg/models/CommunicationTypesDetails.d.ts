/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CommunicationTypesType } from './CommunicationTypesType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response object for fetching Communication Types.
 * @export
 * @interface CommunicationTypesDetails
 */
export interface CommunicationTypesDetails {
    /**
     *
     * @type {CommunicationTypesType}
     * @memberof CommunicationTypesDetails
     */
    communicationTypes?: CommunicationTypesType;
    /**
     *
     * @type {Links}
     * @memberof CommunicationTypesDetails
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof CommunicationTypesDetails
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the CommunicationTypesDetails interface.
 */
export declare function instanceOfCommunicationTypesDetails(value: object): boolean;
export declare function CommunicationTypesDetailsFromJSON(json: any): CommunicationTypesDetails;
export declare function CommunicationTypesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommunicationTypesDetails;
export declare function CommunicationTypesDetailsToJSON(value?: CommunicationTypesDetails | null): any;