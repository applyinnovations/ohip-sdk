# HousekeepingAttendantsToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attendants** | Pointer to [**[]HousekeepingAttendantType**](HousekeepingAttendantType.md) | Housekeeping Attendant Information. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHousekeepingAttendantsToBeChanged

`func NewHousekeepingAttendantsToBeChanged() *HousekeepingAttendantsToBeChanged`

NewHousekeepingAttendantsToBeChanged instantiates a new HousekeepingAttendantsToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingAttendantsToBeChangedWithDefaults

`func NewHousekeepingAttendantsToBeChangedWithDefaults() *HousekeepingAttendantsToBeChanged`

NewHousekeepingAttendantsToBeChangedWithDefaults instantiates a new HousekeepingAttendantsToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttendants

`func (o *HousekeepingAttendantsToBeChanged) GetAttendants() []HousekeepingAttendantType`

GetAttendants returns the Attendants field if non-nil, zero value otherwise.

### GetAttendantsOk

`func (o *HousekeepingAttendantsToBeChanged) GetAttendantsOk() (*[]HousekeepingAttendantType, bool)`

GetAttendantsOk returns a tuple with the Attendants field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendants

`func (o *HousekeepingAttendantsToBeChanged) SetAttendants(v []HousekeepingAttendantType)`

SetAttendants sets Attendants field to given value.

### HasAttendants

`func (o *HousekeepingAttendantsToBeChanged) HasAttendants() bool`

HasAttendants returns a boolean if a field has been set.

### GetLinks

`func (o *HousekeepingAttendantsToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HousekeepingAttendantsToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HousekeepingAttendantsToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HousekeepingAttendantsToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HousekeepingAttendantsToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HousekeepingAttendantsToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HousekeepingAttendantsToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HousekeepingAttendantsToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


