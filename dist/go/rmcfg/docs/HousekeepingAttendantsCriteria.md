# HousekeepingAttendantsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attendants** | Pointer to [**[]HousekeepingAttendantType**](HousekeepingAttendantType.md) | Housekeeping Attendant Information. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHousekeepingAttendantsCriteria

`func NewHousekeepingAttendantsCriteria() *HousekeepingAttendantsCriteria`

NewHousekeepingAttendantsCriteria instantiates a new HousekeepingAttendantsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingAttendantsCriteriaWithDefaults

`func NewHousekeepingAttendantsCriteriaWithDefaults() *HousekeepingAttendantsCriteria`

NewHousekeepingAttendantsCriteriaWithDefaults instantiates a new HousekeepingAttendantsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttendants

`func (o *HousekeepingAttendantsCriteria) GetAttendants() []HousekeepingAttendantType`

GetAttendants returns the Attendants field if non-nil, zero value otherwise.

### GetAttendantsOk

`func (o *HousekeepingAttendantsCriteria) GetAttendantsOk() (*[]HousekeepingAttendantType, bool)`

GetAttendantsOk returns a tuple with the Attendants field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendants

`func (o *HousekeepingAttendantsCriteria) SetAttendants(v []HousekeepingAttendantType)`

SetAttendants sets Attendants field to given value.

### HasAttendants

`func (o *HousekeepingAttendantsCriteria) HasAttendants() bool`

HasAttendants returns a boolean if a field has been set.

### GetLinks

`func (o *HousekeepingAttendantsCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HousekeepingAttendantsCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HousekeepingAttendantsCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HousekeepingAttendantsCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HousekeepingAttendantsCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HousekeepingAttendantsCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HousekeepingAttendantsCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HousekeepingAttendantsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


