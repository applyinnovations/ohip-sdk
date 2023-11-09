# PostRoomConditionTemplateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**RoomConditionTemplate** | Pointer to [**RoomCondtionTemplateType**](RoomCondtionTemplateType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostRoomConditionTemplateRequest

`func NewPostRoomConditionTemplateRequest() *PostRoomConditionTemplateRequest`

NewPostRoomConditionTemplateRequest instantiates a new PostRoomConditionTemplateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostRoomConditionTemplateRequestWithDefaults

`func NewPostRoomConditionTemplateRequestWithDefaults() *PostRoomConditionTemplateRequest`

NewPostRoomConditionTemplateRequestWithDefaults instantiates a new PostRoomConditionTemplateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostRoomConditionTemplateRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostRoomConditionTemplateRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostRoomConditionTemplateRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostRoomConditionTemplateRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomConditionTemplate

`func (o *PostRoomConditionTemplateRequest) GetRoomConditionTemplate() RoomCondtionTemplateType`

GetRoomConditionTemplate returns the RoomConditionTemplate field if non-nil, zero value otherwise.

### GetRoomConditionTemplateOk

`func (o *PostRoomConditionTemplateRequest) GetRoomConditionTemplateOk() (*RoomCondtionTemplateType, bool)`

GetRoomConditionTemplateOk returns a tuple with the RoomConditionTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomConditionTemplate

`func (o *PostRoomConditionTemplateRequest) SetRoomConditionTemplate(v RoomCondtionTemplateType)`

SetRoomConditionTemplate sets RoomConditionTemplate field to given value.

### HasRoomConditionTemplate

`func (o *PostRoomConditionTemplateRequest) HasRoomConditionTemplate() bool`

HasRoomConditionTemplate returns a boolean if a field has been set.

### GetWarnings

`func (o *PostRoomConditionTemplateRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostRoomConditionTemplateRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostRoomConditionTemplateRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostRoomConditionTemplateRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


