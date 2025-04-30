# RoomTypeTemplatesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomTypeTemplate** | Pointer to [**RoomTypeTemplatesToBeChangedRoomTypeTemplate**](RoomTypeTemplatesToBeChangedRoomTypeTemplate.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomTypeTemplatesToBeChanged

`func NewRoomTypeTemplatesToBeChanged() *RoomTypeTemplatesToBeChanged`

NewRoomTypeTemplatesToBeChanged instantiates a new RoomTypeTemplatesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomTypeTemplatesToBeChangedWithDefaults

`func NewRoomTypeTemplatesToBeChangedWithDefaults() *RoomTypeTemplatesToBeChanged`

NewRoomTypeTemplatesToBeChangedWithDefaults instantiates a new RoomTypeTemplatesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomTypeTemplate

`func (o *RoomTypeTemplatesToBeChanged) GetRoomTypeTemplate() RoomTypeTemplatesToBeChangedRoomTypeTemplate`

GetRoomTypeTemplate returns the RoomTypeTemplate field if non-nil, zero value otherwise.

### GetRoomTypeTemplateOk

`func (o *RoomTypeTemplatesToBeChanged) GetRoomTypeTemplateOk() (*RoomTypeTemplatesToBeChangedRoomTypeTemplate, bool)`

GetRoomTypeTemplateOk returns a tuple with the RoomTypeTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypeTemplate

`func (o *RoomTypeTemplatesToBeChanged) SetRoomTypeTemplate(v RoomTypeTemplatesToBeChangedRoomTypeTemplate)`

SetRoomTypeTemplate sets RoomTypeTemplate field to given value.

### HasRoomTypeTemplate

`func (o *RoomTypeTemplatesToBeChanged) HasRoomTypeTemplate() bool`

HasRoomTypeTemplate returns a boolean if a field has been set.

### GetLinks

`func (o *RoomTypeTemplatesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomTypeTemplatesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomTypeTemplatesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomTypeTemplatesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomTypeTemplatesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomTypeTemplatesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomTypeTemplatesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomTypeTemplatesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


