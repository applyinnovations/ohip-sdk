# PurposeOfStaysToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PurposeOfStays** | Pointer to [**[]PurposeOfStayType**](PurposeOfStayType.md) | List of Purpose Of Stays. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPurposeOfStaysToBeChanged

`func NewPurposeOfStaysToBeChanged() *PurposeOfStaysToBeChanged`

NewPurposeOfStaysToBeChanged instantiates a new PurposeOfStaysToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPurposeOfStaysToBeChangedWithDefaults

`func NewPurposeOfStaysToBeChangedWithDefaults() *PurposeOfStaysToBeChanged`

NewPurposeOfStaysToBeChangedWithDefaults instantiates a new PurposeOfStaysToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPurposeOfStays

`func (o *PurposeOfStaysToBeChanged) GetPurposeOfStays() []PurposeOfStayType`

GetPurposeOfStays returns the PurposeOfStays field if non-nil, zero value otherwise.

### GetPurposeOfStaysOk

`func (o *PurposeOfStaysToBeChanged) GetPurposeOfStaysOk() (*[]PurposeOfStayType, bool)`

GetPurposeOfStaysOk returns a tuple with the PurposeOfStays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurposeOfStays

`func (o *PurposeOfStaysToBeChanged) SetPurposeOfStays(v []PurposeOfStayType)`

SetPurposeOfStays sets PurposeOfStays field to given value.

### HasPurposeOfStays

`func (o *PurposeOfStaysToBeChanged) HasPurposeOfStays() bool`

HasPurposeOfStays returns a boolean if a field has been set.

### GetLinks

`func (o *PurposeOfStaysToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PurposeOfStaysToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PurposeOfStaysToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PurposeOfStaysToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PurposeOfStaysToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PurposeOfStaysToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PurposeOfStaysToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PurposeOfStaysToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


