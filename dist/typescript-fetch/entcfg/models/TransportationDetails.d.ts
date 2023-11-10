/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Links } from './Links';
import type { TransportationListType } from './TransportationListType';
import type { WarningsType } from './WarningsType';
/**
 * Response object for information regarding transportation.
 * @export
 * @interface TransportationDetails
 */
export interface TransportationDetails {
    /**
     *
     * @type {Links}
     * @memberof TransportationDetails
     */
    links?: Links;
    /**
     *
     * @type {TransportationListType}
     * @memberof TransportationDetails
     */
    transportationList?: TransportationListType;
    /**
     *
     * @type {WarningsType}
     * @memberof TransportationDetails
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the TransportationDetails interface.
 */
export declare function instanceOfTransportationDetails(value: object): boolean;
export declare function TransportationDetailsFromJSON(json: any): TransportationDetails;
export declare function TransportationDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransportationDetails;
export declare function TransportationDetailsToJSON(value?: TransportationDetails | null): any;
