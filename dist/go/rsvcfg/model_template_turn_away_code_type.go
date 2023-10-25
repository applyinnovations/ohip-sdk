/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the TemplateTurnAwayCodeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TemplateTurnAwayCodeType{}

// TemplateTurnAwayCodeType Base details common between hotel and template TurnAway codes.
type TemplateTurnAwayCodeType struct {
	// Determines whether this TurnAway code can be deleted.
	CanDelete *bool `json:"canDelete,omitempty"`
	// TurnAway code
	Code *string `json:"code,omitempty"`
	Description *TranslationTextType50 `json:"description,omitempty"`
	// Sequence of TurnAway code.
	DisplaySequence *float32 `json:"displaySequence,omitempty"`
	// Inactive flag for a TurnAway code.
	Inactive *bool `json:"inactive,omitempty"`
	TurnAwayType *TurnAwayTypeType `json:"turnAwayType,omitempty"`
}

// NewTemplateTurnAwayCodeType instantiates a new TemplateTurnAwayCodeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTemplateTurnAwayCodeType() *TemplateTurnAwayCodeType {
	this := TemplateTurnAwayCodeType{}
	return &this
}

// NewTemplateTurnAwayCodeTypeWithDefaults instantiates a new TemplateTurnAwayCodeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTemplateTurnAwayCodeTypeWithDefaults() *TemplateTurnAwayCodeType {
	this := TemplateTurnAwayCodeType{}
	return &this
}

// GetCanDelete returns the CanDelete field value if set, zero value otherwise.
func (o *TemplateTurnAwayCodeType) GetCanDelete() bool {
	if o == nil || IsNil(o.CanDelete) {
		var ret bool
		return ret
	}
	return *o.CanDelete
}

// GetCanDeleteOk returns a tuple with the CanDelete field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateTurnAwayCodeType) GetCanDeleteOk() (*bool, bool) {
	if o == nil || IsNil(o.CanDelete) {
		return nil, false
	}
	return o.CanDelete, true
}

// HasCanDelete returns a boolean if a field has been set.
func (o *TemplateTurnAwayCodeType) HasCanDelete() bool {
	if o != nil && !IsNil(o.CanDelete) {
		return true
	}

	return false
}

// SetCanDelete gets a reference to the given bool and assigns it to the CanDelete field.
func (o *TemplateTurnAwayCodeType) SetCanDelete(v bool) {
	o.CanDelete = &v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *TemplateTurnAwayCodeType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateTurnAwayCodeType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *TemplateTurnAwayCodeType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *TemplateTurnAwayCodeType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *TemplateTurnAwayCodeType) GetDescription() TranslationTextType50 {
	if o == nil || IsNil(o.Description) {
		var ret TranslationTextType50
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateTurnAwayCodeType) GetDescriptionOk() (*TranslationTextType50, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *TemplateTurnAwayCodeType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given TranslationTextType50 and assigns it to the Description field.
func (o *TemplateTurnAwayCodeType) SetDescription(v TranslationTextType50) {
	o.Description = &v
}

// GetDisplaySequence returns the DisplaySequence field value if set, zero value otherwise.
func (o *TemplateTurnAwayCodeType) GetDisplaySequence() float32 {
	if o == nil || IsNil(o.DisplaySequence) {
		var ret float32
		return ret
	}
	return *o.DisplaySequence
}

// GetDisplaySequenceOk returns a tuple with the DisplaySequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateTurnAwayCodeType) GetDisplaySequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.DisplaySequence) {
		return nil, false
	}
	return o.DisplaySequence, true
}

// HasDisplaySequence returns a boolean if a field has been set.
func (o *TemplateTurnAwayCodeType) HasDisplaySequence() bool {
	if o != nil && !IsNil(o.DisplaySequence) {
		return true
	}

	return false
}

// SetDisplaySequence gets a reference to the given float32 and assigns it to the DisplaySequence field.
func (o *TemplateTurnAwayCodeType) SetDisplaySequence(v float32) {
	o.DisplaySequence = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *TemplateTurnAwayCodeType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateTurnAwayCodeType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *TemplateTurnAwayCodeType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *TemplateTurnAwayCodeType) SetInactive(v bool) {
	o.Inactive = &v
}

// GetTurnAwayType returns the TurnAwayType field value if set, zero value otherwise.
func (o *TemplateTurnAwayCodeType) GetTurnAwayType() TurnAwayTypeType {
	if o == nil || IsNil(o.TurnAwayType) {
		var ret TurnAwayTypeType
		return ret
	}
	return *o.TurnAwayType
}

// GetTurnAwayTypeOk returns a tuple with the TurnAwayType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateTurnAwayCodeType) GetTurnAwayTypeOk() (*TurnAwayTypeType, bool) {
	if o == nil || IsNil(o.TurnAwayType) {
		return nil, false
	}
	return o.TurnAwayType, true
}

// HasTurnAwayType returns a boolean if a field has been set.
func (o *TemplateTurnAwayCodeType) HasTurnAwayType() bool {
	if o != nil && !IsNil(o.TurnAwayType) {
		return true
	}

	return false
}

// SetTurnAwayType gets a reference to the given TurnAwayTypeType and assigns it to the TurnAwayType field.
func (o *TemplateTurnAwayCodeType) SetTurnAwayType(v TurnAwayTypeType) {
	o.TurnAwayType = &v
}

func (o TemplateTurnAwayCodeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TemplateTurnAwayCodeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CanDelete) {
		toSerialize["canDelete"] = o.CanDelete
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.DisplaySequence) {
		toSerialize["displaySequence"] = o.DisplaySequence
	}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	if !IsNil(o.TurnAwayType) {
		toSerialize["turnAwayType"] = o.TurnAwayType
	}
	return toSerialize, nil
}

type NullableTemplateTurnAwayCodeType struct {
	value *TemplateTurnAwayCodeType
	isSet bool
}

func (v NullableTemplateTurnAwayCodeType) Get() *TemplateTurnAwayCodeType {
	return v.value
}

func (v *NullableTemplateTurnAwayCodeType) Set(val *TemplateTurnAwayCodeType) {
	v.value = val
	v.isSet = true
}

func (v NullableTemplateTurnAwayCodeType) IsSet() bool {
	return v.isSet
}

func (v *NullableTemplateTurnAwayCodeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTemplateTurnAwayCodeType(val *TemplateTurnAwayCodeType) *NullableTemplateTurnAwayCodeType {
	return &NullableTemplateTurnAwayCodeType{value: val, isSet: true}
}

func (v NullableTemplateTurnAwayCodeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTemplateTurnAwayCodeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


