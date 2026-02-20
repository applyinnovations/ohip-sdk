# FunctionSpaceAvailabilityDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FunctionSpacesAvailability** | Pointer to [**[]FunctionSpaceAvailabilityType**](FunctionSpaceAvailabilityType.md) | Collection of available Function Spaces. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success elementSpace to define a business error. | [optional] 

## Methods

### NewFunctionSpaceAvailabilityDetails

`func NewFunctionSpaceAvailabilityDetails() *FunctionSpaceAvailabilityDetails`

NewFunctionSpaceAvailabilityDetails instantiates a new FunctionSpaceAvailabilityDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFunctionSpaceAvailabilityDetailsWithDefaults

`func NewFunctionSpaceAvailabilityDetailsWithDefaults() *FunctionSpaceAvailabilityDetails`

NewFunctionSpaceAvailabilityDetailsWithDefaults instantiates a new FunctionSpaceAvailabilityDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFunctionSpacesAvailability

`func (o *FunctionSpaceAvailabilityDetails) GetFunctionSpacesAvailability() []FunctionSpaceAvailabilityType`

GetFunctionSpacesAvailability returns the FunctionSpacesAvailability field if non-nil, zero value otherwise.

### GetFunctionSpacesAvailabilityOk

`func (o *FunctionSpaceAvailabilityDetails) GetFunctionSpacesAvailabilityOk() (*[]FunctionSpaceAvailabilityType, bool)`

GetFunctionSpacesAvailabilityOk returns a tuple with the FunctionSpacesAvailability field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunctionSpacesAvailability

`func (o *FunctionSpaceAvailabilityDetails) SetFunctionSpacesAvailability(v []FunctionSpaceAvailabilityType)`

SetFunctionSpacesAvailability sets FunctionSpacesAvailability field to given value.

### HasFunctionSpacesAvailability

`func (o *FunctionSpaceAvailabilityDetails) HasFunctionSpacesAvailability() bool`

HasFunctionSpacesAvailability returns a boolean if a field has been set.

### GetLinks

`func (o *FunctionSpaceAvailabilityDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FunctionSpaceAvailabilityDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FunctionSpaceAvailabilityDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FunctionSpaceAvailabilityDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FunctionSpaceAvailabilityDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FunctionSpaceAvailabilityDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FunctionSpaceAvailabilityDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FunctionSpaceAvailabilityDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


