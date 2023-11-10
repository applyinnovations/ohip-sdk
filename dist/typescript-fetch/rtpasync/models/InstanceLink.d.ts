/**
 * Opera Cloud Rate Plan Asynchronous Service API
 * APIs catering to the Rate Plan asynchronous related functionality in a hotel.  This includes adding/updating daily rates&apos; pricing schedules and best available rates by day or length of stay. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Metadata describing link description objects that MAY appear in the JSON instance representation.
 * @export
 * @interface InstanceLink
 */
export interface InstanceLink {
    /**
     * URI [RFC3986] or URI Template [RFC6570]. If the value is set to URI Template, then the "templated" property must be set to true.
     * @type {string}
     * @memberof InstanceLink
     */
    href?: string;
    /**
     * HTTP method for requesting the target of the link.
     * @type {string}
     * @memberof InstanceLink
     */
    method?: InstanceLinkMethodEnum;
    /**
     * The operationId of the path you can call to follow this link.  This allows you to look up not only the path and method, but the description of that path and any parameters you need to supply.
     * @type {string}
     * @memberof InstanceLink
     */
    operationId?: string;
    /**
     * Name of the link relation that, in addition to the type property, can be used to retrieve link details. For example, href or profile.
     * @type {string}
     * @memberof InstanceLink
     */
    rel?: string;
    /**
     * Link to the metadata of the resource, such as JSON-schema, that describes the resource expected when dereferencing the target resource..
     * @type {string}
     * @memberof InstanceLink
     */
    targetSchema?: string;
    /**
     * Boolean flag that specifies that "href" property is a URI or URI Template. If the property is a URI template, set this value to true. By default, this value is false.
     * @type {boolean}
     * @memberof InstanceLink
     */
    templated?: boolean;
    /**
     * Exact copy of the "summary" field on the linked operation.
     * @type {string}
     * @memberof InstanceLink
     */
    title?: string;
}
/**
 * @export
 */
export declare const InstanceLinkMethodEnum: {
    readonly Get: "GET";
    readonly Post: "POST";
    readonly Put: "PUT";
    readonly Delete: "DELETE";
    readonly Patch: "PATCH";
    readonly Options: "OPTIONS";
    readonly Head: "HEAD";
};
export type InstanceLinkMethodEnum = typeof InstanceLinkMethodEnum[keyof typeof InstanceLinkMethodEnum];
/**
 * Check if a given object implements the InstanceLink interface.
 */
export declare function instanceOfInstanceLink(value: object): boolean;
export declare function InstanceLinkFromJSON(json: any): InstanceLink;
export declare function InstanceLinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): InstanceLink;
export declare function InstanceLinkToJSON(value?: InstanceLink | null): any;
