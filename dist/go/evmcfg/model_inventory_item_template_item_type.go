/*
OPERA Cloud Event Configuration API

This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evmcfg

import (
	"encoding/json"
)

// checks if the InventoryItemTemplateItemType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &InventoryItemTemplateItemType{}

// InventoryItemTemplateItemType This type holds the information of the inventory item which will be grouped in the inventory item template.
type InventoryItemTemplateItemType struct {
	// Specifies the article number of the item.
	ArticleNumber *string `json:"articleNumber,omitempty"`
	AttributeId *UniqueIDType `json:"attributeId,omitempty"`
	// Specifies the name of the default attribute for the item in the inventory item template.
	AttributeName *string `json:"attributeName,omitempty"`
	// Specifies the sorting sequence number for the item class.
	ClassSequence *int32 `json:"classSequence,omitempty"`
	Id *UniqueIDType `json:"id,omitempty"`
	// Specifies the name of the item.
	Name *string `json:"name,omitempty"`
	// Specifies the quantity of the item.
	Quantity *int32 `json:"quantity,omitempty"`
	// Specifies the code of the default rate for the item in the inventory item template.
	RateCode *string `json:"rateCode,omitempty"`
	RateId *UniqueIDType `json:"rateId,omitempty"`
	// Specifies the name of the default rate for the item in the inventory item template.
	RateName *string `json:"rateName,omitempty"`
	// Specifies the sorting sequence number for the item.
	Sequence *int32 `json:"sequence,omitempty"`
}

// NewInventoryItemTemplateItemType instantiates a new InventoryItemTemplateItemType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInventoryItemTemplateItemType() *InventoryItemTemplateItemType {
	this := InventoryItemTemplateItemType{}
	return &this
}

// NewInventoryItemTemplateItemTypeWithDefaults instantiates a new InventoryItemTemplateItemType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInventoryItemTemplateItemTypeWithDefaults() *InventoryItemTemplateItemType {
	this := InventoryItemTemplateItemType{}
	return &this
}

// GetArticleNumber returns the ArticleNumber field value if set, zero value otherwise.
func (o *InventoryItemTemplateItemType) GetArticleNumber() string {
	if o == nil || IsNil(o.ArticleNumber) {
		var ret string
		return ret
	}
	return *o.ArticleNumber
}

// GetArticleNumberOk returns a tuple with the ArticleNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTemplateItemType) GetArticleNumberOk() (*string, bool) {
	if o == nil || IsNil(o.ArticleNumber) {
		return nil, false
	}
	return o.ArticleNumber, true
}

// HasArticleNumber returns a boolean if a field has been set.
func (o *InventoryItemTemplateItemType) HasArticleNumber() bool {
	if o != nil && !IsNil(o.ArticleNumber) {
		return true
	}

	return false
}

// SetArticleNumber gets a reference to the given string and assigns it to the ArticleNumber field.
func (o *InventoryItemTemplateItemType) SetArticleNumber(v string) {
	o.ArticleNumber = &v
}

// GetAttributeId returns the AttributeId field value if set, zero value otherwise.
func (o *InventoryItemTemplateItemType) GetAttributeId() UniqueIDType {
	if o == nil || IsNil(o.AttributeId) {
		var ret UniqueIDType
		return ret
	}
	return *o.AttributeId
}

// GetAttributeIdOk returns a tuple with the AttributeId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTemplateItemType) GetAttributeIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.AttributeId) {
		return nil, false
	}
	return o.AttributeId, true
}

// HasAttributeId returns a boolean if a field has been set.
func (o *InventoryItemTemplateItemType) HasAttributeId() bool {
	if o != nil && !IsNil(o.AttributeId) {
		return true
	}

	return false
}

// SetAttributeId gets a reference to the given UniqueIDType and assigns it to the AttributeId field.
func (o *InventoryItemTemplateItemType) SetAttributeId(v UniqueIDType) {
	o.AttributeId = &v
}

// GetAttributeName returns the AttributeName field value if set, zero value otherwise.
func (o *InventoryItemTemplateItemType) GetAttributeName() string {
	if o == nil || IsNil(o.AttributeName) {
		var ret string
		return ret
	}
	return *o.AttributeName
}

// GetAttributeNameOk returns a tuple with the AttributeName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTemplateItemType) GetAttributeNameOk() (*string, bool) {
	if o == nil || IsNil(o.AttributeName) {
		return nil, false
	}
	return o.AttributeName, true
}

// HasAttributeName returns a boolean if a field has been set.
func (o *InventoryItemTemplateItemType) HasAttributeName() bool {
	if o != nil && !IsNil(o.AttributeName) {
		return true
	}

	return false
}

// SetAttributeName gets a reference to the given string and assigns it to the AttributeName field.
func (o *InventoryItemTemplateItemType) SetAttributeName(v string) {
	o.AttributeName = &v
}

// GetClassSequence returns the ClassSequence field value if set, zero value otherwise.
func (o *InventoryItemTemplateItemType) GetClassSequence() int32 {
	if o == nil || IsNil(o.ClassSequence) {
		var ret int32
		return ret
	}
	return *o.ClassSequence
}

// GetClassSequenceOk returns a tuple with the ClassSequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTemplateItemType) GetClassSequenceOk() (*int32, bool) {
	if o == nil || IsNil(o.ClassSequence) {
		return nil, false
	}
	return o.ClassSequence, true
}

// HasClassSequence returns a boolean if a field has been set.
func (o *InventoryItemTemplateItemType) HasClassSequence() bool {
	if o != nil && !IsNil(o.ClassSequence) {
		return true
	}

	return false
}

// SetClassSequence gets a reference to the given int32 and assigns it to the ClassSequence field.
func (o *InventoryItemTemplateItemType) SetClassSequence(v int32) {
	o.ClassSequence = &v
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *InventoryItemTemplateItemType) GetId() UniqueIDType {
	if o == nil || IsNil(o.Id) {
		var ret UniqueIDType
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTemplateItemType) GetIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *InventoryItemTemplateItemType) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given UniqueIDType and assigns it to the Id field.
func (o *InventoryItemTemplateItemType) SetId(v UniqueIDType) {
	o.Id = &v
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *InventoryItemTemplateItemType) GetName() string {
	if o == nil || IsNil(o.Name) {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTemplateItemType) GetNameOk() (*string, bool) {
	if o == nil || IsNil(o.Name) {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *InventoryItemTemplateItemType) HasName() bool {
	if o != nil && !IsNil(o.Name) {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *InventoryItemTemplateItemType) SetName(v string) {
	o.Name = &v
}

// GetQuantity returns the Quantity field value if set, zero value otherwise.
func (o *InventoryItemTemplateItemType) GetQuantity() int32 {
	if o == nil || IsNil(o.Quantity) {
		var ret int32
		return ret
	}
	return *o.Quantity
}

// GetQuantityOk returns a tuple with the Quantity field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTemplateItemType) GetQuantityOk() (*int32, bool) {
	if o == nil || IsNil(o.Quantity) {
		return nil, false
	}
	return o.Quantity, true
}

// HasQuantity returns a boolean if a field has been set.
func (o *InventoryItemTemplateItemType) HasQuantity() bool {
	if o != nil && !IsNil(o.Quantity) {
		return true
	}

	return false
}

// SetQuantity gets a reference to the given int32 and assigns it to the Quantity field.
func (o *InventoryItemTemplateItemType) SetQuantity(v int32) {
	o.Quantity = &v
}

// GetRateCode returns the RateCode field value if set, zero value otherwise.
func (o *InventoryItemTemplateItemType) GetRateCode() string {
	if o == nil || IsNil(o.RateCode) {
		var ret string
		return ret
	}
	return *o.RateCode
}

// GetRateCodeOk returns a tuple with the RateCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTemplateItemType) GetRateCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RateCode) {
		return nil, false
	}
	return o.RateCode, true
}

// HasRateCode returns a boolean if a field has been set.
func (o *InventoryItemTemplateItemType) HasRateCode() bool {
	if o != nil && !IsNil(o.RateCode) {
		return true
	}

	return false
}

// SetRateCode gets a reference to the given string and assigns it to the RateCode field.
func (o *InventoryItemTemplateItemType) SetRateCode(v string) {
	o.RateCode = &v
}

// GetRateId returns the RateId field value if set, zero value otherwise.
func (o *InventoryItemTemplateItemType) GetRateId() UniqueIDType {
	if o == nil || IsNil(o.RateId) {
		var ret UniqueIDType
		return ret
	}
	return *o.RateId
}

// GetRateIdOk returns a tuple with the RateId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTemplateItemType) GetRateIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.RateId) {
		return nil, false
	}
	return o.RateId, true
}

// HasRateId returns a boolean if a field has been set.
func (o *InventoryItemTemplateItemType) HasRateId() bool {
	if o != nil && !IsNil(o.RateId) {
		return true
	}

	return false
}

// SetRateId gets a reference to the given UniqueIDType and assigns it to the RateId field.
func (o *InventoryItemTemplateItemType) SetRateId(v UniqueIDType) {
	o.RateId = &v
}

// GetRateName returns the RateName field value if set, zero value otherwise.
func (o *InventoryItemTemplateItemType) GetRateName() string {
	if o == nil || IsNil(o.RateName) {
		var ret string
		return ret
	}
	return *o.RateName
}

// GetRateNameOk returns a tuple with the RateName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTemplateItemType) GetRateNameOk() (*string, bool) {
	if o == nil || IsNil(o.RateName) {
		return nil, false
	}
	return o.RateName, true
}

// HasRateName returns a boolean if a field has been set.
func (o *InventoryItemTemplateItemType) HasRateName() bool {
	if o != nil && !IsNil(o.RateName) {
		return true
	}

	return false
}

// SetRateName gets a reference to the given string and assigns it to the RateName field.
func (o *InventoryItemTemplateItemType) SetRateName(v string) {
	o.RateName = &v
}

// GetSequence returns the Sequence field value if set, zero value otherwise.
func (o *InventoryItemTemplateItemType) GetSequence() int32 {
	if o == nil || IsNil(o.Sequence) {
		var ret int32
		return ret
	}
	return *o.Sequence
}

// GetSequenceOk returns a tuple with the Sequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryItemTemplateItemType) GetSequenceOk() (*int32, bool) {
	if o == nil || IsNil(o.Sequence) {
		return nil, false
	}
	return o.Sequence, true
}

// HasSequence returns a boolean if a field has been set.
func (o *InventoryItemTemplateItemType) HasSequence() bool {
	if o != nil && !IsNil(o.Sequence) {
		return true
	}

	return false
}

// SetSequence gets a reference to the given int32 and assigns it to the Sequence field.
func (o *InventoryItemTemplateItemType) SetSequence(v int32) {
	o.Sequence = &v
}

func (o InventoryItemTemplateItemType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o InventoryItemTemplateItemType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ArticleNumber) {
		toSerialize["articleNumber"] = o.ArticleNumber
	}
	if !IsNil(o.AttributeId) {
		toSerialize["attributeId"] = o.AttributeId
	}
	if !IsNil(o.AttributeName) {
		toSerialize["attributeName"] = o.AttributeName
	}
	if !IsNil(o.ClassSequence) {
		toSerialize["classSequence"] = o.ClassSequence
	}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.Name) {
		toSerialize["name"] = o.Name
	}
	if !IsNil(o.Quantity) {
		toSerialize["quantity"] = o.Quantity
	}
	if !IsNil(o.RateCode) {
		toSerialize["rateCode"] = o.RateCode
	}
	if !IsNil(o.RateId) {
		toSerialize["rateId"] = o.RateId
	}
	if !IsNil(o.RateName) {
		toSerialize["rateName"] = o.RateName
	}
	if !IsNil(o.Sequence) {
		toSerialize["sequence"] = o.Sequence
	}
	return toSerialize, nil
}

type NullableInventoryItemTemplateItemType struct {
	value *InventoryItemTemplateItemType
	isSet bool
}

func (v NullableInventoryItemTemplateItemType) Get() *InventoryItemTemplateItemType {
	return v.value
}

func (v *NullableInventoryItemTemplateItemType) Set(val *InventoryItemTemplateItemType) {
	v.value = val
	v.isSet = true
}

func (v NullableInventoryItemTemplateItemType) IsSet() bool {
	return v.isSet
}

func (v *NullableInventoryItemTemplateItemType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInventoryItemTemplateItemType(val *InventoryItemTemplateItemType) *NullableInventoryItemTemplateItemType {
	return &NullableInventoryItemTemplateItemType{value: val, isSet: true}
}

func (v NullableInventoryItemTemplateItemType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInventoryItemTemplateItemType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

