# AttendantSchedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttendantsScheduleInfo** | Pointer to [**HousekeepingAttendantsScheduleType**](HousekeepingAttendantsScheduleType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAttendantSchedule

`func NewAttendantSchedule() *AttendantSchedule`

NewAttendantSchedule instantiates a new AttendantSchedule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttendantScheduleWithDefaults

`func NewAttendantScheduleWithDefaults() *AttendantSchedule`

NewAttendantScheduleWithDefaults instantiates a new AttendantSchedule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttendantsScheduleInfo

`func (o *AttendantSchedule) GetAttendantsScheduleInfo() HousekeepingAttendantsScheduleType`

GetAttendantsScheduleInfo returns the AttendantsScheduleInfo field if non-nil, zero value otherwise.

### GetAttendantsScheduleInfoOk

`func (o *AttendantSchedule) GetAttendantsScheduleInfoOk() (*HousekeepingAttendantsScheduleType, bool)`

GetAttendantsScheduleInfoOk returns a tuple with the AttendantsScheduleInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendantsScheduleInfo

`func (o *AttendantSchedule) SetAttendantsScheduleInfo(v HousekeepingAttendantsScheduleType)`

SetAttendantsScheduleInfo sets AttendantsScheduleInfo field to given value.

### HasAttendantsScheduleInfo

`func (o *AttendantSchedule) HasAttendantsScheduleInfo() bool`

HasAttendantsScheduleInfo returns a boolean if a field has been set.

### GetLinks

`func (o *AttendantSchedule) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AttendantSchedule) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AttendantSchedule) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AttendantSchedule) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AttendantSchedule) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AttendantSchedule) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AttendantSchedule) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AttendantSchedule) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


