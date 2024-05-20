# ActivityStatCategoryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** |  | [optional] 
**StatCategoryCode** | Pointer to [**ActivityStatCategoryCodeType**](ActivityStatCategoryCodeType.md) |  | [optional] 
**StatCode** | Pointer to **string** | Defines where this statistical data is applied. | [optional] 
**StatCodeClass** | Pointer to **string** | Classification of the statistical data. | [optional] 
**StatSet** | Pointer to [**[]ActivityStatSetType**](ActivityStatSetType.md) |  | [optional] 

## Methods

### NewActivityStatCategoryType

`func NewActivityStatCategoryType() *ActivityStatCategoryType`

NewActivityStatCategoryType instantiates a new ActivityStatCategoryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityStatCategoryTypeWithDefaults

`func NewActivityStatCategoryTypeWithDefaults() *ActivityStatCategoryType`

NewActivityStatCategoryTypeWithDefaults instantiates a new ActivityStatCategoryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *ActivityStatCategoryType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ActivityStatCategoryType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ActivityStatCategoryType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ActivityStatCategoryType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetStatCategoryCode

`func (o *ActivityStatCategoryType) GetStatCategoryCode() ActivityStatCategoryCodeType`

GetStatCategoryCode returns the StatCategoryCode field if non-nil, zero value otherwise.

### GetStatCategoryCodeOk

`func (o *ActivityStatCategoryType) GetStatCategoryCodeOk() (*ActivityStatCategoryCodeType, bool)`

GetStatCategoryCodeOk returns a tuple with the StatCategoryCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatCategoryCode

`func (o *ActivityStatCategoryType) SetStatCategoryCode(v ActivityStatCategoryCodeType)`

SetStatCategoryCode sets StatCategoryCode field to given value.

### HasStatCategoryCode

`func (o *ActivityStatCategoryType) HasStatCategoryCode() bool`

HasStatCategoryCode returns a boolean if a field has been set.

### GetStatCode

`func (o *ActivityStatCategoryType) GetStatCode() string`

GetStatCode returns the StatCode field if non-nil, zero value otherwise.

### GetStatCodeOk

`func (o *ActivityStatCategoryType) GetStatCodeOk() (*string, bool)`

GetStatCodeOk returns a tuple with the StatCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatCode

`func (o *ActivityStatCategoryType) SetStatCode(v string)`

SetStatCode sets StatCode field to given value.

### HasStatCode

`func (o *ActivityStatCategoryType) HasStatCode() bool`

HasStatCode returns a boolean if a field has been set.

### GetStatCodeClass

`func (o *ActivityStatCategoryType) GetStatCodeClass() string`

GetStatCodeClass returns the StatCodeClass field if non-nil, zero value otherwise.

### GetStatCodeClassOk

`func (o *ActivityStatCategoryType) GetStatCodeClassOk() (*string, bool)`

GetStatCodeClassOk returns a tuple with the StatCodeClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatCodeClass

`func (o *ActivityStatCategoryType) SetStatCodeClass(v string)`

SetStatCodeClass sets StatCodeClass field to given value.

### HasStatCodeClass

`func (o *ActivityStatCategoryType) HasStatCodeClass() bool`

HasStatCodeClass returns a boolean if a field has been set.

### GetStatSet

`func (o *ActivityStatCategoryType) GetStatSet() []ActivityStatSetType`

GetStatSet returns the StatSet field if non-nil, zero value otherwise.

### GetStatSetOk

`func (o *ActivityStatCategoryType) GetStatSetOk() (*[]ActivityStatSetType, bool)`

GetStatSetOk returns a tuple with the StatSet field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatSet

`func (o *ActivityStatCategoryType) SetStatSet(v []ActivityStatSetType)`

SetStatSet sets StatSet field to given value.

### HasStatSet

`func (o *ActivityStatCategoryType) HasStatSet() bool`

HasStatSet returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


