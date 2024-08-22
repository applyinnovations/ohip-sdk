/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the TelephoneBookEntryType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TelephoneBookEntryType{}

// TelephoneBookEntryType This type definition of Telephone Book Entry Type.
type TelephoneBookEntryType struct {
	Id *UniqueIDType `json:"id,omitempty"`
	HotelId *string `json:"hotelId,omitempty"`
	Category *string `json:"category,omitempty"`
	CategorySequence *int32 `json:"categorySequence,omitempty"`
	CategoryDescription *string `json:"categoryDescription,omitempty"`
	Name *string `json:"name,omitempty"`
	Telephone *string `json:"telephone,omitempty"`
	Url *string `json:"url,omitempty"`
	Remarks *string `json:"remarks,omitempty"`
}

// NewTelephoneBookEntryType instantiates a new TelephoneBookEntryType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTelephoneBookEntryType() *TelephoneBookEntryType {
	this := TelephoneBookEntryType{}
	return &this
}

// NewTelephoneBookEntryTypeWithDefaults instantiates a new TelephoneBookEntryType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTelephoneBookEntryTypeWithDefaults() *TelephoneBookEntryType {
	this := TelephoneBookEntryType{}
	return &this
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *TelephoneBookEntryType) GetId() UniqueIDType {
	if o == nil || IsNil(o.Id) {
		var ret UniqueIDType
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TelephoneBookEntryType) GetIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *TelephoneBookEntryType) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given UniqueIDType and assigns it to the Id field.
func (o *TelephoneBookEntryType) SetId(v UniqueIDType) {
	o.Id = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *TelephoneBookEntryType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TelephoneBookEntryType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *TelephoneBookEntryType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *TelephoneBookEntryType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetCategory returns the Category field value if set, zero value otherwise.
func (o *TelephoneBookEntryType) GetCategory() string {
	if o == nil || IsNil(o.Category) {
		var ret string
		return ret
	}
	return *o.Category
}

// GetCategoryOk returns a tuple with the Category field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TelephoneBookEntryType) GetCategoryOk() (*string, bool) {
	if o == nil || IsNil(o.Category) {
		return nil, false
	}
	return o.Category, true
}

// HasCategory returns a boolean if a field has been set.
func (o *TelephoneBookEntryType) HasCategory() bool {
	if o != nil && !IsNil(o.Category) {
		return true
	}

	return false
}

// SetCategory gets a reference to the given string and assigns it to the Category field.
func (o *TelephoneBookEntryType) SetCategory(v string) {
	o.Category = &v
}

// GetCategorySequence returns the CategorySequence field value if set, zero value otherwise.
func (o *TelephoneBookEntryType) GetCategorySequence() int32 {
	if o == nil || IsNil(o.CategorySequence) {
		var ret int32
		return ret
	}
	return *o.CategorySequence
}

// GetCategorySequenceOk returns a tuple with the CategorySequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TelephoneBookEntryType) GetCategorySequenceOk() (*int32, bool) {
	if o == nil || IsNil(o.CategorySequence) {
		return nil, false
	}
	return o.CategorySequence, true
}

// HasCategorySequence returns a boolean if a field has been set.
func (o *TelephoneBookEntryType) HasCategorySequence() bool {
	if o != nil && !IsNil(o.CategorySequence) {
		return true
	}

	return false
}

// SetCategorySequence gets a reference to the given int32 and assigns it to the CategorySequence field.
func (o *TelephoneBookEntryType) SetCategorySequence(v int32) {
	o.CategorySequence = &v
}

// GetCategoryDescription returns the CategoryDescription field value if set, zero value otherwise.
func (o *TelephoneBookEntryType) GetCategoryDescription() string {
	if o == nil || IsNil(o.CategoryDescription) {
		var ret string
		return ret
	}
	return *o.CategoryDescription
}

// GetCategoryDescriptionOk returns a tuple with the CategoryDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TelephoneBookEntryType) GetCategoryDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.CategoryDescription) {
		return nil, false
	}
	return o.CategoryDescription, true
}

// HasCategoryDescription returns a boolean if a field has been set.
func (o *TelephoneBookEntryType) HasCategoryDescription() bool {
	if o != nil && !IsNil(o.CategoryDescription) {
		return true
	}

	return false
}

