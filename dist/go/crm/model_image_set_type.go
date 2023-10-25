/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the ImageSetType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ImageSetType{}

// ImageSetType Represents on image set record.
type ImageSetType struct {
	// The image set chain code.
	ChainCode *string `json:"chainCode,omitempty"`
	// The image set description.
	Description *string `json:"description,omitempty"`
	// The image set hotel code.
	HotelId *string `json:"hotelId,omitempty"`
	// The image set order.
	ImageOrder *int32 `json:"imageOrder,omitempty"`
	// The image set name.
	ImageSet *string `json:"imageSet,omitempty"`
	ImageStyle *ImageStyleType `json:"imageStyle,omitempty"`
	// The image set type.
	ImageType *string `json:"imageType,omitempty"`
	// The image set URL.
	ImageURL *string `json:"imageURL,omitempty"`
	// Language identification.
	Language *string `json:"language,omitempty"`
	// The image set sequence ID.
	SequenceId *int32 `json:"sequenceId,omitempty"`
	// The image set website.
	Website *string `json:"website,omitempty"`
}

// NewImageSetType instantiates a new ImageSetType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewImageSetType() *ImageSetType {
	this := ImageSetType{}
	return &this
}

// NewImageSetTypeWithDefaults instantiates a new ImageSetType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewImageSetTypeWithDefaults() *ImageSetType {
	this := ImageSetType{}
	return &this
}

// GetChainCode returns the ChainCode field value if set, zero value otherwise.
func (o *ImageSetType) GetChainCode() string {
	if o == nil || IsNil(o.ChainCode) {
		var ret string
		return ret
	}
	return *o.ChainCode
}

// GetChainCodeOk returns a tuple with the ChainCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ImageSetType) GetChainCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ChainCode) {
		return nil, false
	}
	return o.ChainCode, true
}

// HasChainCode returns a boolean if a field has been set.
func (o *ImageSetType) HasChainCode() bool {
	if o != nil && !IsNil(o.ChainCode) {
		return true
	}

	return false
}

// SetChainCode gets a reference to the given string and assigns it to the ChainCode field.
func (o *ImageSetType) SetChainCode(v string) {
	o.ChainCode = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ImageSetType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ImageSetType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ImageSetType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *ImageSetType) SetDescription(v string) {
	o.Description = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ImageSetType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ImageSetType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ImageSetType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ImageSetType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetImageOrder returns the ImageOrder field value if set, zero value otherwise.
func (o *ImageSetType) GetImageOrder() int32 {
	if o == nil || IsNil(o.ImageOrder) {
		var ret int32
		return ret
	}
	return *o.ImageOrder
}

// GetImageOrderOk returns a tuple with the ImageOrder field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ImageSetType) GetImageOrderOk() (*int32, bool) {
	if o == nil || IsNil(o.ImageOrder) {
		return nil, false
	}
	return o.ImageOrder, true
}

// HasImageOrder returns a boolean if a field has been set.
func (o *ImageSetType) HasImageOrder() bool {
	if o != nil && !IsNil(o.ImageOrder) {
		return true
	}

	return false
}

// SetImageOrder gets a reference to the given int32 and assigns it to the ImageOrder field.
func (o *ImageSetType) SetImageOrder(v int32) {
	o.ImageOrder = &v
}

// GetImageSet returns the ImageSet field value if set, zero value otherwise.
func (o *ImageSetType) GetImageSet() string {
	if o == nil || IsNil(o.ImageSet) {
		var ret string
		return ret
	}
	return *o.ImageSet
}

// GetImageSetOk returns a tuple with the ImageSet field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ImageSetType) GetImageSetOk() (*string, bool) {
	if o == nil || IsNil(o.ImageSet) {
		return nil, false
	}
	return o.ImageSet, true
}

// HasImageSet returns a boolean if a field has been set.
func (o *ImageSetType) HasImageSet() bool {
	if o != nil && !IsNil(o.ImageSet) {
		return true
	}

	return false
}

// SetImageSet gets a reference to the given string and assigns it to the ImageSet field.
func (o *ImageSetType) SetImageSet(v string) {
	o.ImageSet = &v
}

// GetImageStyle returns the ImageStyle field value if set, zero value otherwise.
func (o *ImageSetType) GetImageStyle() ImageStyleType {
	if o == nil || IsNil(o.ImageStyle) {
		var ret ImageStyleType
		return ret
	}
	return *o.ImageStyle
}

// GetImageStyleOk returns a tuple with the ImageStyle field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ImageSetType) GetImageStyleOk() (*ImageStyleType, bool) {
	if o == nil || IsNil(o.ImageStyle) {
		return nil, false
	}
	return o.ImageStyle, true
}

// HasImageStyle returns a boolean if a field has been set.
func (o *ImageSetType) HasImageStyle() bool {
	if o != nil && !IsNil(o.ImageStyle) {
		return true
	}

	return false
}

// SetImageStyle gets a reference to the given ImageStyleType and assigns it to the ImageStyle field.
func (o *ImageSetType) SetImageStyle(v ImageStyleType) {
	o.ImageStyle = &v
}

// GetImageType returns the ImageType field value if set, zero value otherwise.
func (o *ImageSetType) GetImageType() string {
	if o == nil || IsNil(o.ImageType) {
		var ret string
		return ret
	}
	return *o.ImageType
}

