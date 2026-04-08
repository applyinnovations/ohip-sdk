# RateClassToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RateClass** | Pointer to [**RateClassType**](RateClassType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRateClassToBeChanged

`func NewRateClassToBeChanged() *RateClassToBeChanged`

NewRateClassToBeChanged instantiates a new RateClassToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateClassToBeChangedWithDefaults

`func NewRateClassToBeChangedWithDefaults() *RateClassToBeChanged`

NewRateClassToBeChangedWithDefaults instantiates a new RateClassToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRateClass

`func (o *RateClassToBeChanged) GetRateClass() RateClassType`

GetRateClass returns the RateClass field if non-nil, zero value otherwise.

### GetRateClassOk

`func (o *RateClassToBeChanged) GetRateClassOk() (*RateClassType, bool)`

GetRateClassOk returns a tuple with the RateClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateClass

`func (o *RateClassToBeChanged) SetRateClass(v RateClassType)`

SetRateClass sets RateClass field to given value.

### HasRateClass

`func (o *RateClassToBeChanged) HasRateClass() bool`

HasRateClass returns a boolean if a field has been set.

### GetLinks

`func (o *RateClassToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RateClassToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RateClassToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RateClassToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RateClassToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RateClassToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RateClassToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RateClassToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


