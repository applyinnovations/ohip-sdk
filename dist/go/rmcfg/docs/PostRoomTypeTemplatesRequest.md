# PostRoomTypeTemplatesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RoomTypeTemplate** | Pointer to [**RoomTypeTemplatesCriteriaRoomTypeTemplate**](RoomTypeTemplatesCriteriaRoomTypeTemplate.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostRoomTypeTemplatesRequest

`func NewPostRoomTypeTemplatesRequest() *PostRoomTypeTemplatesRequest`

NewPostRoomTypeTemplatesRequest instantiates a new PostRoomTypeTemplatesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostRoomTypeTemplatesRequestWithDefaults

`func NewPostRoomTypeTemplatesRequestWithDefaults() *PostRoomTypeTemplatesRequest`

NewPostRoomTypeTemplatesRequestWithDefaults instantiates a new PostRoomTypeTemplatesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostRoomTypeTemplatesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostRoomTypeTemplatesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostRoomTypeTemplatesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostRoomTypeTemplatesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomTypeTemplate

`func (o *PostRoomTypeTemplatesRequest) GetRoomTypeTemplate() RoomTypeTemplatesCriteriaRoomTypeTemplate`

GetRoomTypeTemplate returns the RoomTypeTemplate field if non-nil, zero value otherwise.

### GetRoomTypeTemplateOk

`func (o *PostRoomTypeTemplatesRequest) GetRoomTypeTemplateOk() (*RoomTypeTemplatesCriteriaRoomTypeTemplate, bool)`

GetRoomTypeTemplateOk returns a tuple with the RoomTypeTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypeTemplate

`func (o *PostRoomTypeTemplatesRequest) SetRoomTypeTemplate(v RoomTypeTemplatesCriteriaRoomTypeTemplate)`

SetRoomTypeTemplate sets RoomTypeTemplate field to given value.

### HasRoomTypeTemplate

`func (o *PostRoomTypeTemplatesRequest) HasRoomTypeTemplate() bool`

HasRoomTypeTemplate returns a boolean if a field has been set.

### GetWarnings

`func (o *PostRoomTypeTemplatesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostRoomTypeTemplatesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostRoomTypeTemplatesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostRoomTypeTemplatesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


