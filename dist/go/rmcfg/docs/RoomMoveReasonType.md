# RoomMoveReasonType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Common Master unique code. | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**DisplayOrder** | Pointer to **float32** | Common Master record sequence number. | [optional] 

## Methods

### NewRoomMoveReasonType

`func NewRoomMoveReasonType() *RoomMoveReasonType`

NewRoomMoveReasonType instantiates a new RoomMoveReasonType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomMoveReasonTypeWithDefaults

`func NewRoomMoveReasonTypeWithDefaults() *RoomMoveReasonType`

NewRoomMoveReasonTypeWithDefaults instantiates a new RoomMoveReasonType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *RoomMoveReasonType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *RoomMoveReasonType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *RoomMoveReasonType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *RoomMoveReasonType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *RoomMoveReasonType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoomMoveReasonType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoomMoveReasonType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoomMoveReasonType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplayOrder

`func (o *RoomMoveReasonType) GetDisplayOrder() float32`

GetDisplayOrder returns the DisplayOrder field if non-nil, zero value otherwise.

### GetDisplayOrderOk

`func (o *RoomMoveReasonType) GetDisplayOrderOk() (*float32, bool)`

GetDisplayOrderOk returns a tuple with the DisplayOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayOrder

`func (o *RoomMoveReasonType) SetDisplayOrder(v float32)`

SetDisplayOrder sets DisplayOrder field to given value.

### HasDisplayOrder

`func (o *RoomMoveReasonType) HasDisplayOrder() bool`

HasDisplayOrder returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

