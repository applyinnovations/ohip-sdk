/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CustomNumberTemplateConfigurationType } from './CustomNumberTemplateConfigurationType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response object for fetching template custom number configurations.
 * @export
 * @interface TemplateCustomNumberConfigDetails
 */
export interface TemplateCustomNumberConfigDetails {
    /**
     * Details about template custom number configuration.
     * @type {Array<CustomNumberTemplateConfigurationType>}
     * @memberof TemplateCustomNumberConfigDetails
     */
    customNumberConfigurationList?: Array<CustomNumberTemplateConfigurationType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof TemplateCustomNumberConfigDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TemplateCustomNumberConfigDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the TemplateCustomNumberConfigDetails interface.
 */
export declare function instanceOfTemplateCustomNumberConfigDetails(value: object): boolean;
export declare function TemplateCustomNumberConfigDetailsFromJSON(json: any): TemplateCustomNumberConfigDetails;
export declare function TemplateCustomNumberConfigDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateCustomNumberConfigDetails;
export declare function TemplateCustomNumberConfigDetailsToJSON(value?: TemplateCustomNumberConfigDetails | null): any;
