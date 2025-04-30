# TemplateHousekeepingRoomSchedulesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateHousekeepingRoomSchedules** | Pointer to [**[]ConfigTemplateHousekeepingRoomScheduleType**](ConfigTemplateHousekeepingRoomScheduleType.md) | This type holds a collection of housekeeping task schedules configured at template level. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateHousekeepingRoomSchedulesDetails

`func NewTemplateHousekeepingRoomSchedulesDetails() *TemplateHousekeepingRoomSchedulesDetails`

NewTemplateHousekeepingRoomSchedulesDetails instantiates a new TemplateHousekeepingRoomSchedulesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateHousekeepingRoomSchedulesDetailsWithDefaults

`func NewTemplateHousekeepingRoomSchedulesDetailsWithDefaults() *TemplateHousekeepingRoomSchedulesDetails`

NewTemplateHousekeepingRoomSchedulesDetailsWithDefaults instantiates a new TemplateHousekeepingRoomSchedulesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplateHousekeepingRoomSchedules

`func (o *TemplateHousekeepingRoomSchedulesDetails) GetTemplateHousekeepingRoomSchedules() []ConfigTemplateHousekeepingRoomScheduleType`

GetTemplateHousekeepingRoomSchedules returns the TemplateHousekeepingRoomSchedules field if non-nil, zero value otherwise.

### GetTemplateHousekeepingRoomSchedulesOk

`func (o *TemplateHousekeepingRoomSchedulesDetails) GetTemplateHousekeepingRoomSchedulesOk() (*[]ConfigTemplateHousekeepingRoomScheduleType, bool)`

GetTemplateHousekeepingRoomSchedulesOk returns a tuple with the TemplateHousekeepingRoomSchedules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateHousekeepingRoomSchedules

`func (o *TemplateHousekeepingRoomSchedulesDetails) SetTemplateHousekeepingRoomSchedules(v []ConfigTemplateHousekeepingRoomScheduleType)`

SetTemplateHousekeepingRoomSchedules sets TemplateHousekeepingRoomSchedules field to given value.

### HasTemplateHousekeepingRoomSchedules

`func (o *TemplateHousekeepingRoomSchedulesDetails) HasTemplateHousekeepingRoomSchedules() bool`

HasTemplateHousekeepingRoomSchedules returns a boolean if a field has been set.

### GetLinks

`func (o *TemplateHousekeepingRoomSchedulesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateHousekeepingRoomSchedulesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateHousekeepingRoomSchedulesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateHousekeepingRoomSchedulesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateHousekeepingRoomSchedulesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateHousekeepingRoomSchedulesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateHousekeepingRoomSchedulesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateHousekeepingRoomSchedulesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


