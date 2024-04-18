# GuestHousekeepingServiceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuestHousekeepingInstructions** | Pointer to [**ResHousekeepingSetType**](ResHousekeepingSetType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewGuestHousekeepingServiceRequest

`func NewGuestHousekeepingServiceRequest() *GuestHousekeepingServiceRequest`

NewGuestHousekeepingServiceRequest instantiates a new GuestHousekeepingServiceRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGuestHousekeepingServiceRequestWithDefaults

`func NewGuestHousekeepingServiceRequestWithDefaults() *GuestHousekeepingServiceRequest`

NewGuestHousekeepingServiceRequestWithDefaults instantiates a new GuestHousekeepingServiceRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuestHousekeepingInstructions

`func (o *GuestHousekeepingServiceRequest) GetGuestHousekeepingInstructions() ResHousekeepingSetType`

GetGuestHousekeepingInstructions returns the GuestHousekeepingInstructions field if non-nil, zero value otherwise.

### GetGuestHousekeepingInstructionsOk

`func (o *GuestHousekeepingServiceRequest) GetGuestHousekeepingInstructionsOk() (*ResHousekeepingSetType, bool)`

GetGuestHousekeepingInstructionsOk returns a tuple with the GuestHousekeepingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestHousekeepingInstructions

`func (o *GuestHousekeepingServiceRequest) SetGuestHousekeepingInstructions(v ResHousekeepingSetType)`

SetGuestHousekeepingInstructions sets GuestHousekeepingInstructions field to given value.

### HasGuestHousekeepingInstructions

`func (o *GuestHousekeepingServiceRequest) HasGuestHousekeepingInstructions() bool`

HasGuestHousekeepingInstructions returns a boolean if a field has been set.

### GetLinks

`func (o *GuestHousekeepingServiceRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *GuestHousekeepingServiceRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *GuestHousekeepingServiceRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *GuestHousekeepingServiceRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *GuestHousekeepingServiceRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *GuestHousekeepingServiceRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *GuestHousekeepingServiceRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *GuestHousekeepingServiceRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


