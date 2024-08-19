/*
OPERA Cloud Integration Configuration API

APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package intcfg

import (
	"encoding/json"
)

// checks if the PostingInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostingInfoType{}

// PostingInfoType struct for PostingInfoType
type PostingInfoType struct {
	// Reference field of postings setup.
	ReferenceField *string `json:"referenceField,omitempty"`
	// Charge scaling of postings setup.
	ChargeScaling *string `json:"chargeScaling,omitempty"`
	// Zero charge posting of postings setup.
	ZeroChargePostings *string `json:"zeroChargePostings,omitempty"`
	// Postings of postings setup.
	Postings *string `json:"postings,omitempty"`
	// Post type of postings setup.
	PostType *string `json:"postType,omitempty"`
	// Conversion of postings setup.
	Conversion *int32 `json:"conversion,omitempty"`
	// Reference of postings setup.
	Reference *string `json:"reference,omitempty"`
	// Supplement of postings setup.
	Supplement *string `json:"supplement,omitempty"`
	// Override credit limit of postings setup.
	OverrideCreditLimit *bool `json:"overrideCreditLimit,omitempty"`
	// No post flag of postings setup.
	NoPostFlag *bool `json:"noPostFlag,omitempty"`
	// IFC generate tax of postings setup.
	GeneratesTax *bool `json:"generatesTax,omitempty"`
	DialedNumberMasking *MaskDialNumberType `json:"dialedNumberMasking,omitempty"`
	// Article Prefix of postings setup.
	ArticleNoPrefix *bool `json:"articleNoPrefix,omitempty"`
}

// NewPostingInfoType instantiates a new PostingInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostingInfoType() *PostingInfoType {
	this := PostingInfoType{}
	return &this
}

// NewPostingInfoTypeWithDefaults instantiates a new PostingInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostingInfoTypeWithDefaults() *PostingInfoType {
	this := PostingInfoType{}
	return &this
}

// GetReferenceField returns the ReferenceField field value if set, zero value otherwise.
func (o *PostingInfoType) GetReferenceField() string {
	if o == nil || IsNil(o.ReferenceField) {
		var ret string
		return ret
	}
	return *o.ReferenceField
}

// GetReferenceFieldOk returns a tuple with the ReferenceField field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostingInfoType) GetReferenceFieldOk() (*string, bool) {
	if o == nil || IsNil(o.ReferenceField) {
		return nil, false
	}
	return o.ReferenceField, true
}

// HasReferenceField returns a boolean if a field has been set.
func (o *PostingInfoType) HasReferenceField() bool {
	if o != nil && !IsNil(o.ReferenceField) {
		return true
	}

	return false
}

// SetReferenceField gets a reference to the given string and assigns it to the ReferenceField field.
func (o *PostingInfoType) SetReferenceField(v string) {
	o.ReferenceField = &v
}

// GetChargeScaling returns the ChargeScaling field value if set, zero value otherwise.
func (o *PostingInfoType) GetChargeScaling() string {
	if o == nil || IsNil(o.ChargeScaling) {
		var ret string
		return ret
	}
	return *o.ChargeScaling
}

// GetChargeScalingOk returns a tuple with the ChargeScaling field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostingInfoType) GetChargeScalingOk() (*string, bool) {
	if o == nil || IsNil(o.ChargeScaling) {
		return nil, false
	}
	return o.ChargeScaling, true
}

// HasChargeScaling returns a boolean if a field has been set.
func (o *PostingInfoType) HasChargeScaling() bool {
	if o != nil && !IsNil(o.ChargeScaling) {
		return true
	}

	return false
}

// SetChargeScaling gets a reference to the given string and assigns it to the ChargeScaling field.
func (o *PostingInfoType) SetChargeScaling(v string) {
	o.ChargeScaling = &v
}

// GetZeroChargePostings returns the ZeroChargePostings field value if set, zero value otherwise.
func (o *PostingInfoType) GetZeroChargePostings() string {
	if o == nil || IsNil(o.ZeroChargePostings) {
		var ret string
		return ret
	}
	return *o.ZeroChargePostings
}

// GetZeroChargePostingsOk returns a tuple with the ZeroChargePostings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostingInfoType) GetZeroChargePostingsOk() (*string, bool) {
	if o == nil || IsNil(o.ZeroChargePostings) {
		return nil, false
	}
	return o.ZeroChargePostings, true
}

// HasZeroChargePostings returns a boolean if a field has been set.
func (o *PostingInfoType) HasZeroChargePostings() bool {
	if o != nil && !IsNil(o.ZeroChargePostings) {
		return true
	}

	return false
}

// SetZeroChargePostings gets a reference to the given string and assigns it to the ZeroChargePostings field.
func (o *PostingInfoType) SetZeroChargePostings(v string) {
	o.ZeroChargePostings = &v
}

// GetPostings returns the Postings field value if set, zero value otherwise.
func (o *PostingInfoType) GetPostings() string {
	if o == nil || IsNil(o.Postings) {
		var ret string
		return ret
	}
	return *o.Postings
}

// GetPostingsOk returns a tuple with the Postings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostingInfoType) GetPostingsOk() (*string, bool) {
	if o == nil || IsNil(o.Postings) {
		return nil, false
	}
	return o.Postings, true
}

// HasPostings returns a boolean if a field has been set.
func (o *PostingInfoType) HasPostings() bool {
	if o != nil && !IsNil(o.Postings) {
		return true
	}

	return false
}

// SetPostings gets a reference to the given string and assigns it to the Postings field.
func (o *PostingInfoType) SetPostings(v string) {
	o.Postings = &v
}

// GetPostType returns the PostType field value if set, zero value otherwise.
func (o *PostingInfoType) GetPostType() string {
	if o == nil || IsNil(o.PostType) {
		var ret string
		return ret
	}
	return *o.PostType
}

// GetPostTypeOk returns a tuple with the PostType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostingInfoType) GetPostTypeOk() (*string, bool) {
	if o == nil || IsNil(o.PostType) {
		return nil, false
	}
	return o.PostType, true
}

// HasPostType returns a boolean if a field has been set.
func (o *PostingInfoType) HasPostType() bool {
	if o != nil && !IsNil(o.PostType) {
		return true
	}

	return false
}

// SetPostType gets a reference to the given string and assigns it to the PostType field.
func (o *PostingInfoType) SetPostType(v string) {
	o.PostType = &v
}

// GetConversion returns the Conversion field value if set, zero value otherwise.
func (o *PostingInfoType) GetConversion() int32 {
	if o == nil || IsNil(o.Conversion) {
		var ret int32
		return ret
	}
	return *o.Conversion
}

// GetConversionOk returns a tuple with the Conversion field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostingInfoType) GetConversionOk() (*int32, bool) {
	if o == nil || IsNil(o.Conversion) {
		return nil, false
	}
	return o.Conversion, true
}

// HasConversion returns a boolean if a field has been set.
func (o *PostingInfoType) HasConversion() bool {
	if o != nil && !IsNil(o.Conversion) {
		return true
	}

	return false
}

// SetConversion gets a reference to the given int32 and assigns it to the Conversion field.
func (o *PostingInfoType) SetConversion(v int32) {
	o.Conversion = &v
}

// GetReference returns the Reference field value if set, zero value otherwise.
func (o *PostingInfoType) GetReference() string {
	if o == nil || IsNil(o.Reference) {
		var ret string
		return ret
	}
	return *o.Reference
}

// GetReferenceOk returns a tuple with the Reference field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostingInfoType) GetReferenceOk() (*string, bool) {
	if o == nil || IsNil(o.Reference) {
		return nil, false
	}
	return o.Reference, true
}

// HasReference returns a boolean if a field has been set.
func (o *PostingInfoType) HasReference() bool {
	if o != nil && !IsNil(o.Reference) {
		return true
	}

	return false
}

// SetReference gets a reference to the given string and assigns it to the Reference field.
func (o *PostingInfoType) SetReference(v string) {
	o.Reference = &v
}

// GetSupplement returns the Supplement field value if set, zero value otherwise.
func (o *PostingInfoType) GetSupplement() string {
	if o == nil || IsNil(o.Supplement) {
		var ret string
		return ret
	}
	return *o.Supplement
}

// GetSupplementOk returns a tuple with the Supplement field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostingInfoType) GetSupplementOk() (*string, bool) {
	if o == nil || IsNil(o.Supplement) {
		return nil, false
	}
	return o.Supplement, true
}

// HasSupplement returns a boolean if a field has been set.
func (o *PostingInfoType) HasSupplement() bool {
	if o != nil && !IsNil(o.Supplement) {
		return true
	}

	return false
}

// SetSupplement gets a reference to the given string and assigns it to the Supplement field.
func (o *PostingInfoType) SetSupplement(v string) {
	o.Supplement = &v
}

// GetOverrideCreditLimit returns the OverrideCreditLimit field value if set, zero value otherwise.
func (o *PostingInfoType) GetOverrideCreditLimit() bool {
	if o == nil || IsNil(o.OverrideCreditLimit) {
		var ret bool
		return ret
	}
	return *o.OverrideCreditLimit
}

// GetOverrideCreditLimitOk returns a tuple with the OverrideCreditLimit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostingInfoType) GetOverrideCreditLimitOk() (*bool, bool) {
	if o == nil || IsNil(o.OverrideCreditLimit) {
		return nil, false
	}
	return o.OverrideCreditLimit, true
}

// HasOverrideCreditLimit returns a boolean if a field has been set.
func (o *PostingInfoType) HasOverrideCreditLimit() bool {
	if o != nil && !IsNil(o.OverrideCreditLimit) {
		return true
	}

	return false
}

// SetOverrideCreditLimit gets a reference to the given bool and assigns it to the OverrideCreditLimit field.
func (o *PostingInfoType) SetOverrideCreditLimit(v bool) {
	o.OverrideCreditLimit = &v
}

// GetNoPostFlag returns the NoPostFlag field value if set, zero value otherwise.
func (o *PostingInfoType) GetNoPostFlag() bool {
	if o == nil || IsNil(o.NoPostFlag) {
		var ret bool
		return ret
	}
	return *o.NoPostFlag
}

// GetNoPostFlagOk returns a tuple with the NoPostFlag field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostingInfoType) GetNoPostFlagOk() (*bool, bool) {
	if o == nil || IsNil(o.NoPostFlag) {
		return nil, false
	}
	return o.NoPostFlag, true
}

// HasNoPostFlag returns a boolean if a field has been set.
func (o *PostingInfoType) HasNoPostFlag() bool {
	if o != nil && !IsNil(o.NoPostFlag) {
		return true
	}

	return false
}

// SetNoPostFlag gets a reference to the given bool and assigns it to the NoPostFlag field.
func (o *PostingInfoType) SetNoPostFlag(v bool) {
	o.NoPostFlag = &v
}

// GetGeneratesTax returns the GeneratesTax field value if set, zero value otherwise.
func (o *PostingInfoType) GetGeneratesTax() bool {
	if o == nil || IsNil(o.GeneratesTax) {
		var ret bool
		return ret
	}
	return *o.GeneratesTax
}

// GetGeneratesTaxOk returns a tuple with the GeneratesTax field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostingInfoType) GetGeneratesTaxOk() (*bool, bool) {
	if o == nil || IsNil(o.GeneratesTax) {
		return nil, false
	}
	return o.GeneratesTax, true
}

// HasGeneratesTax returns a boolean if a field has been set.
func (o *PostingInfoType) HasGeneratesTax() bool {
	if o != nil && !IsNil(o.GeneratesTax) {
		return true
	}

	return false
}

// SetGeneratesTax gets a reference to the given bool and assigns it to the GeneratesTax field.
func (o *PostingInfoType) SetGeneratesTax(v bool) {
	o.GeneratesTax = &v
}

// GetDialedNumberMasking returns the DialedNumberMasking field value if set, zero value otherwise.
func (o *PostingInfoType) GetDialedNumberMasking() MaskDialNumberType {
	if o == nil || IsNil(o.DialedNumberMasking) {
		var ret MaskDialNumberType
		return ret
	}
	return *o.DialedNumberMasking
}

// GetDialedNumberMaskingOk returns a tuple with the DialedNumberMasking field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostingInfoType) GetDialedNumberMaskingOk() (*MaskDialNumberType, bool) {
	if o == nil || IsNil(o.DialedNumberMasking) {
		return nil, false
	}
	return o.DialedNumberMasking, true
}

// HasDialedNumberMasking returns a boolean if a field has been set.
func (o *PostingInfoType) HasDialedNumberMasking() bool {
	if o != nil && !IsNil(o.DialedNumberMasking) {
		return true
	}

	return false
}

// SetDialedNumberMasking gets a reference to the given MaskDialNumberType and assigns it to the DialedNumberMasking field.
func (o *PostingInfoType) SetDialedNumberMasking(v MaskDialNumberType) {
	o.DialedNumberMasking = &v
}

// GetArticleNoPrefix returns the ArticleNoPrefix field value if set, zero value otherwise.
func (o *PostingInfoType) GetArticleNoPrefix() bool {
	if o == nil || IsNil(o.ArticleNoPrefix) {
		var ret bool
		return ret
	}
	return *o.ArticleNoPrefix
}

// GetArticleNoPrefixOk returns a tuple with the ArticleNoPrefix field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostingInfoType) GetArticleNoPrefixOk() (*bool, bool) {
	if o == nil || IsNil(o.ArticleNoPrefix) {
		return nil, false
	}
	return o.ArticleNoPrefix, true
}

// HasArticleNoPrefix returns a boolean if a field has been set.
func (o *PostingInfoType) HasArticleNoPrefix() bool {
	if o != nil && !IsNil(o.ArticleNoPrefix) {
		return true
	}

	return false
}

// SetArticleNoPrefix gets a reference to the given bool and assigns it to the ArticleNoPrefix field.
func (o *PostingInfoType) SetArticleNoPrefix(v bool) {
	o.ArticleNoPrefix = &v
}

func (o PostingInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostingInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ReferenceField) {
		toSerialize["referenceField"] = o.ReferenceField
	}
	if !IsNil(o.ChargeScaling) {
		toSerialize["chargeScaling"] = o.ChargeScaling
	}
	if !IsNil(o.ZeroChargePostings) {
		toSerialize["zeroChargePostings"] = o.ZeroChargePostings
	}
	if !IsNil(o.Postings) {
		toSerialize["postings"] = o.Postings
	}
	if !IsNil(o.PostType) {
		toSerialize["postType"] = o.PostType
	}
	if !IsNil(o.Conversion) {
		toSerialize["conversion"] = o.Conversion
	}
	if !IsNil(o.Reference) {
		toSerialize["reference"] = o.Reference
	}
	if !IsNil(o.Supplement) {
		toSerialize["supplement"] = o.Supplement
	}
	if !IsNil(o.OverrideCreditLimit) {
		toSerialize["overrideCreditLimit"] = o.OverrideCreditLimit
	}
	if !IsNil(o.NoPostFlag) {
		toSerialize["noPostFlag"] = o.NoPostFlag
	}
	if !IsNil(o.GeneratesTax) {
		toSerialize["generatesTax"] = o.GeneratesTax
	}
	if !IsNil(o.DialedNumberMasking) {
		toSerialize["dialedNumberMasking"] = o.DialedNumberMasking
	}
	if !IsNil(o.ArticleNoPrefix) {
		toSerialize["articleNoPrefix"] = o.ArticleNoPrefix
	}
	return toSerialize, nil
}

type NullablePostingInfoType struct {
	value *PostingInfoType
	isSet bool
}

func (v NullablePostingInfoType) Get() *PostingInfoType {
	return v.value
}

func (v *NullablePostingInfoType) Set(val *PostingInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullablePostingInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullablePostingInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostingInfoType(val *PostingInfoType) *NullablePostingInfoType {
	return &NullablePostingInfoType{value: val, isSet: true}
}

func (v NullablePostingInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostingInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


