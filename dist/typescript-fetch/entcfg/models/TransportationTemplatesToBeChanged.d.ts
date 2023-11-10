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
import type { TransportationTemplatesType } from './TransportationTemplatesType';
import type { WarningsType } from './WarningsType';
/**
 * Request object for modifying transportation templates.
 * @export
 * @interface TransportationTemplatesToBeChanged
 */
export interface TransportationTemplatesToBeChanged {
    /**
     *
     * @type {Links}
     * @memberof TransportationTemplatesToBeChanged
     */
    links?: Links;
    /**
     *
     * @type {TransportationTemplatesType}
     * @memberof TransportationTemplatesToBeChanged
     */
    transportationTemplates?: TransportationTemplatesType;
    /**
     *
     * @type {WarningsType}
     * @memberof TransportationTemplatesToBeChanged
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the TransportationTemplatesToBeChanged interface.
 */
export declare function instanceOfTransportationTemplatesToBeChanged(value: object): boolean;
export declare function TransportationTemplatesToBeChangedFromJSON(json: any): TransportationTemplatesToBeChanged;
export declare function TransportationTemplatesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransportationTemplatesToBeChanged;
export declare function TransportationTemplatesToBeChangedToJSON(value?: TransportationTemplatesToBeChanged | null): any;
