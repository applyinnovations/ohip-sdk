/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the ResInventoryItemType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ResInventoryItemType{}

// ResInventoryItemType An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote).
type ResInventoryItemType struct {
	BlockDates *DateRangeType `json:"blockDates,omitempty"`
	// A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
	Id *string `json:"id,omitempty"`
	// Used to identify the source of the identifier (e.g., IATA, ABTA).
	IdContext *string `json:"idContext,omitempty"`
	// Additional identifying value assigned by the creating system.
	IdExtension *int32 `json:"idExtension,omitempty"`
	// The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
	Instance *string `json:"instance,omitempty"`
	Item *ItemInfoType `json:"item,omitempty"`
	// Number of items booked.
	Quantity *int32 `json:"quantity,omitempty"`
	Source *ResInventoryItemSourceType `json:"source,omitempty"`
	// A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT).
	Type *string `json:"type,omitempty"`
	// URL that identifies the location associated with the record identified by the UniqueID.
	Url *string `json:"url,omitempty"`
}

// NewResInventoryItemType instantiates a new ResInventoryItemType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewResInventoryItemType() *ResInventoryItemType {
	this := ResInventoryItemType{}
	return &this
}

// NewResInventoryItemTypeWithDefaults instantiates a new ResInventoryItemType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewResInventoryItemTypeWithDefaults() *ResInventoryItemType {
	this := ResInventoryItemType{}
	return &this
}

// GetBlockDates returns the BlockDates field value if set, zero value otherwise.
func (o *ResInventoryItemType) GetBlockDates() DateRangeType {
	if o == nil || IsNil(o.BlockDates) {
		var ret DateRangeType
		return ret
	}
	return *o.BlockDates
}

// GetBlockDatesOk returns a tuple with the BlockDates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResInventoryItemType) GetBlockDatesOk() (*DateRangeType, bool) {
	if o == nil || IsNil(o.BlockDates) {
		return nil, false
	}
	return o.BlockDates, true
}

// HasBlockDates returns a boolean if a field has been set.
func (o *ResInventoryItemType) HasBlockDates() bool {
	if o != nil && !IsNil(o.BlockDates) {
		return true
	}

	return false
}

// SetBlockDates gets a reference to the given DateRangeType and assigns it to the BlockDates field.
func (o *ResInventoryItemType) SetBlockDates(v DateRangeType) {
	o.BlockDates = &v
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *ResInventoryItemType) GetId() string {
	if o == nil || IsNil(o.Id) {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResInventoryItemType) GetIdOk() (*string, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *ResInventoryItemType) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *ResInventoryItemType) SetId(v string) {
	o.Id = &v
}

// GetIdContext returns the IdContext field value if set, zero value otherwise.
func (o *ResInventoryItemType) GetIdContext() string {
	if o == nil || IsNil(o.IdContext) {
		var ret string
		return ret
	}
	return *o.IdContext
}

// GetIdContextOk returns a tuple with the IdContext field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResInventoryItemType) GetIdContextOk() (*string, bool) {
	if o == nil || IsNil(o.IdContext) {
		return nil, false
	}
	return o.IdContext, true
}

// HasIdContext returns a boolean if a field has been set.
func (o *ResInventoryItemType) HasIdContext() bool {
	if o != nil && !IsNil(o.IdContext) {
		return true
	}

	return false
}

// SetIdContext gets a reference to the given string and assigns it to the IdContext field.
func (o *ResInventoryItemType) SetIdContext(v string) {
	o.IdContext = &v
}

// GetIdExtension returns the IdExtension field value if set, zero value otherwise.
func (o *ResInventoryItemType) GetIdExtension() int32 {
	if o == nil || IsNil(o.IdExtension) {
		var ret int32
		return ret
	}
	return *o.IdExtension
}

// GetIdExtensionOk returns a tuple with the IdExtension field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResInventoryItemType) GetIdExtensionOk() (*int32, bool) {
	if o == nil || IsNil(o.IdExtension) {
		return nil, false
	}
	return o.IdExtension, true
}

// HasIdExtension returns a boolean if a field has been set.
func (o *ResInventoryItemType) HasIdExtension() bool {
	if o != nil && !IsNil(o.IdExtension) {
		return true
	}

	return false
}

// SetIdExtension gets a reference to the given int32 and assigns it to the IdExtension field.
func (o *ResInventoryItemType) SetIdExtension(v int32) {
	o.IdExtension = &v
}

// GetInstance returns the Instance field value if set, zero value otherwise.
func (o *ResInventoryItemType) GetInstance() string {
	if o == nil || IsNil(o.Instance) {
		var ret string
		return ret
	}
	return *o.Instance
}

// GetInstanceOk returns a tuple with the Instance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResInventoryItemType) GetInstanceOk() (*string, bool) {
	if o == nil || IsNil(o.Instance) {
		return nil, false
	}
	return o.Instance, true
}

// HasInstance returns a boolean if a field has been set.
func (o *ResInventoryItemType) HasInstance() bool {
	if o != nil && !IsNil(o.Instance) {
		return true
	}

	return false
}

// SetInstance gets a reference to the given string and assigns it to the Instance field.
func (o *ResInventoryItemType) SetInstance(v string) {
	o.Instance = &v
}