// GetImageTypeOk returns a tuple with the ImageType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ImageSetType) GetImageTypeOk() (*string, bool) {
	if o == nil || IsNil(o.ImageType) {
		return nil, false
	}
	return o.ImageType, true
}

// HasImageType returns a boolean if a field has been set.
func (o *ImageSetType) HasImageType() bool {
	if o != nil && !IsNil(o.ImageType) {
		return true
	}

	return false
}

// SetImageType gets a reference to the given string and assigns it to the ImageType field.
func (o *ImageSetType) SetImageType(v string) {
	o.ImageType = &v
}

// GetImageURL returns the ImageURL field value if set, zero value otherwise.
func (o *ImageSetType) GetImageURL() string {
	if o == nil || IsNil(o.ImageURL) {
		var ret string
		return ret
	}
	return *o.ImageURL
}

// GetImageURLOk returns a tuple with the ImageURL field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ImageSetType) GetImageURLOk() (*string, bool) {
	if o == nil || IsNil(o.ImageURL) {
		return nil, false
	}
	return o.ImageURL, true
}

// HasImageURL returns a boolean if a field has been set.
func (o *ImageSetType) HasImageURL() bool {
	if o != nil && !IsNil(o.ImageURL) {
		return true
	}

	return false
}

// SetImageURL gets a reference to the given string and assigns it to the ImageURL field.
func (o *ImageSetType) SetImageURL(v string) {
	o.ImageURL = &v
}

// GetLanguage returns the Language field value if set, zero value otherwise.
func (o *ImageSetType) GetLanguage() string {
	if o == nil || IsNil(o.Language) {
		var ret string
		return ret
	}
	return *o.Language
}

// GetLanguageOk returns a tuple with the Language field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ImageSetType) GetLanguageOk() (*string, bool) {
	if o == nil || IsNil(o.Language) {
		return nil, false
	}
	return o.Language, true
}

// HasLanguage returns a boolean if a field has been set.
func (o *ImageSetType) HasLanguage() bool {
	if o != nil && !IsNil(o.Language) {
		return true
	}

	return false
}

// SetLanguage gets a reference to the given string and assigns it to the Language field.
func (o *ImageSetType) SetLanguage(v string) {
	o.Language = &v
}

// GetSequenceId returns the SequenceId field value if set, zero value otherwise.
func (o *ImageSetType) GetSequenceId() int32 {
	if o == nil || IsNil(o.SequenceId) {
		var ret int32
		return ret
	}
	return *o.SequenceId
}

// GetSequenceIdOk returns a tuple with the SequenceId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ImageSetType) GetSequenceIdOk() (*int32, bool) {
	if o == nil || IsNil(o.SequenceId) {
		return nil, false
	}
	return o.SequenceId, true
}

// HasSequenceId returns a boolean if a field has been set.
func (o *ImageSetType) HasSequenceId() bool {
	if o != nil && !IsNil(o.SequenceId) {
		return true
	}

	return false
}

// SetSequenceId gets a reference to the given int32 and assigns it to the SequenceId field.
func (o *ImageSetType) SetSequenceId(v int32) {
	o.SequenceId = &v
}

// GetWebsite returns the Website field value if set, zero value otherwise.
func (o *ImageSetType) GetWebsite() string {
	if o == nil || IsNil(o.Website) {
		var ret string
		return ret
	}
	return *o.Website
}

// GetWebsiteOk returns a tuple with the Website field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ImageSetType) GetWebsiteOk() (*string, bool) {
	if o == nil || IsNil(o.Website) {
		return nil, false
	}
	return o.Website, true
}

// HasWebsite returns a boolean if a field has been set.
func (o *ImageSetType) HasWebsite() bool {
	if o != nil && !IsNil(o.Website) {
		return true
	}

	return false
}

// SetWebsite gets a reference to the given string and assigns it to the Website field.
func (o *ImageSetType) SetWebsite(v string) {
	o.Website = &v
}

func (o ImageSetType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ImageSetType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ChainCode) {
		toSerialize["chainCode"] = o.ChainCode
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.ImageOrder) {
		toSerialize["imageOrder"] = o.ImageOrder
	}
	if !IsNil(o.ImageSet) {
		toSerialize["imageSet"] = o.ImageSet
	}
	if !IsNil(o.ImageStyle) {
		toSerialize["imageStyle"] = o.ImageStyle
	}
	if !IsNil(o.ImageType) {
		toSerialize["imageType"] = o.ImageType
	}
	if !IsNil(o.ImageURL) {
		toSerialize["imageURL"] = o.ImageURL
	}
	if !IsNil(o.Language) {
		toSerialize["language"] = o.Language
	}
	if !IsNil(o.SequenceId) {
		toSerialize["sequenceId"] = o.SequenceId
	}
	if !IsNil(o.Website) {
		toSerialize["website"] = o.Website
	}
	return toSerialize, nil
}

type NullableImageSetType struct {
	value *ImageSetType
	isSet bool
}

func (v NullableImageSetType) Get() *ImageSetType {
	return v.value
}

func (v *NullableImageSetType) Set(val *ImageSetType) {
	v.value = val
	v.isSet = true
}

func (v NullableImageSetType) IsSet() bool {
	return v.isSet
}

func (v *NullableImageSetType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableImageSetType(val *ImageSetType) *NullableImageSetType {
	return &NullableImageSetType{value: val, isSet: true}
}

func (v NullableImageSetType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableImageSetType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