// SetCategoryDescription gets a reference to the given string and assigns it to the CategoryDescription field.
func (o *TelephoneBookEntryType) SetCategoryDescription(v string) {
	o.CategoryDescription = &v
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *TelephoneBookEntryType) GetName() string {
	if o == nil || IsNil(o.Name) {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TelephoneBookEntryType) GetNameOk() (*string, bool) {
	if o == nil || IsNil(o.Name) {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *TelephoneBookEntryType) HasName() bool {
	if o != nil && !IsNil(o.Name) {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *TelephoneBookEntryType) SetName(v string) {
	o.Name = &v
}

// GetTelephone returns the Telephone field value if set, zero value otherwise.
func (o *TelephoneBookEntryType) GetTelephone() string {
	if o == nil || IsNil(o.Telephone) {
		var ret string
		return ret
	}
	return *o.Telephone
}

// GetTelephoneOk returns a tuple with the Telephone field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TelephoneBookEntryType) GetTelephoneOk() (*string, bool) {
	if o == nil || IsNil(o.Telephone) {
		return nil, false
	}
	return o.Telephone, true
}

// HasTelephone returns a boolean if a field has been set.
func (o *TelephoneBookEntryType) HasTelephone() bool {
	if o != nil && !IsNil(o.Telephone) {
		return true
	}

	return false
}

// SetTelephone gets a reference to the given string and assigns it to the Telephone field.
func (o *TelephoneBookEntryType) SetTelephone(v string) {
	o.Telephone = &v
}

// GetUrl returns the Url field value if set, zero value otherwise.
func (o *TelephoneBookEntryType) GetUrl() string {
	if o == nil || IsNil(o.Url) {
		var ret string
		return ret
	}
	return *o.Url
}

// GetUrlOk returns a tuple with the Url field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TelephoneBookEntryType) GetUrlOk() (*string, bool) {
	if o == nil || IsNil(o.Url) {
		return nil, false
	}
	return o.Url, true
}

// HasUrl returns a boolean if a field has been set.
func (o *TelephoneBookEntryType) HasUrl() bool {
	if o != nil && !IsNil(o.Url) {
		return true
	}

	return false
}

// SetUrl gets a reference to the given string and assigns it to the Url field.
func (o *TelephoneBookEntryType) SetUrl(v string) {
	o.Url = &v
}

// GetRemarks returns the Remarks field value if set, zero value otherwise.
func (o *TelephoneBookEntryType) GetRemarks() string {
	if o == nil || IsNil(o.Remarks) {
		var ret string
		return ret
	}
	return *o.Remarks
}

// GetRemarksOk returns a tuple with the Remarks field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TelephoneBookEntryType) GetRemarksOk() (*string, bool) {
	if o == nil || IsNil(o.Remarks) {
		return nil, false
	}
	return o.Remarks, true
}

// HasRemarks returns a boolean if a field has been set.
func (o *TelephoneBookEntryType) HasRemarks() bool {
	if o != nil && !IsNil(o.Remarks) {
		return true
	}

	return false
}

// SetRemarks gets a reference to the given string and assigns it to the Remarks field.
func (o *TelephoneBookEntryType) SetRemarks(v string) {
	o.Remarks = &v
}

func (o TelephoneBookEntryType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TelephoneBookEntryType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Category) {
		toSerialize["category"] = o.Category
	}
	if !IsNil(o.CategorySequence) {
		toSerialize["categorySequence"] = o.CategorySequence
	}
	if !IsNil(o.CategoryDescription) {
		toSerialize["categoryDescription"] = o.CategoryDescription
	}
	if !IsNil(o.Name) {
		toSerialize["name"] = o.Name
	}
	if !IsNil(o.Telephone) {
		toSerialize["telephone"] = o.Telephone
	}
	if !IsNil(o.Url) {
		toSerialize["url"] = o.Url
	}
	if !IsNil(o.Remarks) {
		toSerialize["remarks"] = o.Remarks
	}
	return toSerialize, nil
}

type NullableTelephoneBookEntryType struct {
	value *TelephoneBookEntryType
	isSet bool
}

func (v NullableTelephoneBookEntryType) Get() *TelephoneBookEntryType {
	return v.value
}

func (v *NullableTelephoneBookEntryType) Set(val *TelephoneBookEntryType) {
	v.value = val
	v.isSet = true
}

func (v NullableTelephoneBookEntryType) IsSet() bool {
	return v.isSet
}

func (v *NullableTelephoneBookEntryType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTelephoneBookEntryType(val *TelephoneBookEntryType) *NullableTelephoneBookEntryType {
	return &NullableTelephoneBookEntryType{value: val, isSet: true}
}

func (v NullableTelephoneBookEntryType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTelephoneBookEntryType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


