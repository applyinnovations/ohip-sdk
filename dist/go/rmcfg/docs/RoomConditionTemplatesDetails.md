# RoomConditionTemplatesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomConditionTemplates** | Pointer to [**[]RoomCondtionTemplateType**](RoomCondtionTemplateType.md) | Collection of Room Condition Template Type | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomConditionTemplatesDetails

`func NewRoomConditionTemplatesDetails() *RoomConditionTemplatesDetails`

NewRoomConditionTemplatesDetails instantiates a new RoomConditionTemplatesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomConditionTemplatesDetailsWithDefaults

`func NewRoomConditionTemplatesDetailsWithDefaults() *RoomConditionTemplatesDetails`

NewRoomConditionTemplatesDetailsWithDefaults instantiates a new RoomConditionTemplatesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomConditionTemplates

`func (o *RoomConditionTemplatesDetails) GetRoomConditionTemplates() []RoomCondtionTemplateType`

GetRoomConditionTemplates returns the RoomConditionTemplates field if non-nil, zero value otherwise.

### GetRoomConditionTemplatesOk

`func (o *RoomConditionTemplatesDetails) GetRoomConditionTemplatesOk() (*[]RoomCondtionTemplateType, bool)`

GetRoomConditionTemplatesOk returns a tuple with the RoomConditionTemplates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomConditionTemplates

`func (o *RoomConditionTemplatesDetails) SetRoomConditionTemplates(v []RoomCondtionTemplateType)`

SetRoomConditionTemplates sets RoomConditionTemplates field to given value.

### HasRoomConditionTemplates

`func (o *RoomConditionTemplatesDetails) HasRoomConditionTemplates() bool`

HasRoomConditionTemplates returns a boolean if a field has been set.

### GetLinks

`func (o *RoomConditionTemplatesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomConditionTemplatesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomConditionTemplatesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomConditionTemplatesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomConditionTemplatesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomConditionTemplatesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomConditionTemplatesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomConditionTemplatesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


