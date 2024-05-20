# RevenueGroupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Code is used to identify a Catering Revenue Group. | [optional] 
**DisplaySequence** | Pointer to **float32** | Sequence Number of the Catering Revenue Group. | [optional] 
**Inactive** | Pointer to **bool** | Indicates if the Catering Revenue Group is inactive. | [optional] 
**RevenueTypes** | Pointer to [**[]RevenueTypeType**](RevenueTypeType.md) | List of Revenue Types to be configured | [optional] 
**TranslatableDescription** | Pointer to [**TranslationTextType200**](TranslationTextType200.md) |  | [optional] 

## Methods

### NewRevenueGroupType

`func NewRevenueGroupType() *RevenueGroupType`

NewRevenueGroupType instantiates a new RevenueGroupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRevenueGroupTypeWithDefaults

`func NewRevenueGroupTypeWithDefaults() *RevenueGroupType`

NewRevenueGroupTypeWithDefaults instantiates a new RevenueGroupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *RevenueGroupType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *RevenueGroupType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *RevenueGroupType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *RevenueGroupType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *RevenueGroupType) GetDisplaySequence() float32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *RevenueGroupType) GetDisplaySequenceOk() (*float32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *RevenueGroupType) SetDisplaySequence(v float32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *RevenueGroupType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetInactive

`func (o *RevenueGroupType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *RevenueGroupType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *RevenueGroupType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *RevenueGroupType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetRevenueTypes

`func (o *RevenueGroupType) GetRevenueTypes() []RevenueTypeType`

GetRevenueTypes returns the RevenueTypes field if non-nil, zero value otherwise.

### GetRevenueTypesOk

`func (o *RevenueGroupType) GetRevenueTypesOk() (*[]RevenueTypeType, bool)`

GetRevenueTypesOk returns a tuple with the RevenueTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueTypes

`func (o *RevenueGroupType) SetRevenueTypes(v []RevenueTypeType)`

SetRevenueTypes sets RevenueTypes field to given value.

### HasRevenueTypes

`func (o *RevenueGroupType) HasRevenueTypes() bool`

HasRevenueTypes returns a boolean if a field has been set.

### GetTranslatableDescription

`func (o *RevenueGroupType) GetTranslatableDescription() TranslationTextType200`

GetTranslatableDescription returns the TranslatableDescription field if non-nil, zero value otherwise.

### GetTranslatableDescriptionOk

`func (o *RevenueGroupType) GetTranslatableDescriptionOk() (*TranslationTextType200, bool)`

GetTranslatableDescriptionOk returns a tuple with the TranslatableDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslatableDescription

`func (o *RevenueGroupType) SetTranslatableDescription(v TranslationTextType200)`

SetTranslatableDescription sets TranslatableDescription field to given value.

### HasTranslatableDescription

`func (o *RevenueGroupType) HasTranslatableDescription() bool`

HasTranslatableDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


