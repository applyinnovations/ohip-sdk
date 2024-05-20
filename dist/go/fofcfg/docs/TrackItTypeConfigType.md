# TrackItTypeConfigType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Code of the Track It Type. | [optional] 
**Description** | Pointer to **string** | Description of the Track It Code. | [optional] 
**DisplaySequence** | Pointer to **float32** | Display Sequence. | [optional] 
**HotelId** | Pointer to **string** | Property to which the Track It Code is configured. | [optional] 
**Inactive** | Pointer to **bool** | Indicates if the Track it Code is inactive. | [optional] 
**IncludePromptToSendMessage** | Pointer to **bool** | Indicator to send a message to the guest when a new trackit item is created. | [optional] 
**MessageCode** | Pointer to **string** | Code of the Message to be sent. | [optional] 
**TrackItGroup** | Pointer to [**TrackItGroupType**](TrackItGroupType.md) |  | [optional] 
**Website** | Pointer to **string** | Website associated with Track it type. | [optional] 

## Methods

### NewTrackItTypeConfigType

`func NewTrackItTypeConfigType() *TrackItTypeConfigType`

NewTrackItTypeConfigType instantiates a new TrackItTypeConfigType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTrackItTypeConfigTypeWithDefaults

`func NewTrackItTypeConfigTypeWithDefaults() *TrackItTypeConfigType`

NewTrackItTypeConfigTypeWithDefaults instantiates a new TrackItTypeConfigType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *TrackItTypeConfigType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *TrackItTypeConfigType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *TrackItTypeConfigType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *TrackItTypeConfigType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *TrackItTypeConfigType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TrackItTypeConfigType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TrackItTypeConfigType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TrackItTypeConfigType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *TrackItTypeConfigType) GetDisplaySequence() float32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *TrackItTypeConfigType) GetDisplaySequenceOk() (*float32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *TrackItTypeConfigType) SetDisplaySequence(v float32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *TrackItTypeConfigType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetHotelId

`func (o *TrackItTypeConfigType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *TrackItTypeConfigType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *TrackItTypeConfigType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *TrackItTypeConfigType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInactive

`func (o *TrackItTypeConfigType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *TrackItTypeConfigType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *TrackItTypeConfigType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *TrackItTypeConfigType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetIncludePromptToSendMessage

`func (o *TrackItTypeConfigType) GetIncludePromptToSendMessage() bool`

GetIncludePromptToSendMessage returns the IncludePromptToSendMessage field if non-nil, zero value otherwise.

### GetIncludePromptToSendMessageOk

`func (o *TrackItTypeConfigType) GetIncludePromptToSendMessageOk() (*bool, bool)`

GetIncludePromptToSendMessageOk returns a tuple with the IncludePromptToSendMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludePromptToSendMessage

`func (o *TrackItTypeConfigType) SetIncludePromptToSendMessage(v bool)`

SetIncludePromptToSendMessage sets IncludePromptToSendMessage field to given value.

### HasIncludePromptToSendMessage

`func (o *TrackItTypeConfigType) HasIncludePromptToSendMessage() bool`

HasIncludePromptToSendMessage returns a boolean if a field has been set.

### GetMessageCode

`func (o *TrackItTypeConfigType) GetMessageCode() string`

GetMessageCode returns the MessageCode field if non-nil, zero value otherwise.

### GetMessageCodeOk

`func (o *TrackItTypeConfigType) GetMessageCodeOk() (*string, bool)`

GetMessageCodeOk returns a tuple with the MessageCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageCode

`func (o *TrackItTypeConfigType) SetMessageCode(v string)`

SetMessageCode sets MessageCode field to given value.

### HasMessageCode

`func (o *TrackItTypeConfigType) HasMessageCode() bool`

HasMessageCode returns a boolean if a field has been set.

### GetTrackItGroup

`func (o *TrackItTypeConfigType) GetTrackItGroup() TrackItGroupType`

GetTrackItGroup returns the TrackItGroup field if non-nil, zero value otherwise.

### GetTrackItGroupOk

`func (o *TrackItTypeConfigType) GetTrackItGroupOk() (*TrackItGroupType, bool)`

GetTrackItGroupOk returns a tuple with the TrackItGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackItGroup

`func (o *TrackItTypeConfigType) SetTrackItGroup(v TrackItGroupType)`

SetTrackItGroup sets TrackItGroup field to given value.

### HasTrackItGroup

`func (o *TrackItTypeConfigType) HasTrackItGroup() bool`

HasTrackItGroup returns a boolean if a field has been set.

### GetWebsite

`func (o *TrackItTypeConfigType) GetWebsite() string`

GetWebsite returns the Website field if non-nil, zero value otherwise.

### GetWebsiteOk

`func (o *TrackItTypeConfigType) GetWebsiteOk() (*string, bool)`

GetWebsiteOk returns a tuple with the Website field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebsite

`func (o *TrackItTypeConfigType) SetWebsite(v string)`

SetWebsite sets Website field to given value.

### HasWebsite

`func (o *TrackItTypeConfigType) HasWebsite() bool`

HasWebsite returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


