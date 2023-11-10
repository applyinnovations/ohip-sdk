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
import type { EcertificateLocationTypesType } from './EcertificateLocationTypesType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface PostEcertificateLocationTypesRequest
 */
export interface PostEcertificateLocationTypesRequest {
    /**
     *
     * @type {EcertificateLocationTypesType}
     * @memberof PostEcertificateLocationTypesRequest
     */
    ecertificateLocationTypes?: EcertificateLocationTypesType;
    /**
     *
     * @type {Links}
     * @memberof PostEcertificateLocationTypesRequest
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof PostEcertificateLocationTypesRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the PostEcertificateLocationTypesRequest interface.
 */
export declare function instanceOfPostEcertificateLocationTypesRequest(value: object): boolean;
export declare function PostEcertificateLocationTypesRequestFromJSON(json: any): PostEcertificateLocationTypesRequest;
export declare function PostEcertificateLocationTypesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostEcertificateLocationTypesRequest;
export declare function PostEcertificateLocationTypesRequestToJSON(value?: PostEcertificateLocationTypesRequest | null): any;
