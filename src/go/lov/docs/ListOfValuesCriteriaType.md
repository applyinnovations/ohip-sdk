# ListOfValuesCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExcludeCodeList** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**IncludeInactive** | Pointer to **bool** | Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. | [optional] 
**ItemCodes** | Pointer to **[]string** |  | [optional] 
**LovName** | Pointer to **string** | The name of the LOV to fetch. | [optional] 
**Parameters** | Pointer to [**ParametersType**](ParametersType.md) |  | [optional] 

## Methods

### NewListOfValuesCriteriaType

`func NewListOfValuesCriteriaType() *ListOfValuesCriteriaType`

NewListOfValuesCriteriaType instantiates a new ListOfValuesCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListOfValuesCriteriaTypeWithDefaults

`func NewListOfValuesCriteriaTypeWithDefaults() *ListOfValuesCriteriaType`

NewListOfValuesCriteriaTypeWithDefaults instantiates a new ListOfValuesCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExcludeCodeList

`func (o *ListOfValuesCriteriaType) GetExcludeCodeList() CodeListType`

GetExcludeCodeList returns the ExcludeCodeList field if non-nil, zero value otherwise.

### GetExcludeCodeListOk

`func (o *ListOfValuesCriteriaType) GetExcludeCodeListOk() (*CodeListType, bool)`

GetExcludeCodeListOk returns a tuple with the ExcludeCodeList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeCodeList

`func (o *ListOfValuesCriteriaType) SetExcludeCodeList(v CodeListType)`

SetExcludeCodeList sets ExcludeCodeList field to given value.

### HasExcludeCodeList

`func (o *ListOfValuesCriteriaType) HasExcludeCodeList() bool`

HasExcludeCodeList returns a boolean if a field has been set.

### GetIncludeInactive

`func (o *ListOfValuesCriteriaType) GetIncludeInactive() bool`

GetIncludeInactive returns the IncludeInactive field if non-nil, zero value otherwise.

### GetIncludeInactiveOk

`func (o *ListOfValuesCriteriaType) GetIncludeInactiveOk() (*bool, bool)`

GetIncludeInactiveOk returns a tuple with the IncludeInactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeInactive

`func (o *ListOfValuesCriteriaType) SetIncludeInactive(v bool)`

SetIncludeInactive sets IncludeInactive field to given value.

### HasIncludeInactive

`func (o *ListOfValuesCriteriaType) HasIncludeInactive() bool`

HasIncludeInactive returns a boolean if a field has been set.

### GetItemCodes

`func (o *ListOfValuesCriteriaType) GetItemCodes() []string`

GetItemCodes returns the ItemCodes field if non-nil, zero value otherwise.

### GetItemCodesOk

`func (o *ListOfValuesCriteriaType) GetItemCodesOk() (*[]string, bool)`

GetItemCodesOk returns a tuple with the ItemCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemCodes

`func (o *ListOfValuesCriteriaType) SetItemCodes(v []string)`

SetItemCodes sets ItemCodes field to given value.

### HasItemCodes

`func (o *ListOfValuesCriteriaType) HasItemCodes() bool`

HasItemCodes returns a boolean if a field has been set.

### GetLovName

`func (o *ListOfValuesCriteriaType) GetLovName() string`

GetLovName returns the LovName field if non-nil, zero value otherwise.

### GetLovNameOk

`func (o *ListOfValuesCriteriaType) GetLovNameOk() (*string, bool)`

GetLovNameOk returns a tuple with the LovName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLovName

`func (o *ListOfValuesCriteriaType) SetLovName(v string)`

SetLovName sets LovName field to given value.

### HasLovName

`func (o *ListOfValuesCriteriaType) HasLovName() bool`

HasLovName returns a boolean if a field has been set.

### GetParameters

`func (o *ListOfValuesCriteriaType) GetParameters() ParametersType`

GetParameters returns the Parameters field if non-nil, zero value otherwise.

### GetParametersOk

`func (o *ListOfValuesCriteriaType) GetParametersOk() (*ParametersType, bool)`

GetParametersOk returns a tuple with the Parameters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameters

`func (o *ListOfValuesCriteriaType) SetParameters(v ParametersType)`

SetParameters sets Parameters field to given value.

### HasParameters

`func (o *ListOfValuesCriteriaType) HasParameters() bool`

HasParameters returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


