# GuestHousekeepingInstructions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuestHouseKeepingInstructions** | Pointer to [**ResHousekeepingType**](ResHousekeepingType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewGuestHousekeepingInstructions

`func NewGuestHousekeepingInstructions() *GuestHousekeepingInstructions`

NewGuestHousekeepingInstructions instantiates a new GuestHousekeepingInstructions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGuestHousekeepingInstructionsWithDefaults

`func NewGuestHousekeepingInstructionsWithDefaults() *GuestHousekeepingInstructions`

NewGuestHousekeepingInstructionsWithDefaults instantiates a new GuestHousekeepingInstructions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuestHouseKeepingInstructions

`func (o *GuestHousekeepingInstructions) GetGuestHouseKeepingInstructions() ResHousekeepingType`

GetGuestHouseKeepingInstructions returns the GuestHouseKeepingInstructions field if non-nil, zero value otherwise.

### GetGuestHouseKeepingInstructionsOk

`func (o *GuestHousekeepingInstructions) GetGuestHouseKeepingInstructionsOk() (*ResHousekeepingType, bool)`

GetGuestHouseKeepingInstructionsOk returns a tuple with the GuestHouseKeepingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestHouseKeepingInstructions

`func (o *GuestHousekeepingInstructions) SetGuestHouseKeepingInstructions(v ResHousekeepingType)`

SetGuestHouseKeepingInstructions sets GuestHouseKeepingInstructions field to given value.

### HasGuestHouseKeepingInstructions

`func (o *GuestHousekeepingInstructions) HasGuestHouseKeepingInstructions() bool`

HasGuestHouseKeepingInstructions returns a boolean if a field has been set.

### GetLinks

`func (o *GuestHousekeepingInstructions) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *GuestHousekeepingInstructions) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *GuestHousekeepingInstructions) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *GuestHousekeepingInstructions) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *GuestHousekeepingInstructions) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *GuestHousekeepingInstructions) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *GuestHousekeepingInstructions) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *GuestHousekeepingInstructions) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


