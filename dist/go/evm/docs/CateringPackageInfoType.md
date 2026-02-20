# CateringPackageInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PkgCode** | Pointer to **string** | Package Code associated with the Catering Package. | [optional] 
**Description** | Pointer to [**TranslationTextType200**](TranslationTextType200.md) |  | [optional] 
**Duration** | Pointer to **int32** | Duration (in days) of the Catering Package. | [optional] 
**WebBookable** | Pointer to **bool** | Defines if web booking is allowed. | [optional] 
**IsTemplate** | Pointer to **bool** | Defines if Catering Package is a Template or not. | [optional] 

## Methods

### NewCateringPackageInfoType

`func NewCateringPackageInfoType() *CateringPackageInfoType`

NewCateringPackageInfoType instantiates a new CateringPackageInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringPackageInfoTypeWithDefaults

`func NewCateringPackageInfoTypeWithDefaults() *CateringPackageInfoType`

NewCateringPackageInfoTypeWithDefaults instantiates a new CateringPackageInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPkgCode

`func (o *CateringPackageInfoType) GetPkgCode() string`

GetPkgCode returns the PkgCode field if non-nil, zero value otherwise.

### GetPkgCodeOk

`func (o *CateringPackageInfoType) GetPkgCodeOk() (*string, bool)`

GetPkgCodeOk returns a tuple with the PkgCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPkgCode

`func (o *CateringPackageInfoType) SetPkgCode(v string)`

SetPkgCode sets PkgCode field to given value.

### HasPkgCode

`func (o *CateringPackageInfoType) HasPkgCode() bool`

HasPkgCode returns a boolean if a field has been set.

### GetDescription

`func (o *CateringPackageInfoType) GetDescription() TranslationTextType200`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CateringPackageInfoType) GetDescriptionOk() (*TranslationTextType200, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CateringPackageInfoType) SetDescription(v TranslationTextType200)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CateringPackageInfoType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDuration

`func (o *CateringPackageInfoType) GetDuration() int32`

GetDuration returns the Duration field if non-nil, zero value otherwise.

### GetDurationOk

`func (o *CateringPackageInfoType) GetDurationOk() (*int32, bool)`

GetDurationOk returns a tuple with the Duration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDuration

`func (o *CateringPackageInfoType) SetDuration(v int32)`

SetDuration sets Duration field to given value.

### HasDuration

`func (o *CateringPackageInfoType) HasDuration() bool`

HasDuration returns a boolean if a field has been set.

### GetWebBookable

`func (o *CateringPackageInfoType) GetWebBookable() bool`

GetWebBookable returns the WebBookable field if non-nil, zero value otherwise.

### GetWebBookableOk

`func (o *CateringPackageInfoType) GetWebBookableOk() (*bool, bool)`

GetWebBookableOk returns a tuple with the WebBookable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebBookable

`func (o *CateringPackageInfoType) SetWebBookable(v bool)`

SetWebBookable sets WebBookable field to given value.

### HasWebBookable

`func (o *CateringPackageInfoType) HasWebBookable() bool`

HasWebBookable returns a boolean if a field has been set.

### GetIsTemplate

`func (o *CateringPackageInfoType) GetIsTemplate() bool`

GetIsTemplate returns the IsTemplate field if non-nil, zero value otherwise.

### GetIsTemplateOk

`func (o *CateringPackageInfoType) GetIsTemplateOk() (*bool, bool)`

GetIsTemplateOk returns a tuple with the IsTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsTemplate

`func (o *CateringPackageInfoType) SetIsTemplate(v bool)`

SetIsTemplate sets IsTemplate field to given value.

### HasIsTemplate

`func (o *CateringPackageInfoType) HasIsTemplate() bool`

HasIsTemplate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


