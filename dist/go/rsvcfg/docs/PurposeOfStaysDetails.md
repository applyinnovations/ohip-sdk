# PurposeOfStaysDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PurposeOfStays** | Pointer to [**[]PurposeOfStayType**](PurposeOfStayType.md) | List of Purpose Of Stays. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPurposeOfStaysDetails

`func NewPurposeOfStaysDetails() *PurposeOfStaysDetails`

NewPurposeOfStaysDetails instantiates a new PurposeOfStaysDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPurposeOfStaysDetailsWithDefaults

`func NewPurposeOfStaysDetailsWithDefaults() *PurposeOfStaysDetails`

NewPurposeOfStaysDetailsWithDefaults instantiates a new PurposeOfStaysDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPurposeOfStays

`func (o *PurposeOfStaysDetails) GetPurposeOfStays() []PurposeOfStayType`

GetPurposeOfStays returns the PurposeOfStays field if non-nil, zero value otherwise.

### GetPurposeOfStaysOk

`func (o *PurposeOfStaysDetails) GetPurposeOfStaysOk() (*[]PurposeOfStayType, bool)`

GetPurposeOfStaysOk returns a tuple with the PurposeOfStays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurposeOfStays

`func (o *PurposeOfStaysDetails) SetPurposeOfStays(v []PurposeOfStayType)`

SetPurposeOfStays sets PurposeOfStays field to given value.

### HasPurposeOfStays

`func (o *PurposeOfStaysDetails) HasPurposeOfStays() bool`

HasPurposeOfStays returns a boolean if a field has been set.

### GetLinks

`func (o *PurposeOfStaysDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PurposeOfStaysDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PurposeOfStaysDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PurposeOfStaysDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PurposeOfStaysDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PurposeOfStaysDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PurposeOfStaysDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PurposeOfStaysDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


