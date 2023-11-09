# RoomKeyDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**KeyCardData** | Pointer to **string** |  | [optional] 
**KeyTrack** | Pointer to [**KeyTrackType**](KeyTrackType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewRoomKeyDetails

`func NewRoomKeyDetails() *RoomKeyDetails`

NewRoomKeyDetails instantiates a new RoomKeyDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomKeyDetailsWithDefaults

`func NewRoomKeyDetailsWithDefaults() *RoomKeyDetails`

NewRoomKeyDetailsWithDefaults instantiates a new RoomKeyDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKeyCardData

`func (o *RoomKeyDetails) GetKeyCardData() string`

GetKeyCardData returns the KeyCardData field if non-nil, zero value otherwise.

### GetKeyCardDataOk

`func (o *RoomKeyDetails) GetKeyCardDataOk() (*string, bool)`

GetKeyCardDataOk returns a tuple with the KeyCardData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyCardData

`func (o *RoomKeyDetails) SetKeyCardData(v string)`

SetKeyCardData sets KeyCardData field to given value.

### HasKeyCardData

`func (o *RoomKeyDetails) HasKeyCardData() bool`

HasKeyCardData returns a boolean if a field has been set.

### GetKeyTrack

`func (o *RoomKeyDetails) GetKeyTrack() KeyTrackType`

GetKeyTrack returns the KeyTrack field if non-nil, zero value otherwise.

### GetKeyTrackOk

`func (o *RoomKeyDetails) GetKeyTrackOk() (*KeyTrackType, bool)`

GetKeyTrackOk returns a tuple with the KeyTrack field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyTrack

`func (o *RoomKeyDetails) SetKeyTrack(v KeyTrackType)`

SetKeyTrack sets KeyTrack field to given value.

### HasKeyTrack

`func (o *RoomKeyDetails) HasKeyTrack() bool`

HasKeyTrack returns a boolean if a field has been set.

### GetLinks

`func (o *RoomKeyDetails) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomKeyDetails) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomKeyDetails) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomKeyDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomKeyDetails) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomKeyDetails) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomKeyDetails) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomKeyDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


