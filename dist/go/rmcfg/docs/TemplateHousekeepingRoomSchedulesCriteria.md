# TemplateHousekeepingRoomSchedulesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateHousekeepingRoomSchedules** | Pointer to [**[]ConfigTemplateHousekeepingRoomScheduleType**](ConfigTemplateHousekeepingRoomScheduleType.md) | This type holds a collection of housekeeping task schedules configured at template level. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateHousekeepingRoomSchedulesCriteria

`func NewTemplateHousekeepingRoomSchedulesCriteria() *TemplateHousekeepingRoomSchedulesCriteria`

NewTemplateHousekeepingRoomSchedulesCriteria instantiates a new TemplateHousekeepingRoomSchedulesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateHousekeepingRoomSchedulesCriteriaWithDefaults

`func NewTemplateHousekeepingRoomSchedulesCriteriaWithDefaults() *TemplateHousekeepingRoomSchedulesCriteria`

NewTemplateHousekeepingRoomSchedulesCriteriaWithDefaults instantiates a new TemplateHousekeepingRoomSchedulesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplateHousekeepingRoomSchedules

`func (o *TemplateHousekeepingRoomSchedulesCriteria) GetTemplateHousekeepingRoomSchedules() []ConfigTemplateHousekeepingRoomScheduleType`

GetTemplateHousekeepingRoomSchedules returns the TemplateHousekeepingRoomSchedules field if non-nil, zero value otherwise.

### GetTemplateHousekeepingRoomSchedulesOk

`func (o *TemplateHousekeepingRoomSchedulesCriteria) GetTemplateHousekeepingRoomSchedulesOk() (*[]ConfigTemplateHousekeepingRoomScheduleType, bool)`

GetTemplateHousekeepingRoomSchedulesOk returns a tuple with the TemplateHousekeepingRoomSchedules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateHousekeepingRoomSchedules

`func (o *TemplateHousekeepingRoomSchedulesCriteria) SetTemplateHousekeepingRoomSchedules(v []ConfigTemplateHousekeepingRoomScheduleType)`

SetTemplateHousekeepingRoomSchedules sets TemplateHousekeepingRoomSchedules field to given value.

### HasTemplateHousekeepingRoomSchedules

`func (o *TemplateHousekeepingRoomSchedulesCriteria) HasTemplateHousekeepingRoomSchedules() bool`

HasTemplateHousekeepingRoomSchedules returns a boolean if a field has been set.

### GetLinks

`func (o *TemplateHousekeepingRoomSchedulesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateHousekeepingRoomSchedulesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateHousekeepingRoomSchedulesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateHousekeepingRoomSchedulesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateHousekeepingRoomSchedulesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateHousekeepingRoomSchedulesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateHousekeepingRoomSchedulesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateHousekeepingRoomSchedulesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


