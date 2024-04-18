# RoomConditionTemplateCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RoomConditionTemplate** | Pointer to [**RoomCondtionTemplateType**](RoomCondtionTemplateType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomConditionTemplateCriteria

`func NewRoomConditionTemplateCriteria() *RoomConditionTemplateCriteria`

NewRoomConditionTemplateCriteria instantiates a new RoomConditionTemplateCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomConditionTemplateCriteriaWithDefaults

`func NewRoomConditionTemplateCriteriaWithDefaults() *RoomConditionTemplateCriteria`

NewRoomConditionTemplateCriteriaWithDefaults instantiates a new RoomConditionTemplateCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RoomConditionTemplateCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomConditionTemplateCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomConditionTemplateCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomConditionTemplateCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomConditionTemplate

`func (o *RoomConditionTemplateCriteria) GetRoomConditionTemplate() RoomCondtionTemplateType`

GetRoomConditionTemplate returns the RoomConditionTemplate field if non-nil, zero value otherwise.

### GetRoomConditionTemplateOk

`func (o *RoomConditionTemplateCriteria) GetRoomConditionTemplateOk() (*RoomCondtionTemplateType, bool)`

GetRoomConditionTemplateOk returns a tuple with the RoomConditionTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomConditionTemplate

`func (o *RoomConditionTemplateCriteria) SetRoomConditionTemplate(v RoomCondtionTemplateType)`

SetRoomConditionTemplate sets RoomConditionTemplate field to given value.

### HasRoomConditionTemplate

`func (o *RoomConditionTemplateCriteria) HasRoomConditionTemplate() bool`

HasRoomConditionTemplate returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomConditionTemplateCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomConditionTemplateCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomConditionTemplateCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomConditionTemplateCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

