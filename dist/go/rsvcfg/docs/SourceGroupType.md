# SourceGroupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to [**TranslationTextType50**](TranslationTextType50.md) |  | [optional] 
**Sequence** | Pointer to **int32** | Display sequence for the code type. | [optional] 
**Code** | Pointer to **string** | Code for the code type. | [optional] 
**Inactive** | Pointer to **bool** | Indicates the code type is inactive or not. | [optional] 
**HotelId** | Pointer to **string** | Hotel code for the code type. | [optional] 
**SourceCodes** | Pointer to [**[]SourceCodeType**](SourceCodeType.md) | Collection of Source Codes. | [optional] 
**Central** | Pointer to **bool** | Indicates if market code is originated from Central. | [optional] 
**ManagedBy** | Pointer to [**ManagedByOptions**](ManagedByOptions.md) |  | [optional] 

## Methods

### NewSourceGroupType

`func NewSourceGroupType() *SourceGroupType`

NewSourceGroupType instantiates a new SourceGroupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceGroupTypeWithDefaults

`func NewSourceGroupTypeWithDefaults() *SourceGroupType`

NewSourceGroupTypeWithDefaults instantiates a new SourceGroupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *SourceGroupType) GetDescription() TranslationTextType50`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SourceGroupType) GetDescriptionOk() (*TranslationTextType50, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SourceGroupType) SetDescription(v TranslationTextType50)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *SourceGroupType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSequence

`func (o *SourceGroupType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *SourceGroupType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *SourceGroupType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *SourceGroupType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetCode

`func (o *SourceGroupType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *SourceGroupType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *SourceGroupType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *SourceGroupType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetInactive

`func (o *SourceGroupType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *SourceGroupType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *SourceGroupType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *SourceGroupType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetHotelId

`func (o *SourceGroupType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *SourceGroupType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *SourceGroupType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *SourceGroupType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetSourceCodes

`func (o *SourceGroupType) GetSourceCodes() []SourceCodeType`

GetSourceCodes returns the SourceCodes field if non-nil, zero value otherwise.

### GetSourceCodesOk

`func (o *SourceGroupType) GetSourceCodesOk() (*[]SourceCodeType, bool)`

GetSourceCodesOk returns a tuple with the SourceCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCodes

`func (o *SourceGroupType) SetSourceCodes(v []SourceCodeType)`

SetSourceCodes sets SourceCodes field to given value.

### HasSourceCodes

`func (o *SourceGroupType) HasSourceCodes() bool`

HasSourceCodes returns a boolean if a field has been set.

### GetCentral

`func (o *SourceGroupType) GetCentral() bool`

GetCentral returns the Central field if non-nil, zero value otherwise.

### GetCentralOk

`func (o *SourceGroupType) GetCentralOk() (*bool, bool)`

GetCentralOk returns a tuple with the Central field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCentral

`func (o *SourceGroupType) SetCentral(v bool)`

SetCentral sets Central field to given value.

### HasCentral

`func (o *SourceGroupType) HasCentral() bool`

HasCentral returns a boolean if a field has been set.

### GetManagedBy

`func (o *SourceGroupType) GetManagedBy() ManagedByOptions`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *SourceGroupType) GetManagedByOk() (*ManagedByOptions, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *SourceGroupType) SetManagedBy(v ManagedByOptions)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *SourceGroupType) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


