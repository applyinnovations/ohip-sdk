# StatisticCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Statistic code description. | [optional] 
**StatCategoryCode** | Pointer to **string** | Category Code category of StatCode attribute (e.g. Market Segment). | [optional] 
**StatCode** | Pointer to **string** | Actual code used by the system to collect the statistics (e.g. CORP, RACK if category is Market Segment). | [optional] 
**StatCodeClass** | Pointer to **string** | Class grouping of StatCode attribute. | [optional] 
**StatisticSetsType** | Pointer to [**[]StatisticSetType**](StatisticSetType.md) | Collection of statistic summary data. | [optional] 

## Methods

### NewStatisticCodeType

`func NewStatisticCodeType() *StatisticCodeType`

NewStatisticCodeType instantiates a new StatisticCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStatisticCodeTypeWithDefaults

`func NewStatisticCodeTypeWithDefaults() *StatisticCodeType`

NewStatisticCodeTypeWithDefaults instantiates a new StatisticCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *StatisticCodeType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *StatisticCodeType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *StatisticCodeType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *StatisticCodeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetStatCategoryCode

`func (o *StatisticCodeType) GetStatCategoryCode() string`

GetStatCategoryCode returns the StatCategoryCode field if non-nil, zero value otherwise.

### GetStatCategoryCodeOk

`func (o *StatisticCodeType) GetStatCategoryCodeOk() (*string, bool)`

GetStatCategoryCodeOk returns a tuple with the StatCategoryCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatCategoryCode

`func (o *StatisticCodeType) SetStatCategoryCode(v string)`

SetStatCategoryCode sets StatCategoryCode field to given value.

### HasStatCategoryCode

`func (o *StatisticCodeType) HasStatCategoryCode() bool`

HasStatCategoryCode returns a boolean if a field has been set.

### GetStatCode

`func (o *StatisticCodeType) GetStatCode() string`

GetStatCode returns the StatCode field if non-nil, zero value otherwise.

### GetStatCodeOk

`func (o *StatisticCodeType) GetStatCodeOk() (*string, bool)`

GetStatCodeOk returns a tuple with the StatCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatCode

`func (o *StatisticCodeType) SetStatCode(v string)`

SetStatCode sets StatCode field to given value.

### HasStatCode

`func (o *StatisticCodeType) HasStatCode() bool`

HasStatCode returns a boolean if a field has been set.

### GetStatCodeClass

`func (o *StatisticCodeType) GetStatCodeClass() string`

GetStatCodeClass returns the StatCodeClass field if non-nil, zero value otherwise.

### GetStatCodeClassOk

`func (o *StatisticCodeType) GetStatCodeClassOk() (*string, bool)`

GetStatCodeClassOk returns a tuple with the StatCodeClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatCodeClass

`func (o *StatisticCodeType) SetStatCodeClass(v string)`

SetStatCodeClass sets StatCodeClass field to given value.

### HasStatCodeClass

`func (o *StatisticCodeType) HasStatCodeClass() bool`

HasStatCodeClass returns a boolean if a field has been set.

### GetStatisticSetsType

`func (o *StatisticCodeType) GetStatisticSetsType() []StatisticSetType`

GetStatisticSetsType returns the StatisticSetsType field if non-nil, zero value otherwise.

### GetStatisticSetsTypeOk

`func (o *StatisticCodeType) GetStatisticSetsTypeOk() (*[]StatisticSetType, bool)`

GetStatisticSetsTypeOk returns a tuple with the StatisticSetsType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatisticSetsType

`func (o *StatisticCodeType) SetStatisticSetsType(v []StatisticSetType)`

SetStatisticSetsType sets StatisticSetsType field to given value.

### HasStatisticSetsType

`func (o *StatisticCodeType) HasStatisticSetsType() bool`

HasStatisticSetsType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


