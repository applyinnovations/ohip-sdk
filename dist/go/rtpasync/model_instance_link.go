/*
Opera Cloud Rate Plan Asynchronous Service API

APIs catering to the Rate Plan asynchronous related functionality in a hotel.  This includes adding/updating daily rates&apos; pricing schedules and best available rates by day or length of stay. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtpasync

import (
	"encoding/json"
)

// checks if the InstanceLink type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &InstanceLink{}

// InstanceLink Metadata describing link description objects that MAY appear in the JSON instance representation.
type InstanceLink struct {
	// URI [RFC3986] or URI Template [RFC6570]. If the value is set to URI Template, then the \"templated\" property must be set to true.
	Href *string `json:"href,omitempty"`
	// HTTP method for requesting the target of the link.
	Method *string `json:"method,omitempty"`
	// The operationId of the path you can call to follow this link.  This allows you to look up not only the path and method, but the description of that path and any parameters you need to supply.
	OperationId *string `json:"operationId,omitempty"`
	// Name of the link relation that, in addition to the type property, can be used to retrieve link details. For example, href or profile.
	Rel *string `json:"rel,omitempty"`
	// Link to the metadata of the resource, such as JSON-schema, that describes the resource expected when dereferencing the target resource..
	TargetSchema *string `json:"targetSchema,omitempty"`
	// Boolean flag that specifies that \"href\" property is a URI or URI Template. If the property is a URI template, set this value to true. By default, this value is false.
	Templated *bool `json:"templated,omitempty"`
	// Exact copy of the \"summary\" field on the linked operation.
	Title *string `json:"title,omitempty"`
}

// NewInstanceLink instantiates a new InstanceLink object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInstanceLink() *InstanceLink {
	this := InstanceLink{}
	var templated bool = false
	this.Templated = &templated
	return &this
}

// NewInstanceLinkWithDefaults instantiates a new InstanceLink object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInstanceLinkWithDefaults() *InstanceLink {
	this := InstanceLink{}
	var templated bool = false
	this.Templated = &templated
	return &this
}

// GetHref returns the Href field value if set, zero value otherwise.
func (o *InstanceLink) GetHref() string {
	if o == nil || IsNil(o.Href) {
		var ret string
		return ret
	}
	return *o.Href
}

// GetHrefOk returns a tuple with the Href field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InstanceLink) GetHrefOk() (*string, bool) {
	if o == nil || IsNil(o.Href) {
		return nil, false
	}
	return o.Href, true
}

// HasHref returns a boolean if a field has been set.
func (o *InstanceLink) HasHref() bool {
	if o != nil && !IsNil(o.Href) {
		return true
	}

	return false
}

// SetHref gets a reference to the given string and assigns it to the Href field.
func (o *InstanceLink) SetHref(v string) {
	o.Href = &v
}

// GetMethod returns the Method field value if set, zero value otherwise.
func (o *InstanceLink) GetMethod() string {
	if o == nil || IsNil(o.Method) {
		var ret string
		return ret
	}
	return *o.Method
}

// GetMethodOk returns a tuple with the Method field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InstanceLink) GetMethodOk() (*string, bool) {
	if o == nil || IsNil(o.Method) {
		return nil, false
	}
	return o.Method, true
}

// HasMethod returns a boolean if a field has been set.
func (o *InstanceLink) HasMethod() bool {
	if o != nil && !IsNil(o.Method) {
		return true
	}

	return false
}

// SetMethod gets a reference to the given string and assigns it to the Method field.
func (o *InstanceLink) SetMethod(v string) {
	o.Method = &v
}

// GetOperationId returns the OperationId field value if set, zero value otherwise.
func (o *InstanceLink) GetOperationId() string {
	if o == nil || IsNil(o.OperationId) {
		var ret string
		return ret
	}
	return *o.OperationId
}

// GetOperationIdOk returns a tuple with the OperationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InstanceLink) GetOperationIdOk() (*string, bool) {
	if o == nil || IsNil(o.OperationId) {
		return nil, false
	}
	return o.OperationId, true
}

// HasOperationId returns a boolean if a field has been set.
func (o *InstanceLink) HasOperationId() bool {
	if o != nil && !IsNil(o.OperationId) {
		return true
	}

	return false
}

// SetOperationId gets a reference to the given string and assigns it to the OperationId field.
func (o *InstanceLink) SetOperationId(v string) {
	o.OperationId = &v
}

// GetRel returns the Rel field value if set, zero value otherwise.
func (o *InstanceLink) GetRel() string {
	if o == nil || IsNil(o.Rel) {
		var ret string
		return ret
	}
	return *o.Rel
}

// GetRelOk returns a tuple with the Rel field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InstanceLink) GetRelOk() (*string, bool) {
	if o == nil || IsNil(o.Rel) {
		return nil, false
	}
	return o.Rel, true
}

// HasRel returns a boolean if a field has been set.
func (o *InstanceLink) HasRel() bool {
	if o != nil && !IsNil(o.Rel) {
		return true
	}

	return false
}

// SetRel gets a reference to the given string and assigns it to the Rel field.
func (o *InstanceLink) SetRel(v string) {
	o.Rel = &v
}

// GetTargetSchema returns the TargetSchema field value if set, zero value otherwise.
func (o *InstanceLink) GetTargetSchema() string {
	if o == nil || IsNil(o.TargetSchema) {
		var ret string
		return ret
	}
	return *o.TargetSchema
}

// GetTargetSchemaOk returns a tuple with the TargetSchema field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InstanceLink) GetTargetSchemaOk() (*string, bool) {
	if o == nil || IsNil(o.TargetSchema) {
		return nil, false
	}
	return o.TargetSchema, true
}

// HasTargetSchema returns a boolean if a field has been set.
func (o *InstanceLink) HasTargetSchema() bool {
	if o != nil && !IsNil(o.TargetSchema) {
		return true
	}

	return false
}

// SetTargetSchema gets a reference to the given string and assigns it to the TargetSchema field.
func (o *InstanceLink) SetTargetSchema(v string) {
	o.TargetSchema = &v
}

// GetTemplated returns the Templated field value if set, zero value otherwise.
func (o *InstanceLink) GetTemplated() bool {
	if o == nil || IsNil(o.Templated) {
		var ret bool
		return ret
	}
	return *o.Templated
}

// GetTemplatedOk returns a tuple with the Templated field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InstanceLink) GetTemplatedOk() (*bool, bool) {
	if o == nil || IsNil(o.Templated) {
		return nil, false
	}
	return o.Templated, true
}

// HasTemplated returns a boolean if a field has been set.
func (o *InstanceLink) HasTemplated() bool {
	if o != nil && !IsNil(o.Templated) {
		return true
	}

	return false
}

// SetTemplated gets a reference to the given bool and assigns it to the Templated field.
func (o *InstanceLink) SetTemplated(v bool) {
	o.Templated = &v
}

// GetTitle returns the Title field value if set, zero value otherwise.
func (o *InstanceLink) GetTitle() string {
	if o == nil || IsNil(o.Title) {
		var ret string
		return ret
	}
	return *o.Title
}

// GetTitleOk returns a tuple with the Title field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InstanceLink) GetTitleOk() (*string, bool) {
	if o == nil || IsNil(o.Title) {
		return nil, false
	}
	return o.Title, true
}

// HasTitle returns a boolean if a field has been set.
func (o *InstanceLink) HasTitle() bool {
	if o != nil && !IsNil(o.Title) {
		return true
	}

	return false
}

// SetTitle gets a reference to the given string and assigns it to the Title field.
func (o *InstanceLink) SetTitle(v string) {
	o.Title = &v
}

func (o InstanceLink) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o InstanceLink) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Href) {
		toSerialize["href"] = o.Href
	}
	if !IsNil(o.Method) {
		toSerialize["method"] = o.Method
	}
	if !IsNil(o.OperationId) {
		toSerialize["operationId"] = o.OperationId
	}
	if !IsNil(o.Rel) {
		toSerialize["rel"] = o.Rel
	}
	if !IsNil(o.TargetSchema) {
		toSerialize["targetSchema"] = o.TargetSchema
	}
	if !IsNil(o.Templated) {
		toSerialize["templated"] = o.Templated
	}
	if !IsNil(o.Title) {
		toSerialize["title"] = o.Title
	}
	return toSerialize, nil
}

type NullableInstanceLink struct {
	value *InstanceLink
	isSet bool
}

func (v NullableInstanceLink) Get() *InstanceLink {
	return v.value
}

func (v *NullableInstanceLink) Set(val *InstanceLink) {
	v.value = val
	v.isSet = true
}

func (v NullableInstanceLink) IsSet() bool {
	return v.isSet
}

func (v *NullableInstanceLink) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInstanceLink(val *InstanceLink) *NullableInstanceLink {
	return &NullableInstanceLink{value: val, isSet: true}
}

func (v NullableInstanceLink) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInstanceLink) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