// GetItem returns the Item field value if set, zero value otherwise.
func (o *ResInventoryItemType) GetItem() ItemInfoType {
	if o == nil || IsNil(o.Item) {
		var ret ItemInfoType
		return ret
	}
	return *o.Item
}

// GetItemOk returns a tuple with the Item field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResInventoryItemType) GetItemOk() (*ItemInfoType, bool) {
	if o == nil || IsNil(o.Item) {
		return nil, false
	}
	return o.Item, true
}

// HasItem returns a boolean if a field has been set.
func (o *ResInventoryItemType) HasItem() bool {
	if o != nil && !IsNil(o.Item) {
		return true
	}

	return false
}

// SetItem gets a reference to the given ItemInfoType and assigns it to the Item field.
func (o *ResInventoryItemType) SetItem(v ItemInfoType) {
	o.Item = &v
}

// GetQuantity returns the Quantity field value if set, zero value otherwise.
func (o *ResInventoryItemType) GetQuantity() int32 {
	if o == nil || IsNil(o.Quantity) {
		var ret int32
		return ret
	}
	return *o.Quantity
}

// GetQuantityOk returns a tuple with the Quantity field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResInventoryItemType) GetQuantityOk() (*int32, bool) {
	if o == nil || IsNil(o.Quantity) {
		return nil, false
	}
	return o.Quantity, true
}

// HasQuantity returns a boolean if a field has been set.
func (o *ResInventoryItemType) HasQuantity() bool {
	if o != nil && !IsNil(o.Quantity) {
		return true
	}

	return false
}

// SetQuantity gets a reference to the given int32 and assigns it to the Quantity field.
func (o *ResInventoryItemType) SetQuantity(v int32) {
	o.Quantity = &v
}

// GetSource returns the Source field value if set, zero value otherwise.
func (o *ResInventoryItemType) GetSource() ResInventoryItemSourceType {
	if o == nil || IsNil(o.Source) {
		var ret ResInventoryItemSourceType
		return ret
	}
	return *o.Source
}

// GetSourceOk returns a tuple with the Source field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResInventoryItemType) GetSourceOk() (*ResInventoryItemSourceType, bool) {
	if o == nil || IsNil(o.Source) {
		return nil, false
	}
	return o.Source, true
}

// HasSource returns a boolean if a field has been set.
func (o *ResInventoryItemType) HasSource() bool {
	if o != nil && !IsNil(o.Source) {
		return true
	}

	return false
}

// SetSource gets a reference to the given ResInventoryItemSourceType and assigns it to the Source field.
func (o *ResInventoryItemType) SetSource(v ResInventoryItemSourceType) {
	o.Source = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *ResInventoryItemType) GetType() string {
	if o == nil || IsNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResInventoryItemType) GetTypeOk() (*string, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *ResInventoryItemType) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *ResInventoryItemType) SetType(v string) {
	o.Type = &v
}

// GetUrl returns the Url field value if set, zero value otherwise.
func (o *ResInventoryItemType) GetUrl() string {
	if o == nil || IsNil(o.Url) {
		var ret string
		return ret
	}
	return *o.Url
}

// GetUrlOk returns a tuple with the Url field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResInventoryItemType) GetUrlOk() (*string, bool) {
	if o == nil || IsNil(o.Url) {
		return nil, false
	}
	return o.Url, true
}

// HasUrl returns a boolean if a field has been set.
func (o *ResInventoryItemType) HasUrl() bool {
	if o != nil && !IsNil(o.Url) {
		return true
	}

	return false
}

// SetUrl gets a reference to the given string and assigns it to the Url field.
func (o *ResInventoryItemType) SetUrl(v string) {
	o.Url = &v
}

func (o ResInventoryItemType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ResInventoryItemType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockDates) {
		toSerialize["blockDates"] = o.BlockDates
	}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.IdContext) {
		toSerialize["idContext"] = o.IdContext
	}
	if !IsNil(o.IdExtension) {
		toSerialize["idExtension"] = o.IdExtension
	}
	if !IsNil(o.Instance) {
		toSerialize["instance"] = o.Instance
	}
	if !IsNil(o.Item) {
		toSerialize["item"] = o.Item
	}
	if !IsNil(o.Quantity) {
		toSerialize["quantity"] = o.Quantity
	}
	if !IsNil(o.Source) {
		toSerialize["source"] = o.Source
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	if !IsNil(o.Url) {
		toSerialize["url"] = o.Url
	}
	return toSerialize, nil
}

type NullableResInventoryItemType struct {
	value *ResInventoryItemType
	isSet bool
}

func (v NullableResInventoryItemType) Get() *ResInventoryItemType {
	return v.value
}

func (v *NullableResInventoryItemType) Set(val *ResInventoryItemType) {
	v.value = val
	v.isSet = true
}

func (v NullableResInventoryItemType) IsSet() bool {
	return v.isSet
}

func (v *NullableResInventoryItemType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableResInventoryItemType(val *ResInventoryItemType) *NullableResInventoryItemType {
	return &NullableResInventoryItemType{value: val, isSet: true}
}

func (v NullableResInventoryItemType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableResInventoryItemType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

