# RoomTypeTemplatesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomTypeTemplate** | Pointer to [**RoomTypeTemplatesCriteriaRoomTypeTemplate**](RoomTypeTemplatesCriteriaRoomTypeTemplate.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomTypeTemplatesCriteria

`func NewRoomTypeTemplatesCriteria() *RoomTypeTemplatesCriteria`

NewRoomTypeTemplatesCriteria instantiates a new RoomTypeTemplatesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomTypeTemplatesCriteriaWithDefaults

`func NewRoomTypeTemplatesCriteriaWithDefaults() *RoomTypeTemplatesCriteria`

NewRoomTypeTemplatesCriteriaWithDefaults instantiates a new RoomTypeTemplatesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomTypeTemplate

`func (o *RoomTypeTemplatesCriteria) GetRoomTypeTemplate() RoomTypeTemplatesCriteriaRoomTypeTemplate`

GetRoomTypeTemplate returns the RoomTypeTemplate field if non-nil, zero value otherwise.

### GetRoomTypeTemplateOk

`func (o *RoomTypeTemplatesCriteria) GetRoomTypeTemplateOk() (*RoomTypeTemplatesCriteriaRoomTypeTemplate, bool)`

GetRoomTypeTemplateOk returns a tuple with the RoomTypeTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypeTemplate

`func (o *RoomTypeTemplatesCriteria) SetRoomTypeTemplate(v RoomTypeTemplatesCriteriaRoomTypeTemplate)`

SetRoomTypeTemplate sets RoomTypeTemplate field to given value.

### HasRoomTypeTemplate

`func (o *RoomTypeTemplatesCriteria) HasRoomTypeTemplate() bool`

HasRoomTypeTemplate returns a boolean if a field has been set.

### GetLinks

`func (o *RoomTypeTemplatesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomTypeTemplatesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomTypeTemplatesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomTypeTemplatesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomTypeTemplatesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomTypeTemplatesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomTypeTemplatesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomTypeTemplatesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


