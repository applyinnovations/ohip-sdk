/*
OPERA Cloud CRM Configuration API

APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmcfg

import (
	"encoding/json"
)

// checks if the ProfileLinkType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ProfileLinkType{}

// ProfileLinkType ProfileLinksType for create, change and delete
type ProfileLinkType struct {
	// Relationship is default relationship or not
	DefaultProfileLink *bool `json:"defaultProfileLink,omitempty"`
	// From code to process
	FromCode *string `json:"fromCode,omitempty"`
	// The description about from relation
	FromDescription *string `json:"fromDescription,omitempty"`
	// From type to process
	FromType *string `json:"fromType,omitempty"`
	// Relationship is global relationship or not
	GlobalProfileLink *bool `json:"globalProfileLink,omitempty"`
	// Determines whether this relationship is hierarchichal or not.
	HasHierarchy *bool `json:"hasHierarchy,omitempty"`
	InheritRates *ProfileLinkInheritRates `json:"inheritRates,omitempty"`
	// Determines whether this code is protected from deleting. This is a read-only element and is only populated during the fetch operation.
	Protected *bool `json:"protected,omitempty"`
	// To code to process
	ToCode *string `json:"toCode,omitempty"`
	// The description about to relation
	ToDescription *string `json:"toDescription,omitempty"`
	// To type to process
	ToType *string `json:"toType,omitempty"`
}

// NewProfileLinkType instantiates a new ProfileLinkType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewProfileLinkType() *ProfileLinkType {
	this := ProfileLinkType{}
	return &this
}

// NewProfileLinkTypeWithDefaults instantiates a new ProfileLinkType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewProfileLinkTypeWithDefaults() *ProfileLinkType {
	this := ProfileLinkType{}
	return &this
}

// GetDefaultProfileLink returns the DefaultProfileLink field value if set, zero value otherwise.
func (o *ProfileLinkType) GetDefaultProfileLink() bool {
	if o == nil || IsNil(o.DefaultProfileLink) {
		var ret bool
		return ret
	}
	return *o.DefaultProfileLink
}

// GetDefaultProfileLinkOk returns a tuple with the DefaultProfileLink field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileLinkType) GetDefaultProfileLinkOk() (*bool, bool) {
	if o == nil || IsNil(o.DefaultProfileLink) {
		return nil, false
	}
	return o.DefaultProfileLink, true
}

// HasDefaultProfileLink returns a boolean if a field has been set.
func (o *ProfileLinkType) HasDefaultProfileLink() bool {
	if o != nil && !IsNil(o.DefaultProfileLink) {
		return true
	}

	return false
}

// SetDefaultProfileLink gets a reference to the given bool and assigns it to the DefaultProfileLink field.
func (o *ProfileLinkType) SetDefaultProfileLink(v bool) {
	o.DefaultProfileLink = &v
}

// GetFromCode returns the FromCode field value if set, zero value otherwise.
func (o *ProfileLinkType) GetFromCode() string {
	if o == nil || IsNil(o.FromCode) {
		var ret string
		return ret
	}
	return *o.FromCode
}

// GetFromCodeOk returns a tuple with the FromCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileLinkType) GetFromCodeOk() (*string, bool) {
	if o == nil || IsNil(o.FromCode) {
		return nil, false
	}
	return o.FromCode, true
}

// HasFromCode returns a boolean if a field has been set.
func (o *ProfileLinkType) HasFromCode() bool {
	if o != nil && !IsNil(o.FromCode) {
		return true
	}

	return false
}

// SetFromCode gets a reference to the given string and assigns it to the FromCode field.
func (o *ProfileLinkType) SetFromCode(v string) {
	o.FromCode = &v
}

// GetFromDescription returns the FromDescription field value if set, zero value otherwise.
func (o *ProfileLinkType) GetFromDescription() string {
	if o == nil || IsNil(o.FromDescription) {
		var ret string
		return ret
	}
	return *o.FromDescription
}

// GetFromDescriptionOk returns a tuple with the FromDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileLinkType) GetFromDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.FromDescription) {
		return nil, false
	}
	return o.FromDescription, true
}

// HasFromDescription returns a boolean if a field has been set.
func (o *ProfileLinkType) HasFromDescription() bool {
	if o != nil && !IsNil(o.FromDescription) {
		return true
	}

	return false
}

// SetFromDescription gets a reference to the given string and assigns it to the FromDescription field.
func (o *ProfileLinkType) SetFromDescription(v string) {
	o.FromDescription = &v
}

// GetFromType returns the FromType field value if set, zero value otherwise.
func (o *ProfileLinkType) GetFromType() string {
	if o == nil || IsNil(o.FromType) {
		var ret string
		return ret
	}
	return *o.FromType
}

// GetFromTypeOk returns a tuple with the FromType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileLinkType) GetFromTypeOk() (*string, bool) {
	if o == nil || IsNil(o.FromType) {
		return nil, false
	}
	return o.FromType, true
}

// HasFromType returns a boolean if a field has been set.
func (o *ProfileLinkType) HasFromType() bool {
	if o != nil && !IsNil(o.FromType) {
		return true
	}

	return false
}

// SetFromType gets a reference to the given string and assigns it to the FromType field.
func (o *ProfileLinkType) SetFromType(v string) {
	o.FromType = &v
}

// GetGlobalProfileLink returns the GlobalProfileLink field value if set, zero value otherwise.
func (o *ProfileLinkType) GetGlobalProfileLink() bool {
	if o == nil || IsNil(o.GlobalProfileLink) {
		var ret bool
		return ret
	}
	return *o.GlobalProfileLink
}

// GetGlobalProfileLinkOk returns a tuple with the GlobalProfileLink field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileLinkType) GetGlobalProfileLinkOk() (*bool, bool) {
	if o == nil || IsNil(o.GlobalProfileLink) {
		return nil, false
	}
	return o.GlobalProfileLink, true
}

// HasGlobalProfileLink returns a boolean if a field has been set.
func (o *ProfileLinkType) HasGlobalProfileLink() bool {
	if o != nil && !IsNil(o.GlobalProfileLink) {
		return true
	}

	return false
}

// SetGlobalProfileLink gets a reference to the given bool and assigns it to the GlobalProfileLink field.
func (o *ProfileLinkType) SetGlobalProfileLink(v bool) {
	o.GlobalProfileLink = &v
}

// GetHasHierarchy returns the HasHierarchy field value if set, zero value otherwise.
func (o *ProfileLinkType) GetHasHierarchy() bool {
	if o == nil || IsNil(o.HasHierarchy) {
		var ret bool
		return ret
	}
	return *o.HasHierarchy
}

// GetHasHierarchyOk returns a tuple with the HasHierarchy field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileLinkType) GetHasHierarchyOk() (*bool, bool) {
	if o == nil || IsNil(o.HasHierarchy) {
		return nil, false
	}
	return o.HasHierarchy, true
}

// HasHasHierarchy returns a boolean if a field has been set.
func (o *ProfileLinkType) HasHasHierarchy() bool {
	if o != nil && !IsNil(o.HasHierarchy) {
		return true
	}

	return false
}

// SetHasHierarchy gets a reference to the given bool and assigns it to the HasHierarchy field.
func (o *ProfileLinkType) SetHasHierarchy(v bool) {
	o.HasHierarchy = &v
}

// GetInheritRates returns the InheritRates field value if set, zero value otherwise.
func (o *ProfileLinkType) GetInheritRates() ProfileLinkInheritRates {
	if o == nil || IsNil(o.InheritRates) {
		var ret ProfileLinkInheritRates
		return ret
	}
	return *o.InheritRates
}

// GetInheritRatesOk returns a tuple with the InheritRates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileLinkType) GetInheritRatesOk() (*ProfileLinkInheritRates, bool) {
	if o == nil || IsNil(o.InheritRates) {
		return nil, false
	}
	return o.InheritRates, true
}

// HasInheritRates returns a boolean if a field has been set.
func (o *ProfileLinkType) HasInheritRates() bool {
	if o != nil && !IsNil(o.InheritRates) {
		return true
	}

	return false
}

// SetInheritRates gets a reference to the given ProfileLinkInheritRates and assigns it to the InheritRates field.
func (o *ProfileLinkType) SetInheritRates(v ProfileLinkInheritRates) {
	o.InheritRates = &v
}

// GetProtected returns the Protected field value if set, zero value otherwise.
func (o *ProfileLinkType) GetProtected() bool {
	if o == nil || IsNil(o.Protected) {
		var ret bool
		return ret
	}
	return *o.Protected
}

// GetProtectedOk returns a tuple with the Protected field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileLinkType) GetProtectedOk() (*bool, bool) {
	if o == nil || IsNil(o.Protected) {
		return nil, false
	}
	return o.Protected, true
}

// HasProtected returns a boolean if a field has been set.
func (o *ProfileLinkType) HasProtected() bool {
	if o != nil && !IsNil(o.Protected) {
		return true
	}

	return false
}

// SetProtected gets a reference to the given bool and assigns it to the Protected field.
func (o *ProfileLinkType) SetProtected(v bool) {
	o.Protected = &v
}

// GetToCode returns the ToCode field value if set, zero value otherwise.
func (o *ProfileLinkType) GetToCode() string {
	if o == nil || IsNil(o.ToCode) {
		var ret string
		return ret
	}
	return *o.ToCode
}

// GetToCodeOk returns a tuple with the ToCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileLinkType) GetToCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ToCode) {
		return nil, false
	}
	return o.ToCode, true
}

// HasToCode returns a boolean if a field has been set.
func (o *ProfileLinkType) HasToCode() bool {
	if o != nil && !IsNil(o.ToCode) {
		return true
	}

	return false
}

// SetToCode gets a reference to the given string and assigns it to the ToCode field.
func (o *ProfileLinkType) SetToCode(v string) {
	o.ToCode = &v
}

// GetToDescription returns the ToDescription field value if set, zero value otherwise.
func (o *ProfileLinkType) GetToDescription() string {
	if o == nil || IsNil(o.ToDescription) {
		var ret string
		return ret
	}
	return *o.ToDescription
}

// GetToDescriptionOk returns a tuple with the ToDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileLinkType) GetToDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.ToDescription) {
		return nil, false
	}
	return o.ToDescription, true
}

// HasToDescription returns a boolean if a field has been set.
func (o *ProfileLinkType) HasToDescription() bool {
	if o != nil && !IsNil(o.ToDescription) {
		return true
	}

	return false
}

// SetToDescription gets a reference to the given string and assigns it to the ToDescription field.
func (o *ProfileLinkType) SetToDescription(v string) {
	o.ToDescription = &v
}

// GetToType returns the ToType field value if set, zero value otherwise.
func (o *ProfileLinkType) GetToType() string {
	if o == nil || IsNil(o.ToType) {
		var ret string
		return ret
	}
	return *o.ToType
}

// GetToTypeOk returns a tuple with the ToType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileLinkType) GetToTypeOk() (*string, bool) {
	if o == nil || IsNil(o.ToType) {
		return nil, false
	}
	return o.ToType, true
}

// HasToType returns a boolean if a field has been set.
func (o *ProfileLinkType) HasToType() bool {
	if o != nil && !IsNil(o.ToType) {
		return true
	}

	return false
}

// SetToType gets a reference to the given string and assigns it to the ToType field.
func (o *ProfileLinkType) SetToType(v string) {
	o.ToType = &v
}

func (o ProfileLinkType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ProfileLinkType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.DefaultProfileLink) {
		toSerialize["defaultProfileLink"] = o.DefaultProfileLink
	}
	if !IsNil(o.FromCode) {
		toSerialize["fromCode"] = o.FromCode
	}
	if !IsNil(o.FromDescription) {
		toSerialize["fromDescription"] = o.FromDescription
	}
	if !IsNil(o.FromType) {
		toSerialize["fromType"] = o.FromType
	}
	if !IsNil(o.GlobalProfileLink) {
		toSerialize["globalProfileLink"] = o.GlobalProfileLink
	}
	if !IsNil(o.HasHierarchy) {
		toSerialize["hasHierarchy"] = o.HasHierarchy
	}
	if !IsNil(o.InheritRates) {
		toSerialize["inheritRates"] = o.InheritRates
	}
	if !IsNil(o.Protected) {
		toSerialize["protected"] = o.Protected
	}
	if !IsNil(o.ToCode) {
		toSerialize["toCode"] = o.ToCode
	}
	if !IsNil(o.ToDescription) {
		toSerialize["toDescription"] = o.ToDescription
	}
	if !IsNil(o.ToType) {
		toSerialize["toType"] = o.ToType
	}
	return toSerialize, nil
}

type NullableProfileLinkType struct {
	value *ProfileLinkType
	isSet bool
}

func (v NullableProfileLinkType) Get() *ProfileLinkType {
	return v.value
}

func (v *NullableProfileLinkType) Set(val *ProfileLinkType) {
	v.value = val
	v.isSet = true
}

func (v NullableProfileLinkType) IsSet() bool {
	return v.isSet
}

func (v *NullableProfileLinkType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProfileLinkType(val *ProfileLinkType) *NullableProfileLinkType {
	return &NullableProfileLinkType{value: val, isSet: true}
}

func (v NullableProfileLinkType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProfileLinkType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


