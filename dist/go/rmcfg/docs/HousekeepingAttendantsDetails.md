# HousekeepingAttendantsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HousekeepingAttendants** | Pointer to [**[]HousekeepingAttendantType**](HousekeepingAttendantType.md) | Housekeeping Attendant Information. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHousekeepingAttendantsDetails

`func NewHousekeepingAttendantsDetails() *HousekeepingAttendantsDetails`

NewHousekeepingAttendantsDetails instantiates a new HousekeepingAttendantsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingAttendantsDetailsWithDefaults

`func NewHousekeepingAttendantsDetailsWithDefaults() *HousekeepingAttendantsDetails`

NewHousekeepingAttendantsDetailsWithDefaults instantiates a new HousekeepingAttendantsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHousekeepingAttendants

`func (o *HousekeepingAttendantsDetails) GetHousekeepingAttendants() []HousekeepingAttendantType`

GetHousekeepingAttendants returns the HousekeepingAttendants field if non-nil, zero value otherwise.

### GetHousekeepingAttendantsOk

`func (o *HousekeepingAttendantsDetails) GetHousekeepingAttendantsOk() (*[]HousekeepingAttendantType, bool)`

GetHousekeepingAttendantsOk returns a tuple with the HousekeepingAttendants field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingAttendants

`func (o *HousekeepingAttendantsDetails) SetHousekeepingAttendants(v []HousekeepingAttendantType)`

SetHousekeepingAttendants sets HousekeepingAttendants field to given value.

### HasHousekeepingAttendants

`func (o *HousekeepingAttendantsDetails) HasHousekeepingAttendants() bool`

HasHousekeepingAttendants returns a boolean if a field has been set.

### GetLinks

`func (o *HousekeepingAttendantsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HousekeepingAttendantsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HousekeepingAttendantsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HousekeepingAttendantsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HousekeepingAttendantsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HousekeepingAttendantsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HousekeepingAttendantsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HousekeepingAttendantsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


