# PurposeOfStaysCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**PurposeOfStays** | Pointer to [**[]PurposeOfStayType**](PurposeOfStayType.md) | List of Purpose Of Stays. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPurposeOfStaysCriteria

`func NewPurposeOfStaysCriteria() *PurposeOfStaysCriteria`

NewPurposeOfStaysCriteria instantiates a new PurposeOfStaysCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPurposeOfStaysCriteriaWithDefaults

`func NewPurposeOfStaysCriteriaWithDefaults() *PurposeOfStaysCriteria`

NewPurposeOfStaysCriteriaWithDefaults instantiates a new PurposeOfStaysCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PurposeOfStaysCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PurposeOfStaysCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PurposeOfStaysCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PurposeOfStaysCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPurposeOfStays

`func (o *PurposeOfStaysCriteria) GetPurposeOfStays() []PurposeOfStayType`

GetPurposeOfStays returns the PurposeOfStays field if non-nil, zero value otherwise.

### GetPurposeOfStaysOk

`func (o *PurposeOfStaysCriteria) GetPurposeOfStaysOk() (*[]PurposeOfStayType, bool)`

GetPurposeOfStaysOk returns a tuple with the PurposeOfStays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurposeOfStays

`func (o *PurposeOfStaysCriteria) SetPurposeOfStays(v []PurposeOfStayType)`

SetPurposeOfStays sets PurposeOfStays field to given value.

### HasPurposeOfStays

`func (o *PurposeOfStaysCriteria) HasPurposeOfStays() bool`

HasPurposeOfStays returns a boolean if a field has been set.

### GetWarnings

`func (o *PurposeOfStaysCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PurposeOfStaysCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PurposeOfStaysCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PurposeOfStaysCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


