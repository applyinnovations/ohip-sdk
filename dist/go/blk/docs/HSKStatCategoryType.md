# HSKStatCategoryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StatCode** | Pointer to **string** | Defines where this statistical data is applied. | [optional] 
**StatCodeClass** | Pointer to **string** | Classification of the statistical data. | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**StatSet** | Pointer to [**[]HSKStatSetType**](HSKStatSetType.md) |  | [optional] 
**StatCategoryCode** | Pointer to [**HSKStatCategoryCodeType**](HSKStatCategoryCodeType.md) |  | [optional] 

## Methods

### NewHSKStatCategoryType

`func NewHSKStatCategoryType() *HSKStatCategoryType`

NewHSKStatCategoryType instantiates a new HSKStatCategoryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHSKStatCategoryTypeWithDefaults

`func NewHSKStatCategoryTypeWithDefaults() *HSKStatCategoryType`

NewHSKStatCategoryTypeWithDefaults instantiates a new HSKStatCategoryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatCode

`func (o *HSKStatCategoryType) GetStatCode() string`

GetStatCode returns the StatCode field if non-nil, zero value otherwise.

### GetStatCodeOk

`func (o *HSKStatCategoryType) GetStatCodeOk() (*string, bool)`

GetStatCodeOk returns a tuple with the StatCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatCode

`func (o *HSKStatCategoryType) SetStatCode(v string)`

SetStatCode sets StatCode field to given value.

### HasStatCode

`func (o *HSKStatCategoryType) HasStatCode() bool`

HasStatCode returns a boolean if a field has been set.

### GetStatCodeClass

`func (o *HSKStatCategoryType) GetStatCodeClass() string`

GetStatCodeClass returns the StatCodeClass field if non-nil, zero value otherwise.

### GetStatCodeClassOk

`func (o *HSKStatCategoryType) GetStatCodeClassOk() (*string, bool)`

GetStatCodeClassOk returns a tuple with the StatCodeClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatCodeClass

`func (o *HSKStatCategoryType) SetStatCodeClass(v string)`

SetStatCodeClass sets StatCodeClass field to given value.

### HasStatCodeClass

`func (o *HSKStatCategoryType) HasStatCodeClass() bool`

HasStatCodeClass returns a boolean if a field has been set.

### GetDescription

`func (o *HSKStatCategoryType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *HSKStatCategoryType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *HSKStatCategoryType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *HSKStatCategoryType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetStatSet

`func (o *HSKStatCategoryType) GetStatSet() []HSKStatSetType`

GetStatSet returns the StatSet field if non-nil, zero value otherwise.

### GetStatSetOk

`func (o *HSKStatCategoryType) GetStatSetOk() (*[]HSKStatSetType, bool)`

GetStatSetOk returns a tuple with the StatSet field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatSet

`func (o *HSKStatCategoryType) SetStatSet(v []HSKStatSetType)`

SetStatSet sets StatSet field to given value.

### HasStatSet

`func (o *HSKStatCategoryType) HasStatSet() bool`

HasStatSet returns a boolean if a field has been set.

### GetStatCategoryCode

`func (o *HSKStatCategoryType) GetStatCategoryCode() HSKStatCategoryCodeType`

GetStatCategoryCode returns the StatCategoryCode field if non-nil, zero value otherwise.

### GetStatCategoryCodeOk

`func (o *HSKStatCategoryType) GetStatCategoryCodeOk() (*HSKStatCategoryCodeType, bool)`

GetStatCategoryCodeOk returns a tuple with the StatCategoryCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatCategoryCode

`func (o *HSKStatCategoryType) SetStatCategoryCode(v HSKStatCategoryCodeType)`

SetStatCategoryCode sets StatCategoryCode field to given value.

### HasStatCategoryCode

`func (o *HSKStatCategoryType) HasStatCategoryCode() bool`

HasStatCategoryCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


