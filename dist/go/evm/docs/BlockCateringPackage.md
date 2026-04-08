# BlockCateringPackage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**BlockCateringPackageType**](BlockCateringPackageType.md) |  | [optional] 
**RequestCount** | Pointer to **int32** | Indicates what number of retry attempt this request represents. If this is the original request, RetryCount should be set to 0. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success elementSpace to define a business error. | [optional] 

## Methods

### NewBlockCateringPackage

`func NewBlockCateringPackage() *BlockCateringPackage`

NewBlockCateringPackage instantiates a new BlockCateringPackage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockCateringPackageWithDefaults

`func NewBlockCateringPackageWithDefaults() *BlockCateringPackage`

NewBlockCateringPackageWithDefaults instantiates a new BlockCateringPackage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *BlockCateringPackage) GetCriteria() BlockCateringPackageType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *BlockCateringPackage) GetCriteriaOk() (*BlockCateringPackageType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *BlockCateringPackage) SetCriteria(v BlockCateringPackageType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *BlockCateringPackage) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetRequestCount

`func (o *BlockCateringPackage) GetRequestCount() int32`

GetRequestCount returns the RequestCount field if non-nil, zero value otherwise.

### GetRequestCountOk

`func (o *BlockCateringPackage) GetRequestCountOk() (*int32, bool)`

GetRequestCountOk returns a tuple with the RequestCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestCount

`func (o *BlockCateringPackage) SetRequestCount(v int32)`

SetRequestCount sets RequestCount field to given value.

### HasRequestCount

`func (o *BlockCateringPackage) HasRequestCount() bool`

HasRequestCount returns a boolean if a field has been set.

### GetLinks

`func (o *BlockCateringPackage) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockCateringPackage) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockCateringPackage) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockCateringPackage) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockCateringPackage) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockCateringPackage) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockCateringPackage) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockCateringPackage) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


