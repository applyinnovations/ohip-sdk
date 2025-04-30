# ReprintCommissionCheckByRange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**ReprintCommissionCheckRangeCriteriaType**](ReprintCommissionCheckRangeCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReprintCommissionCheckByRange

`func NewReprintCommissionCheckByRange() *ReprintCommissionCheckByRange`

NewReprintCommissionCheckByRange instantiates a new ReprintCommissionCheckByRange object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReprintCommissionCheckByRangeWithDefaults

`func NewReprintCommissionCheckByRangeWithDefaults() *ReprintCommissionCheckByRange`

NewReprintCommissionCheckByRangeWithDefaults instantiates a new ReprintCommissionCheckByRange object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *ReprintCommissionCheckByRange) GetCriteria() ReprintCommissionCheckRangeCriteriaType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *ReprintCommissionCheckByRange) GetCriteriaOk() (*ReprintCommissionCheckRangeCriteriaType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *ReprintCommissionCheckByRange) SetCriteria(v ReprintCommissionCheckRangeCriteriaType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *ReprintCommissionCheckByRange) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *ReprintCommissionCheckByRange) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReprintCommissionCheckByRange) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReprintCommissionCheckByRange) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReprintCommissionCheckByRange) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ReprintCommissionCheckByRange) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReprintCommissionCheckByRange) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReprintCommissionCheckByRange) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReprintCommissionCheckByRange) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


