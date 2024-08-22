# RateClassCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RateClass** | Pointer to [**RateClassType**](RateClassType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRateClassCriteria

`func NewRateClassCriteria() *RateClassCriteria`

NewRateClassCriteria instantiates a new RateClassCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateClassCriteriaWithDefaults

`func NewRateClassCriteriaWithDefaults() *RateClassCriteria`

NewRateClassCriteriaWithDefaults instantiates a new RateClassCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RateClassCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RateClassCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RateClassCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RateClassCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRateClass

`func (o *RateClassCriteria) GetRateClass() RateClassType`

GetRateClass returns the RateClass field if non-nil, zero value otherwise.

### GetRateClassOk

`func (o *RateClassCriteria) GetRateClassOk() (*RateClassType, bool)`

GetRateClassOk returns a tuple with the RateClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateClass

`func (o *RateClassCriteria) SetRateClass(v RateClassType)`

SetRateClass sets RateClass field to given value.

### HasRateClass

`func (o *RateClassCriteria) HasRateClass() bool`

HasRateClass returns a boolean if a field has been set.

### GetWarnings

`func (o *RateClassCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RateClassCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RateClassCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RateClassCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


